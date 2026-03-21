---
theme: dracula
mdc: true
transition: slide-left
lineNumbers: true
# fonts:
#   sans: 'jing-nan-bo-bo-hei-bold'
#   local: 'jing-nan-bo-bo-hei-bold'
tags:
  - 全概率公式
  - 等比数列
---

<SlidevPageRedirector />
<MovingWatermark colorCls="text-white" :opacity="0.8" />
<!-- <AutoSlide :timeList="[0, 0]" /> -->

<div class="bg-gradient-to-br from-[#719cd4] to-[#5984bf] w-full flex flex-col items-center justify-center p-4">
  <h1 class="title-stroke !text-[#3468ab] !mb-1 font-black tracking-tighter text-center">
    2026赣州一模压轴题
  </h1>

  <div class="flex flex-col justify-center items-center gap-3">
    <h2 class="flex justify-center items-center font-black text-center !text-[#4a81c8] !text-4xl md:!text-5xl">
      <span class="subtitle-stroke">能用</span>
      <div class="ml-6 mr-2 bg-white px-4 py-1.5 rounded-xl">
        <span class="!text-5xl md:!text-[52px] text-[#4a81c8]">多项式</span>
      </div>
      <span class="subtitle-stroke">减少计算量！</span>
    </h2>
  </div>

  <p class="text-white text-2xl md:text-3xl text-center">
    概率dp+构造等比数列 或 概率dp求多项式系数
  </p>

  <div class="border-4 border-white bg-gradient-to-br from-[#719cd4] to-[#5984bf] px-4 rounded-2xl shadow-lg flex items-center justify-center text-lg md:text-xl text-white font-serif">

$$
dp[m,n]=\sum_{k=\lceil m/2 \rceil}^{m} dp[k,n-1] \cdot C(k, m-k) \cdot \left(\frac{1}{3}\right)^{m-k} \cdot \left(\frac{2}{3}\right)^{2k-m}
$$
  </div>

  <p class="text-white text-2xl md:text-3xl mt-6 text-center">
    OIER/ACMER 狂喜题~
  </p>
</div>

<style>
@font-face {
  font-family: 'jing-nan-bo-bo-hei-bold';
  src: url('/fonts/jing-nan-bo-bo-hei-bold.ttf') format('truetype');
}
.title-stroke {
  -webkit-text-stroke: 10px white;
  paint-order: stroke fill;
}

.subtitle-stroke {
  -webkit-text-stroke: 8px white;
  paint-order: stroke fill;
}

@media (max-width: 768px) {
  .subtitle-stroke {
    -webkit-text-stroke: 6px white;
  }
}
</style>

---

## 题干

现有一种不断分裂的M细胞，在每个分裂周期中，一个M细胞以 $\frac{2}{3}$ 的概率分化成一个新的M细胞，以 $\frac{1}{3}$ 的概率分裂成两个新的M细胞，分裂后原来的M细胞消失，新的M细胞在下一个分裂周期里会继续分裂。设初始状态下有1个M细胞， $n$ 个分裂周期后，M细胞的数目为 $X_n$

1. 求 $X_2$ 的分布列和数学期望
2. 求概率 $P(X_n = 2)$
3. 证明： $P(X_n = 3) < \frac{6}{5}(\frac{2}{3})^{n-1}$

<div class="h-50 flex justify-center items-center text-7xl text-orange">
概率dp求<span class="text-8xl">多项式</span>系数~
</div>

---

## （1）求 $X_2$ 的分布列和数学期望

$X_2$ 是分裂两个周期后的细胞个数，故 $X_2$ 的可能取值为 1, 2, 3, 4

- $P(X_2 = 1) = P(X_1 = 1) \cdot \frac{2}{3} = \frac{2}{3} \cdot \frac{2}{3} = \frac{4}{9}$
- $P(X_2 = 2) = P(X_1 = 1) \cdot \frac{1}{3} + P(X_1 = 2) \cdot C_2^1 \cdot \frac{2}{3} \cdot \frac{1}{3} = \frac{2}{3} \cdot \frac{1}{3} + \frac{1}{3} \cdot \frac{4}{9} = \frac{10}{27}$
- $P(X_2 = 3) = P(X_1 = 2) \cdot C_2^1 \cdot \frac{2}{3} \cdot \frac{1}{3} = \frac{1}{3} \cdot \frac{4}{9} = \frac{4}{27}$
- $P(X_2 = 4) = P(X_1 = 2) \cdot (\frac{1}{3})^2 = \frac{1}{3} \cdot \frac{1}{9} = \frac{1}{27}$

