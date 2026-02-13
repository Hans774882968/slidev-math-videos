---
theme: dracula
mdc: true
transition: slide-left
tags:
  - 待定系数法
---

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

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
