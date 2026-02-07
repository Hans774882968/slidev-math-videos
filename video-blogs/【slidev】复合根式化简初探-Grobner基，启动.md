---
theme: dracula
mdc: true
transition: slide-left
tags:
  - 待定系数法
---

$$
\sqrt{ 15+\sqrt{ 161 } },\ \sqrt{ 6-3\sqrt{ 3 } },\ \sqrt{ \frac{67}{6}+7\sqrt{ 2 } }
$$

$$
\begin{cases}
\sqrt[5]{ 10360559*\sqrt{ 2 } + 8459361*\sqrt{ 3 } } \\
\sqrt{ \frac{2}{3}*\sqrt{ 6 } + \frac{4}{3}*\sqrt{ 2 } + \sqrt{ 3 } + 2 } \\
\sqrt{ \frac{3}{2}*\sqrt{ 6 } + 6*\sqrt{ 2 } + \frac{8}{3}*\sqrt{ 3 } + \frac{233}{24} } \\
\sqrt[3]{ \frac{6551}{18}\sqrt{ 6 } + \frac{1159}{2}*\sqrt{ 2 } + \frac{4336}{9}*\sqrt{ 3 } + 1028 } \\
\sqrt[5]{ -120*\sqrt{ 6 } + 224*\sqrt{ 2 } + 184*\sqrt{ 3 } - 296 } \\
\sqrt[5]{ 66360*\sqrt{ 6 } + 125007*\sqrt{ 2 } + 96538*\sqrt{ 3 } + 181447 }
\end{cases}
$$

---

## 最简单的复合根式： $s=\sqrt{ c_{1}+c_{2}\sqrt{ c_{3} } }$

注： $c_{1},c_{2},c_{3}$ 为有理数

如果 $c_{2} > 0$ ，我们就设 $s = \sqrt{ a }+\sqrt{ b }$ ，否则就设 $s = \sqrt{ a } - \sqrt{ b }$ ，其中 $a,b$ 为有理数。以 $c_{2}<0$ 为例（大于0推出同一个方程），两边同时平方： $s^2=a+b-2\sqrt{ ab }=c_{1}+c_{2}\sqrt{ c_{3} }$ 。对比系数有：

$$
\begin{cases}
a+b=c_{1} \\
2\sqrt{ ab }=-c_{2}\sqrt{ c_{3} }
\end{cases} \implies \begin{cases}
a+b=c_{1} \\
4ab=c_{2}^2c_{3}
\end{cases}
$$

由**韦达定理**，我们构造一元二次方程 $x^2-c_{1}x+\frac{c_{2}^2c_{3}}{4}=0$ ，则它的两根就是所求。

---

> 大佬，请写sage代码求出`sqrt(c1+c2*sqrt(c3))`，其中c1、c2、c3都是有理数。如果c2大于0，就设它等于`sqrt(a)+sqrt(b)`，否则设它等于`sqrt(a)-sqrt(b)`，其中a、b都是有理数

---

```python {*}{maxHeight:'500px'}
def simplify_nested_sqrt(c1, c2, c3):
    """
    尝试将 sqrt(c1 + c2*sqrt(c3)) 化为 sqrt(a) ± sqrt(b)，其中 a,b ∈ QQ, a,b ≥ 0.
    要求 c1, c2, c3 ∈ QQ，且 c3 > 0.

    返回 (a, b, sgn) 使得 sqrt(c1 + c2*sqrt(c3)) == sqrt(a) + sgn*sqrt(b),
    其中 sgn = +1 if c2 >= 0, else -1.
    若无法表示为这种形式，则返回 None.
    """
    # 确保输入是有理数
    c1 = QQ(c1)
    c2 = QQ(c2)
    c3 = QQ(c3)

    if c3 <= 0:
        raise ValueError("c3 must be positive rational")

    # 特殊情况： c2 == 0 ，则原式 = sqrt(c1)，只需检查 c1 是否为平方数
    if c2 == 0:
        if c1 < 0:
            return None
        sqrt_c1 = sqrt(c1)
        if sqrt_c1 in QQ:
            return (c1, 0, 1)
        else:
            return None

    sgn = 1 if c2 > 0 else -1

    R.<x> = QQ[]
    poly = x ^ 2 - c1 * x + (c2 ^ 2 * c3) / 4

    roots = poly.roots(multiplicities=False)

    if len(roots) != 2:
        # 判别式非完全平方，根不在 QQ 中
        return None

    a, b = roots[0], roots[1]

    if a < 0 or b < 0:
        return None

    lhs = sqrt(c1 + c2 * sqrt(c3))
    rhs1 = sqrt(a) + sgn * sqrt(b)
    rhs2 = sqrt(b) + sgn * sqrt(a)
    if abs(lhs.n(50) - rhs1.n(50)) < 1e-10:
        return (a, b, sgn)
    if abs(lhs.n(50) - rhs2.n(50)) < 1e-10:
        return (b, a, sgn)
    return None
```

---