分布列：

| $X_2$ | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|
| $P$ | $\frac{4}{9}$ | $\frac{10}{27}$ | $\frac{4}{27}$ | $\frac{1}{27}$ |

数学期望 $E[X_2] = 1 \cdot \frac{4}{9} + 2 \cdot \frac{10}{27} + 3 \cdot \frac{4}{27} + 4 \cdot \frac{1}{27} = \frac{16}{9}$

---

## （2）求概率 $P(X_n = 2)$ - 法1：不用递推式

不懂**概率dp+全概率公式**（高中通常称为**马尔可夫链**）能做吗？能的

$X_n = 2$ 表示n个细胞周期中，某个周期有1个M细胞分裂成两个，其他周期都分化成1个。故枚举所有可能的一分为二的时刻 $k=1 \dots n$ ：

1. 前k-1个周期，只有一个细胞且都分化为1个，概率 $(\frac{2}{3})^{k-1}$
2. 第k个周期，细胞一分为二，概率 $\frac{1}{3}$
3. 后n-k个周期，两个细胞每次都分化为1个，概率 $(\frac{2}{3})^{2(n-k)}$

所以总概率

$$
\begin{align}
P(X_n = 2)&=\sum_{k=1}^{n} (\frac{2}{3})^{k-1}\frac{1}{3}(\frac{2}{3})^{2(n-k)}=\sum_{k=1}^{n} \frac{1}{3}(\frac{2}{3})^{2n-k-1} \\
&=\frac{1}{3}(\frac{2}{3})^{2n-1}\sum_{k=1}^{n}(\frac{3}{2})^{k}=(\frac{2}{3})^{2n-1}((\frac{3}{2})^n-1)=(\frac{2}{3})^{n-1}(1-(\frac{2}{3})^n)
\end{align}
$$

---

## （3）证明： $P(X_n = 3) < \frac{6}{5}(\frac{2}{3})^{n-1}$

> [!note] 想法
> 如果能求出**通项公式**，这题就很好解决。但这似乎不简单！那就考虑**子问题**的性质，求递推式吧！

<div class="flex justify-center">
<img src="./assets/260320/想法1.png" class="w-160" />
</div>

记 $P(X_{n}=m)$ 为 $dp[m,n]$ 。设第n-1个周期后有k个细胞，则：

- 第n个周期需要在k个细胞中选m-k个来一分为二，剩下 $2k-m$ 个细胞分化为一个，方案数 $C_{k}^{m-k}$ 。而为了能做这个选取动作，需要 $k \geq m-k \implies k \geq \lceil \frac{m}{2} \rceil$
- 边界情况：0个周期后只有1个细胞，故 $dp[m,0]=[m==1]$ ，即n=0时值为1，其他情况值为0

于是由**全概率公式**：

$$
\begin{cases}
dp[m,0]=[m == 1] \\
dp[m,n]=\sum_{k=\lceil m/2 \rceil}^{m} dp[k,n-1] \cdot C(k, m-k) \cdot \left(\frac{1}{3}\right)^{m-k} \cdot \left(\frac{2}{3}\right)^{2k-m}
\end{cases}
$$

---

## （3）续

以m=2为例：

$$
\begin{align}
dp[2,n]&=C_{1}^1dp[1,n-1] \cdot (\frac{1}{3})^{1} \cdot (\frac{2}{3})^{0}+C_{2}^0dp[2,n-1] \cdot (\frac{1}{3})^{0} \cdot (\frac{2}{3})^{2} \\
&=\frac{1}{3}dp[1,n-1]+\frac{4}{9}dp[2,n-1] \\
&=\frac{1}{3} \cdot (\frac{2}{3})^{n-1}+\frac{4}{9}dp[2,n-1]
\end{align}
$$

