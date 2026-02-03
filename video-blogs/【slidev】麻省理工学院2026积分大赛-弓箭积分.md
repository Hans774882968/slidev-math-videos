---
theme: dracula
mdc: true
transition: slide-left
tags:
  - 数学模板
---

<SlidevPageRedirector />
<MovingWatermark />
<!-- <AutoSlide :timeList="[0, 0]" /> -->



---

大佬，你是一名专家Python工程师，精通高质量Pythonic代码编写。图中的积分我们叫它3阶弓箭积分。请帮我写一段Python代码计算n阶弓箭积分。注意：
1. 对x的定积分不需要调用任何计算包，可以直接写出表达式
2. 使用迭代来算，不需要用递归来算
3. 需要算出有理数解
你先帮我看看是否需要使用sage，或者问我其它一些模糊点，我确认后再开始开发

大佬，我们定义1阶弓箭积分：

$$
\int_{\int_{0}^{1} x dx}^{\int_{0}^{1} x dx} x dx
$$

2阶弓箭积分：

$$
\int_{\int_{\int_{0}^{1} x dx}^{1} x dx}^{\int_{0}^{\int_{0}^{1} x dx} x dx} x dx
$$

以此类推。另外，用Python自带的`Fraction`类就行

```python
from fractions import Fraction


def arrow_integral(n: int, m: int = 1):
    '''
    计算 n 阶弓箭积分 I_n = ∫_{L_n}^{U_n} x^m dx，
    其中：
        L_1 = U_1 = ∫₀¹ x^m dx = 1/(m+1)
        L_k = ∫_{L_{k-1}}^1 x^m dx = (1 - L_{k-1}^{m+1}) / (m+1)
        U_k = ∫_0^{U_{k-1}} x dx = (U_{k-1}^{m+1}) / (m+1)
        I_n = (U_n^{m+1} - L_n^{m+1}) / (m+1)

    参数:
        n (int): 阶数，n >= 1
        m (int): 被积函数的阶数，m >= 1

    返回:
        Fraction: 有理数结果
    '''
    if n < 1:
        raise ValueError('n must be >= 1')
    if m < 1:
        raise ValueError('m must be >= 1')

    M = m + 1
    L = Fraction(1, M)
    U = Fraction(1, M)
    res_list = []
    for i in range(1, n + 1):
        res = (U ** M - L ** M) / M
        res_list.append((L, U, res))
        if i == n:
            break
        L = (Fraction(1) - L ** M) / M
        U = (U ** M) / M
    return res_list


if __name__ == '__main__':
    n = 8
    res_list = arrow_integral(n)
    for i, (L, U, res) in enumerate(res_list, start=1):
        print(f'I_{i} = {res} = {float(res):.8f}, L_{i} = {L} = {float(L):.8f}, U_{i} = {U} = {float(U):.8f}')
    n = 6
    res_list = arrow_integral(n, 2)
    for i, (L, U, res) in enumerate(res_list, start=1):
        print(f'I_{i} = {res} = {float(res):.8f}, L_{i} = {L} = {float(L):.8f}, U_{i} = {U} = {float(U):.8f}')
```

大佬，我写完了支持被积函数是`x^m`的代码。请帮我检查代码是否有问题，然后帮我算一下`m=2`的情况的 $L_{n}$ 的不动点

大佬，我发现被积函数是 $x^m$ 时，不动点方程是 $x^{m+1}+(m+1)x-1=0$ ，于是`m=1`： $\sqrt{ 2 }-1$ ，`m=2`： $\sqrt[3]{\frac{1 + \sqrt{5}}{2}} + \sqrt[3]{\frac{1 - \sqrt{5}}{2}}$ 。请问对于一般的m，是否都能求出根式解？还是说m=4就没法求根式解了？如果能求，就帮我求出它

定义 $L(m,n)=\frac{1-L^{m+1}(m,n-1)}{m+1},\ L(m,1)=\frac{1}{m+1},\ m,n \geq 1$