```python {*}{maxHeight:'500px'}
def solve_equation236(c1, c2, c3, c4, pw, print_G=False, print_last_poly=False):
    '''
    解方程`(a+b*sqrt(2)+c*sqrt(3)+d*sqrt(6))^pw == c1+c2*sqrt(2)+c3*sqrt(3)+c4*sqrt(6)`

    :param c1: 常数项
    :param c2: 根号2的系数
    :param c3: 根号3的系数
    :param c4: 根号6的系数
    :param pw: 幂
    :param print_G: 是否打印Grobner基
    :param print_last_poly: 是否打印Grobner基最后一个元素的因式分解
    '''
    S.<a, b, c, d, s2, s3> = PolynomialRing(QQ, order='lex')
    I = S.ideal([s2 ^ 2 - 2, s3 ^ 2 - 3])
    Quo = S.quotient(I)
    expr = Quo(a + b * s2 + c * s3 + d * s2 * s3)
    expanded = expr ^ pw
    rep = expanded.lift()
    # 现在 rep 是 a, b, c, d, s2, s3 的多项式，其中 s2, s3 次数 <= 1
    v1 = rep.coefficient({s2: 0, s3: 0})
    v2 = rep.coefficient({s2: 1, s3: 0})
    v3 = rep.coefficient({s2: 0, s3: 1})
    v4 = rep.coefficient({s2: 1, s3: 1})
    G = ideal(v1 - c1, v2 - c2, v3 - c3, v4 - c4).groebner_basis()
    if print_G:
        for i, g in enumerate(G):
            print(f'G[{i}] =', g)
    last_var_poly = G[-1].factor()
    if print_last_poly:
        print(last_var_poly)
    last_var = d
    sols = solve(SR(last_var_poly), SR(last_var))
    sols = [sol.rhs() for sol in sols if sol.rhs().is_real()]
    var_list = (a, b, c, d)
    return G, last_var, var_list, s2, s3, sols, Quo


def back_substitution_with_a_sol(G, last_var, var_list, current_sol):
    solved_vars = {last_var}

    # 从倒数第二项开始向前代入
    for i in range(len(G) - 2, -1, -1):
        g = G[i]
        '''
        将已知变量代入
        LLM 的代码在这里报错 TypeError: keys do not match self's parent
        问 LLM ，它胡说八道。但我自己 debug 发现，只需要这么写：
        new_var = next((item for item in var_list if item == rv), None)
        就能让变量的类型正确，这代码也就能跑通了
        '''
        g_sub = g.subs(current_sol)
        if not g_sub:
            continue
        remaining_vars = [v for v in g_sub.variables() if v not in solved_vars]

        if len(remaining_vars) == 1:
            rv = remaining_vars[0]
            # 转为符号表达式求解
            g_SR = SR(g_sub)
            try:
                sols_v = solve(g_SR == 0, SR(rv))
                if sols_v:
                    sol_val = sols_v[0].rhs()
                    new_var = next((item for item in var_list if item == rv), None)
                    current_sol[new_var] = QQbar(sol_val) if sol_val in QQ else sol_val
                    solved_vars.add(new_var)
                else:
                    break  # 无解
            except Exception as e:
                print('解方程遇到报错', e)
                break  # 求解失败
        elif len(remaining_vars) == 0:
            # 已满足，跳过
            continue
        else:
            # 多变量，暂时跳过（实际中 Gröbner 基应为三角形）
            continue

    ret = {str(k): v for k, v in current_sol.items()}
    return ret


def back_substitution(G, last_var, var_list, sols):
    all_solutions = []
    for val in sols:
        current_sol = {last_var: QQbar(val) if val in QQ else val}
        current_sol = back_substitution_with_a_sol(G, last_var, var_list, current_sol)
        all_solutions.append(current_sol)
    return all_solutions


def get_expr_from_sol236(sol, s2, s3):
    return sol['a'] + sol['b'] * s2 + sol['c'] * s3 + sol['d'] * s2 * s3
```

---

```python {*}{maxHeight:'500px'}
load('5-绝谷野樵化简根式/sqrt236_shared.sage')

G, last_var, var_list, s2, s3, sols, Quo = solve_equation236(1028, 1159 / 2, 4336 / 9, 6551 / 18, 3)
all_solutions = back_substitution(G, last_var, var_list, sols)
print(all_solutions)

G, last_var, var_list, s2, s3, sols, Quo = solve_equation236(2, 4 / 3, 1, 2 / 3, 2)
sol1 = back_substitution_with_a_sol(G, last_var, var_list, {last_var: 1 / 6})
sol2 = back_substitution_with_a_sol(G, last_var, var_list, {last_var: -1 / 6})
print(sol1, sol2)

G, last_var, var_list, s2, s3, sols, Quo = solve_equation236(67 / 6, 7, 0, 0, 2)
sol1 = back_substitution_with_a_sol(G, last_var, var_list, {last_var: 7 / 6})
sol1_expr = get_expr_from_sol236(sol1, s2, s3)
sol1_expr_square = Quo(sol1_expr ^ 2).lift()
print(sol1_expr, sol1_expr_square)
sol2 = back_substitution_with_a_sol(G, last_var, var_list, {last_var: 0})
sol2_expr = get_expr_from_sol236(sol2, s2, s3)
sol2_expr_square = Quo(sol1_expr.subs({sqrt(3): s3, sqrt(2): s2, sqrt(6): s2 * s3}) ^ 2).lift()
print(sol2_expr, sol2_expr_square)
print(sol1, sol2)

G, last_var, var_list, s2, s3, sols, Quo = solve_equation236(233 / 24, 6, 8 / 3, 3 / 2, 2)
sol1 = back_substitution_with_a_sol(G, last_var, var_list, {last_var: 3 / 4})
sol2 = back_substitution_with_a_sol(G, last_var, var_list, {last_var: 0})
print(sol1, sol2)
```

---

TODO