再以m=3为例：

$$
\begin{align}
dp[3,n]&=C_{2}^1dp[2,n-1] \cdot (\frac{1}{3})^{1} \cdot (\frac{2}{3})^{1}+C_{3}^0dp[3,n-1] \cdot (\frac{1}{3})^{0} \cdot (\frac{2}{3})^{3} \\
&=\frac{4}{9}dp[2,n-1]+\frac{8}{27}dp[3,n-1]
\end{align}
$$

代入上一问求出的 $dp[2,n]=(\frac{2}{3})^{n-1}(1-(\frac{2}{3})^n)$ 得： $dp[3,n]=(\frac{2}{3})^{n}(1-(\frac{2}{3})^{n-1})+\frac{8}{27}dp[3,n-1]$

问题转化为：用这条递推式求出通项公式

---

## （3）求数列通项公式-法1：将递推式转化为累加形式

我们希望通过两边同乘 $f(n)$ ，使得递推式能够**累加**，即

$$
\begin{cases}
f(n)dp[3,n]=\dots+\frac{8}{27}f(n)dp[3,n-1] \\
f(n-1)dp[3,n-1]=\dots+\frac{8}{27}f(n-1)dp[3,n-2] \\
\dots, \quad f(1)dp[3,1]=0+\frac{8}{27}f(1)dp[3,0]
\end{cases}
$$

里满足 $\frac{8}{27}f(n)=f(n-1),\ n \geq 2$ 。令 $\frac{8}{27}f(1)=f(0)=1$ 得 $f(n)=(\frac{3}{2})^{3n}$ 。于是累加得：

$$
\begin{align}
(\frac{3}{2})^{3n}dp[3,n]-dp[3,0]&=\sum_{k=1}^{n} (\frac{3}{2})^{3k}(\frac{2}{3})^{k}(1-(\frac{2}{3})^{k-1})=\sum_{k=1}^{n} (\frac{3}{2})^{2k}-(\frac{3}{2})^{k+1} \\
&=\frac{\frac{9}{4}}{\frac{5}{4}} \left((\frac{3}{2})^{2n} - 1\right)-\frac{\frac{9}{4}}{\frac{1}{2}} \left((\frac{3}{2})^n - 1\right) \\
&= \frac{9}{5} \left((\frac{3}{2})^{2n} - 1\right)-\frac{9}{2} \left((\frac{3}{2})^n - 1\right)=\frac{9}{5} (\frac{3}{2})^{2n} -\frac{9}{2} (\frac{3}{2})^n + \frac{27}{10}
\end{align}
$$

于是 $dp[3,n]=(\frac{2}{3})^{3n}(\frac{9}{5} (\frac{3}{2})^{2n} -\frac{9}{2} (\frac{3}{2})^n + \frac{27}{10})=\frac{27}{10}(\frac{2}{3})^{3n}-\frac{9}{2}(\frac{2}{3})^{2n}+\frac{9}{5}(\frac{2}{3})^{n}$

---

## （3）求数列通项公式-法2：构造 $dp[3,n]+f(n)$ 为等比数列

我们希望找到 $f(n)$ ，使得 $dp[3,n]+f(n)=\frac{8}{27}(dp[3,n-1]+f(n-1))$ ，展开并对比原递推式得：

$$
\textcolor{orange}{
\boldsymbol{
f(n) - (\frac{2}{3})^3 f(n-1) = (\frac{2}{3})^{2n-1} - (\frac{2}{3})^n
}
}
$$

右边是关于 $x=(\frac{2}{3})^n \in (0, \frac{2}{3}]$ 的二次函数 $\frac{3}{2}x^2-x$ ，故设 $f(n) = A \cdot (\frac{2}{3})^{2n} + B \cdot (\frac{2}{3})^n+C$ ，于是方程左边

$$
\begin{align}
\text{LHS} &= \left[ A \left(\frac{2}{3}\right)^{2n} + B \left(\frac{2}{3}\right)^n+C \right] - \left(\frac{2}{3}\right)^3 \left[ A \left(\frac{2}{3}\right)^{2n-2} + B \left(\frac{2}{3}\right)^{n-1}+C \right] \\
&=\frac{1}{3} A \left(\frac{2}{3}\right)^{2n} + \frac{5}{9} B \left(\frac{2}{3}\right)^n+\frac{19}{27}C=\frac{A}{3}x^2+\frac{5}{9}Bx+\frac{19}{27}C
\end{align}
$$

