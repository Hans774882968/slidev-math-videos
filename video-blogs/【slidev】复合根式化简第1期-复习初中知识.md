---
theme: dracula
mdc: true
transition: slide-left
tags:
  - 待定系数法
---

<SlidevPageRedirector />
<MovingWatermark />
<!-- <AutoSlide :timeList="[0, 0]" /> -->

---

$$
\sqrt{ 15+\sqrt{ 161 } },\ \sqrt{ 6-3\sqrt{ 3 } },\ \sqrt{ \frac{67}{6}+7\sqrt{ 2 } }
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
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