---

## （3）求数列通项公式-法2（续）

对比系数得

$$
\begin{cases}
\frac{A}{3}=\frac{3}{2} \\
\frac{5}{9}B=-1 \\
\frac{19}{27}C=0
\end{cases}
\implies \begin{cases}
A = \frac{9}{2} \\
B = -\frac{9}{5} \\
C=0
\end{cases}
$$

设新数列 $c_n = dp[3,n] + f(n)=dp[3,n]+\left[ \frac{9}{2} \left(\frac{2}{3}\right)^{2n} - \frac{9}{5} \left(\frac{2}{3}\right)^n \right]$ ，则它是首项 $c_{0}=\frac{27}{10}$ ，公比 $\frac{8}{27}$ 的等比数列。故

$$
\begin{align}
dp[3,n]&=c_{n}-f(n) \\
&=\frac{27}{10} \left(\frac{2}{3}\right)^{3n} - \left[ \frac{9}{2} \left(\frac{2}{3}\right)^{2n} - \frac{9}{5} \left(\frac{2}{3}\right)^n \right] \\
&=\frac{27}{10}(\frac{2}{3})^{3n}-\frac{9}{2}(\frac{2}{3})^{2n}+\frac{9}{5}(\frac{2}{3})^{n}
\end{align}
$$

---

## （3）给证明收尾（ $P(X_n = 3) < \frac{6}{5}(\frac{2}{3})^{n-1}$ ）

前面已经求出通项公式

$$
dp[3,n]=\frac{27}{10}(\frac{2}{3})^{3n}-\frac{9}{2}(\frac{2}{3})^{2n}+\frac{9}{5}(\frac{2}{3})^{n}
$$

按原不等式想要的系数 $\frac{6}{5}(\frac{2}{3})^{n-1}$ 提取公因式：

$$
\begin{align}
P(X_{n}=3)&=\frac{6}{5}(\frac{2}{3})^{n-1}(\frac{9}{4}(\frac{2}{3})^{2n+1}-\frac{15}{4}(\frac{2}{3})^{n+1}+1) \\
&=\frac{6}{5}(\frac{2}{3})^{n-1}(\frac{3}{2}(\frac{2}{3})^{2n}-\frac{5}{2}(\frac{2}{3})^{n}+1)
\end{align}
$$

记 $x=(\frac{2}{3})^n \in (0, \frac{2}{3}]$ 则得 $0 \leq \frac{3}{2}x^2-\frac{5}{2}x+1 < 1$ ，证毕

---

## 扩展：求 $P(X_{n}=m),\ m \geq 1$ （即 $dp[m,n]$ ）的通项公式

我们知道：

$$
\begin{cases}
dp[m,0]=[m == 1] \\
dp[m,n]=\sum_{k=\lceil m/2 \rceil}^{m} dp[k,n-1] \cdot C(k, m-k) \cdot \left(\frac{1}{3}\right)^{m-k} \cdot \left(\frac{2}{3}\right)^{2k-m}
\end{cases}
$$

用sympy符号计算的能力可以直接求解。于是有以下提示词：

> 大佬，你是一名数学科研工作者，精通概率论。有以下问题：（问题复述略）我希望写Python代码求解 $P(X_n=m)$ 的表达式（m为常数）。容易知道这个表达式只与n有关，所以考虑路线：先求出递推式的各个系数，再代入 $P(X_n=1)$ 的关于n的表达式，依次算出 $P(X_n=2 \dots m)$ 。提示： $P(X_{n-1}=t)$ （t为常数）也是关于n的式子，可以由 $P(X_{n}=t)$ 的式子调用`.subs()`得到。注意：

>1. 需要使用Fraction表示精确结果
>2. 不要写和这个任务无关的代码
>3. 代码里不写注释，但要在外部说明这段代码做了什么

> 大佬，你代码的`sol = rsolve(eq, y(n), {y(0): 0})`这一行报错：`AttributeError: 'NoneType' object has no attribute 'subs'`。请帮我看看是哪里有bug

---

```python {*}{maxHeight:'390px'}
from sympy import symbols, Function, rsolve, simplify, binomial, Rational, expand


def verify_expression(ans, rhs_list, n_range=range(1, 10)):
    if not isinstance(rhs_list, list):
        rhs_list = [rhs_list]
    for rhs in rhs_list:
        delta_simp = simplify(ans - rhs)
        # 直接 delta_simp == 0 返回 False ，所以用数值解来验证
        for i in n_range:
            val = delta_simp.subs(n, i)
            if val != 0:
                raise ValueError(f"n={i} 时验证失败: ans={ans}, rhs={rhs}, diff={val}")


n = symbols('n', integer=True)
m = 5
probs = {}
probs[1] = Rational(2, 3)**n

for k in range(2, m + 1):
    y = Function('y')
    rhs = 0
    for j in range((k + 1) // 2, k):
        s = k - j
        coeff = binomial(j, s) * Rational(1, 3)**s * Rational(2, 3)**(j - s)
        term = probs[j].subs(n, n - 1) * coeff
        rhs += term

    rhs = simplify(expand(rhs))

    coeff_self = Rational(2, 3)**k

    eq = y(n) - coeff_self * y(n - 1) - rhs
    sol = rsolve(eq, y(n), {y(0): 0})

    if sol is None:
        raise ValueError(f"rsolve failed for k={k}")

    probs[k] = simplify(sol)

for k in range(1, m + 1):
    print(probs[k])

verify_expression(probs[2], Rational(2, 3)**(n - 1) * (1 - (Rational(2, 3))**n))
verify_expression(probs[3], [
    Rational(6, 5) * (Rational(2, 3))**(n - 1) * (1 - (Rational(2, 3))**(n - 1)) * (1 - (Rational(2, 3))**n),
    Rational(27, 10) * Rational(2, 3)**(3 * n) - Rational(9, 2) * Rational(2, 3)**(2 * n) + Rational(9, 5) * Rational(2, 3)**n
])
verify_expression(probs[4], 27 * Rational(2, 3)**n * (-153 * Rational(2, 3)**(n * 3) + 342 * Rational(2, 3)**(n * 2) - 247 * Rational(2, 3)**n + 58) / 760)
```

```python
2: 3*(-4**n + 6**n)/(2*9**n)
3: 9*(-5*108**n + 2*162**n + 3*72**n)/(10*243**n)
4: 27*(58*118098**n - 153*34992**n + 342*52488**n - 247*78732**n)/(760*177147**n)
5: 81*(7209*1377495072**n - 19890*243**n*54**(4*n) + 20007*3099363912**n - 8710*4649045868**n + 1384*6973568802**n)/(49400*10460353203**n)
```

---

## 能求出更简洁的形式吗——概率dp求多项式系数

我们知道

$$
\begin{cases}
dp[1,n]=(\frac{2}{3})^n \\
dp[2,n]=(\frac{2}{3})^{n-1}(1-(\frac{2}{3})^n) \\
dp[3,n]=\frac{27}{10}(\frac{2}{3})^{3n}-\frac{9}{2}(\frac{2}{3})^{2n}+\frac{9}{5}(\frac{2}{3})^{n}
\end{cases}
$$

如果令 $x=(\frac{2}{3})^n$ ，则它们都是关于x的多项式。并且 $m=4$ 时的通项公式`27*(58*118098**n - 153*34992**n + 342*52488**n - 247*78732**n)/(760*177147**n)`中，`118098, 34992`等数的质因数都只有2和3。我们猜测：

<div class="border border-white px-4 rounded-lg">

**$dp[m,n]$ 是关于x的m次多项式**，且**常数项为0**。
</div>

设`c[m][i]`为 $dp[m,n]$ 的 $x^i$ 项的系数，即 $dp[m,n]=\sum_{i=0}^{m} c[m,i]x^i$ 。于是我们的任务转化为求c数组。

---

## 概率dp求多项式系数（续）

重新观察递推式：

$$
dp[m,n]=\sum_{k=\lceil m/2 \rceil}^{m} dp[k,n-1] \cdot C(k, m-k) \cdot \left(\frac{1}{3}\right)^{m-k} \cdot \left(\frac{2}{3}\right)^{2k-m}
$$

其他项都好说，但怎么求这个 $dp[k,n-1]$ 呢？我们知道 $dp[k,n-1]$ 是关于 $x'=(\frac{2}{3})^{n-1}$ 的多项式，那 $x'$ 和x有什么关系呢？显然是 $x'=\frac{3}{2}x$ 。又因为 $dp[m,n]=\sum_{i=0}^{m} c[m,i]x^i$ 里n从未单独出现，只蕴含在x里，所以如果记 $f(x)=dp[m,n]$ ，那么 $dp[m,n-1]=f(\frac{3}{2}x)$

回到 $c[m,i]$ ，我们从上面的分析得到： $dp[k,n-1]$ 对 $c[m,i]$ 的贡献就是 $c[k,i] \cdot (\frac{3}{2})^i$ ，即：

$$
c[m,i]=\sum_{k=\lceil m/2 \rceil}^{m} (c[k,i] \cdot (\frac{3}{2})^i) \cdot C(k, m-k) \cdot \left(\frac{1}{3}\right)^{m-k} \cdot \left(\frac{2}{3}\right)^{2k-m}
$$

但当 $k=m$ 时，我们发现这里出现了**自我指涉**：为了求 $c[m,i]$ ，需要先知道 $c[m,i]$

---

## 概率dp求多项式系数（续2）

别担心！在**概率dp**里这很常见。出现自我指涉的情况，说明需要**解方程**。假设 $k<m$ 对 $c[m,i]$ 的总贡献已经求出是 $T$ ，把递推式里 $k=m$ 的情况单独拿出来：

$$
c[m,i]=T+c[m,i] \cdot (\frac{3}{2})^i (\frac{2}{3})^{m} \implies c[m,i]=\frac{T}{1-(\frac{2}{3})^{m-i}}
$$

现在 $c[m,i]$ 能求了，但我们**看分母**，当 $m=i$ 时分母变成0了！那怎么求 $c[m,m]$ 呢？

$dp[m,n]$ 的常数项为0，所以 $x=1$ （即 $n=1$ ）时 $dp[m,n]=0$ ，又 $dp[m,n]=\sum_{i=0}^{m} c[m,i]x^i \implies \sum_{i=0}^{m} c[m,i]=0$ 。这意味着，求出 $c[m,1 \dots m-1]$ 就能求出 $c[m,m]=-\sum_{i=0}^{m-1} c[m,i]$ 了~

### 思考

1. 设 $x=(\frac{2}{3})^n$ ，证明 $dp[m,n]$ 是关于x的多项式
2. 如何证明 $c[m,0]=0$ ？提示：递推式

---

```python {*}{maxHeight:'394px'}
from sympy import symbols, Rational, binomial, simplify

x = symbols('x')
m = 10
p, q = Rational(1, 3), Rational(2, 3)

coeffs = {1: {1: Rational(1)}}
ans_list = [None] * (m + 1)

for k in range(2, m + 1):
    coeffs[k] = {}
    for i in range(1, k):
        d_ki = Rational(0)
        for j in range(max((k + 1) // 2, i), k):
            s = k - j
            d_ki += binomial(j, s) * p**s * q**(j - s) * coeffs[j][i] * Rational(3, 2)**i
        coeffs[k][i] = simplify(d_ki / (Rational(1) - q**(k - i)))
    coeffs[k][k] = simplify(-sum(coeffs[k][i] for i in range(1, k)))

for k in range(1, m + 1):
    ans_list[k] = simplify(sum(coeffs[k][i] * x**i for i in range(1, k + 1)))
for k in range(1, m + 1):
    print(f'{k}: {ans_list[k]}')
```

```python
2: 3*x*(1 - x)/2
3: 9*x*(3*x**2 - 5*x + 2)/10
4: 27*x*(-153*x**3 + 342*x**2 - 247*x + 58)/760
5: 81*x*(7209*x**4 - 19890*x**3 + 20007*x**2 - 8710*x + 1384)/49400
```

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
