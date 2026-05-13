---
theme: ./hans-green-theme
mdc: true
transition: slide-left
lineNumbers: true
tags:
  - 不动点
  - 相似对角化
  - 特征值
  - 幂零矩阵
---

<SlidevPageRedirector />
<MovingWatermark />
<AutoSlide :timeList="[0, 25 + 5, 49, 36.5, 23, 61, 38, 18, 75, 63, 36, 19, 25, 51.5, 41]" />

<div class="bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
  <h1 class="title-stroke !text-[#059669] !mb-1 font-black tracking-tighter text-center">
    分式线性递推的常见情形
  </h1>

  <div class="flex flex-col justify-center items-center gap-3 mb-2">
    <h2 class="flex justify-center items-center font-black text-center !text-[#059669] !text-2xl md:!text-3xl">
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">不动点</span>
      </div>
      <span class="subtitle-stroke">+</span>
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">线代</span>
      </div>
      <span class="subtitle-stroke">解法你都掌握了吗？</span>
    </h2>
  </div>

  <div class="mb-2 bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif">

$a_{1}=2,\ a_{n+1}=\frac{2a_{n}+1}{a_{n}+2}$ ，求 $a_{n}$ 通项
  </div>

  <div class="bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif">

$a_{1}=5,\ a_{n+1}=\frac{3a_{n}-4}{a_{n}-1}$ ，求 $a_{n}$ 通项
  </div>

  <p class="text-[#059669] text-2xl md:text-3xl mt-6 text-center">
    快来回顾下基础~
  </p>
</div>

<style>
@font-face {
  font-family: 'jing-nan-bo-bo-hei-bold';
  src: url('/fonts/jing-nan-bo-bo-hei-bold.ttf') format('truetype');
}
.title-stroke {
  -webkit-text-stroke: 10px #10b98126;
  paint-order: stroke fill;
}

.subtitle-stroke {
  -webkit-text-stroke: 8px #10b98126;
  paint-order: stroke fill;
}

.bordered-box p {
  margin: 0;
}

@media (max-width: 768px) {
  .subtitle-stroke {
    -webkit-text-stroke: 6px #10b98126;
  }
}
</style>

---

## $a_{1}=2,\ a_{n+1}=\frac{2a_{n}+1}{a_{n}+2}$ ，求通项

这题对应的是有两个**不动点**的情况。

## $a_{1}=5,\ a_{n+1}=\frac{3a_{n}-4}{a_{n}-1}$ ，求通项

这题对应的是只有1个**不动点**的情况。

注：没有实数不动点的情况这里先不研究，~~空白太小写不下~~。这种情况下，数列可能是周期数列，也有可能不是。但在高中遇到的考题只会考周期数列的情况。

<MyKeywords :keywords="['不动点', '相似对角化', '特征值', '幂零矩阵']" color="green" keywordTagCls="!text-3xl !px-4 !py-2 !rounded-xl" />

---

## $a_{1}=2,\ a_{n+1}=\frac{2a_{n}+1}{a_{n}+2}$ ：高中解法

这题对应的是有两个**不动点**的情况。假设这个数列存在极限X，递推式两边取极限，得方程 $X(X+2)=2X+1$ ，解得 $X=1\text{ or }-1$

递推式两边同时减去两个不动点，可以得到两条式子：

$$
\begin{align}
a_{n+1}-1=\frac{2a_{n}+1}{a_{n}+2}-1=\frac{a_{n}-1}{a_{n}+2} \tag{1} \\
a_{n+1}-(-1)=\frac{2a_{n}+1}{a_{n}+2}+1=\frac{3a_{n}+3}{a_{n}+2} \tag{2}
\end{align}
$$

这里1式除以2式或反过来都行。因为个人比较喜欢把大的数放在上面，所以选择2式除以1式：

$$
\frac{a_{n+1}+1}{a_{n+1}-1}=\frac{3a_{n}+3}{a_{n}-1}=3\frac{a_{n}+1}{a_{n}-1} \tag{3}
$$

故 $\{ \frac{a_{n}+1}{a_{n}-1} \}$ 是以 $\frac{a_{1}+1}{a_{1}-1}=3$ 为首项，公比为3的等比数列。于是 $\frac{a_{n}+1}{a_{n}-1}=3^n \implies a_{n}=\frac{3^n+1}{3^n-1}$

---

## $a_{1}=5,\ a_{n+1}=\frac{3a_{n}-4}{a_{n}-1}$ ：高中解法

这题对应的是只有1个**不动点**的情况。假设这个数列存在极限X，递推式两边取极限，得方程 $X(X-1)=3X-4$ ，解得 $X=2$

同理，递推式两边同时减去不动点，但这里只能得到一条式子：

$$
a_{n+1}-2=\frac{3a_{n}-4}{a_{n}-1}-2=\frac{a_{n}-2}{a_{n}-1} \tag{1}
$$

<MyBlock type="success" title="怎么处理这条式子呢？关键发现">

看，1式左边的**分子**和右边的**分子**都是 $a_{f(n)}-2$ 的形式！
</MyBlock>

---

## $a_{1}=5,\ a_{n+1}=\frac{3a_{n}-4}{a_{n}-1}$ ：高中解法（续）

我们不妨尝试**两边同时取倒数**，把它们都移动到**分母的位置**：

$$
\frac{1}{a_{n+1}-2}=\frac{a_{n}-1}{a_{n}-2}=\frac{1}{a_{n}-2}+1 \tag{1}
$$

故 $\{ \frac{1}{a_{n}-2} \}$ 是以 $\frac{1}{a_{1}-2}=\frac{1}{3}$ 为首项，公差为1的等差数列。于是

$$
\frac{1}{a_{n}-2}=n-\frac{2}{3} \implies a_{n}=\frac{1}{n-\frac{2}{3}}+2=\frac{6n-1}{3n-2}
$$

---

## 对 $a_{n+1}=\dfrac{pa_n+q}{ra_n+s}$ 引入矩阵求幂模型

如果你学过线性代数或打过OI，就会了解到一种叫**矩阵快速幂**的模型：给 $a_{n} = a_{n-1} + a_{n-2}$ 之类，求 $a_{10^{18}}$

<MyBlock type="success" title="核心思想">

把从 $a_{n}$ 到 $a_{n+1}$ 的递推式翻译为对列向量**左乘矩阵M**（下面称为被矩阵M**作用**一次）的操作
</MyBlock>

<div class="flex gap-4">
<GreenCard
  title="引入转移矩阵M"
>

递推式里有4个参数p、q、r、s，分子、分母各两个，已经很整齐了！很难不设 $M=\begin{pmatrix}p&q\\r&s\end{pmatrix}$
</GreenCard>

<GreenCard
  title="引入列向量"
>

我们刚刚看到，对于这类数列，得到的通项公式往往是 $\frac{x_{n}}{y_{n}}$ 的形式。那我们不妨就设 $x_{n},\ y_{n}$ 分别为 $a_{n}$ 的分子和分母，即 $a_{n}=\frac{x_{n}}{y_{n}}$ 。为了计算方便，约定 $x_{1}=a_{1},\ y_{1}=1$ 。为了能够左乘矩阵，我们构造一个列向量 $v_{1}=\begin{pmatrix} x_{1} \\ y_{1} \end{pmatrix}$
</GreenCard>
</div>

---

## 对 $a_{n+1}=\dfrac{pa_n+q}{ra_n+s}$ 引入矩阵求幂模型-确定 $v_{n}$ 递推式

来看看 $v_{1}$ 被M作用一次的效果：

$$
\begin{cases}
Mv_{1}=\begin{pmatrix}p&q\\r&s\end{pmatrix}\begin{pmatrix} x_{1} \\ y_{1} \end{pmatrix}=\begin{pmatrix} px_{1}+qy_{1} \\ rx_{1}+sy_{1} \end{pmatrix}=\begin{pmatrix} x_{2} \\ y_{2} \end{pmatrix}=v_{2} \\
\frac{x_{2}}{y_{2}}\text{ 确实等于 }\frac{px_{1}+qy_{1}}{rx_{1}+sy_{1}}=\frac{p\frac{x_{1}}{y_{1}}+q}{r\frac{x_{1}}{y_{1}}+s}=\frac{pa_{1}+q}{ra_{1}+s}=a_{2}
\end{cases}
$$

再作用一次：

$$
\begin{cases}
Mv_{2}=\begin{pmatrix}p&q\\r&s\end{pmatrix}\begin{pmatrix} x_{2} \\ y_{2} \end{pmatrix}=\begin{pmatrix} px_{2}+qy_{2} \\ rx_{2}+sy_{2} \end{pmatrix}=\begin{pmatrix} x_{3} \\ y_{3} \end{pmatrix}=v_{3} \\
\frac{x_{3}}{y_{3}}\text{ 确实等于 }\frac{px_{2}+qy_{2}}{rx_{2}+sy_{2}}=\frac{p\frac{x_{2}}{y_{2}}+q}{r\frac{x_{2}}{y_{2}}+s}=\frac{pa_{2}+q}{ra_{2}+s}=a_{3}
\end{cases}
$$

你发现了什么规律呢？

---

## 对 $a_{n+1}=\dfrac{pa_n+q}{ra_n+s}$ 引入矩阵求幂模型-发现规律

<div class="pt-4 flex gap-4">
<GreenCard
  title="规律1"
>

$x_{n},\ y_{n}$ 有递推式

$$
\begin{cases}
x_{n+1}=px_{n}+qy_{n} \\
y_{n+1}=rx_{n}+sy_{n}
\end{cases}
$$
</GreenCard>

<GreenCard
  title="规律2"
>

成功实现用左乘矩阵M来表示递推关系 $v_{n+1} = Mv_{n}$ 。于是：

$$
v_{n}=\begin{pmatrix} x_{n} \\ y_{n} \end{pmatrix}=M^{n-1}v_{1}
$$
</GreenCard>
</div>

<MyBlock type="success" title="引出关键想法">

只要想办法求出 $M^n$ ，就能得到通项公式！
</MyBlock>

---

## $a_{n+1}=\frac{2a_{n}+1}{a_{n}+2}$ ，求关于 $a_{1}$ 的通项公式：大学解法

根据前面的介绍，我们引入列向量 $v_{1}=\begin{pmatrix} x_{1} \\ y_{1} \end{pmatrix}=\begin{pmatrix} a_{1} \\ 1 \end{pmatrix}$ 和矩阵 $M=\begin{pmatrix}2&1\\1&2\end{pmatrix}$

M有两个不同的**特征值**，这意味着M可以**相似对角化**，我们可以用相似对角化来求 $M^n$ 。

<MyBlock type="success" title="相信我，相似对角化对普通高中生来说真的不难理解！相似对角化是什么？">

对m阶方阵M，希望找到**相似变换矩阵**P，使得 $P^{-1}MP=diag(u_{1},u_{2},\dots,u_{m})=D$ 为对角阵
</MyBlock>

把P表示为m个列向量 $P=(p_{1},p_{2},\dots,p_{m})$ ，则由 $MP=PD$ 得：

$$
\begin{align}
M \cdot (p_{1},\dots,p_{m})&=(Mp_{1},\dots,Mp_{m}) \\
&=(p_{1},\dots,p_{m}) \cdot diag(u_{1},\dots,u_{m}) \\
&=(u_{1}p_{1},\dots,u_{m}p_{m})
\end{align}
$$

---

## $a_{n+1}=\frac{2a_{n}+1}{a_{n}+2}$ ，求关于 $a_{1}$ 的通项公式：大学解法（续）

于是 $Mp_{i}=u_{i}p_{i},\ 1 \leq i \leq m$ 。根据**特征值和特征向量的定义**，$u_{i}$ 就是M的特征值， $p_{i}$ 则是特征值 $u_{i}$ 对应的特征向量。这里不了解特征值和特征向量没关系，只需要知道：相似变换矩阵P的列向量就是M的特征向量（后文“特征向量矩阵”和相似变换矩阵是同义词）

对M进行这样的分解为什么能方便地求出 $M^n$ 呢？因为 $M^n=PD(P^{-1}P)D(P^{-1}P)DP^{-1}\dots PDP^{-1}=PD^nP^{-1}$ 。而我们知道对角矩阵D求幂特别简单： $D^n=diag(u_{1}^n,\dots,u_{m}^n)$

这里略去一些线性代数细节知识，直接写Python代码完成相似对角化：

```python
import numpy as np
M1 = np.array([[2, 1],
               [1, 2]])
eigenvalues1, P = np.linalg.eig(M1)
D1 = np.diag(eigenvalues1)
P_inv = np.linalg.inv(P)
print(f"矩阵 M1 = {M1}")
print("特征值:", eigenvalues1)
print("特征向量矩阵 P:\n", P)
```

---

## $a_{n+1}=\frac{2a_{n}+1}{a_{n}+2}$ ，求关于 $a_{1}$ 的通项公式：大学解法（续2）

代码给出 $\lambda_1=3,\ \lambda_2=1$ ，特征向量矩阵 $P=\begin{pmatrix} \frac{\sqrt{ 2 }}{2} & -\frac{\sqrt{ 2 }}{2} \\ \frac{\sqrt{ 2 }}{2} & \frac{\sqrt{ 2 }}{2} \end{pmatrix}$ 。`eig`方法给出的P是经过了归一化（把特征向量的长度变为1）的，所以我们采用另一个对人类更友好的特征向量矩阵 $P_{0}=\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$ ，其逆矩阵 $P_{0}^{-1}=\begin{pmatrix} \frac{1}{2} & \frac{1}{2} \\ -\frac{1}{2} & \frac{1}{2} \end{pmatrix}$

按前面介绍的公式 $M^n=PD^nP^{-1}$ 继续写代码：

```python
from sympy import symbols
another_P = np.array([[1, -1],
                      [1, 1]])
another_P_inv = np.linalg.inv(another_P)
n = symbols('n', integer=True, nonnegative=True)
D1n = np.array([
    [D1[0, 0]**n, 0],
    [0, D1[1, 1]**n],
])
M1n = another_P @ D1n @ another_P_inv
print(f"M1n = {M1n}")
```

---

## $a_{n+1}=\frac{2a_{n}+1}{a_{n}+2}$ ，求关于 $a_{1}$ 的通项公式：大学解法（续3）

求得

$$
M^n=\frac{1}{2}\begin{pmatrix} 3^n+1 & 3^n-1 \\ 3^n-1 & 3^n+1 \end{pmatrix} \tag{1}
$$

于是

$$
\mathbf{v}_n = M^{n-1}\mathbf{v}_1 = \frac{1}{2}\begin{pmatrix} 3^{n-1}+1 & 3^{n-1}-1 \\ 3^{n-1}-1 & 3^{n-1}+1 \end{pmatrix}\begin{pmatrix} a_{1} \\ 1 \end{pmatrix}
$$

故 $x_{n} = \frac{1}{2}\left[ 3^{n-1}(a_{1}+1) + (a_{1}-1) \right],\ y_{n} = \frac{1}{2}\left[ 3^{n-1}(a_{1}+1) - (a_{1}-1) \right]$ ， $a_n = \frac{3^{n-1}(a_{1}+1) + (a_{1}-1)}{3^{n-1}(a_{1}+1) - (a_{1}-1)}$ 。代入 $a_{1}=2$ 得 $a_{n}$ 确实是 $\frac{3^n+1}{3^n-1}$

---

## $a_{n+1}=\frac{3a_{n}-4}{a_{n}-1}$ ，求关于 $a_{1}$ 的通项公式：大学解法

根据前面的介绍，我们引入列向量 $v_{1}=\begin{pmatrix} x_{1} \\ y_{1} \end{pmatrix}=\begin{pmatrix} a_{1} \\ 1 \end{pmatrix}$ 和矩阵 $M=\begin{pmatrix}3& -4 \\ 1 & -1\end{pmatrix}$

这里依旧直接写Python代码求特征值和特征向量矩阵：

```python
import numpy as np
M2 = np.array([[3, -4],
               [1, -1]])
eigenvalues2, P = np.linalg.eig(M2)
print("特征值:", eigenvalues2)
print("特征值是否重合:", np.isclose(eigenvalues2[0], eigenvalues2[1]))
print(f"特征向量矩阵 P = {P}")
```

求出特征值 $\lambda_{1}=\lambda_{2}=1$ ，特征向量矩阵 $P=\begin{pmatrix} 2 & 2 \\ 1 & 1 \end{pmatrix}$ 。只有1个线性无关的特征向量 $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$ ，即P的秩为1，即P不可逆，矩阵M无法相似对角化。那该如何求 $M^n$ 呢？

---

## $a_{n+1}=\frac{3a_{n}-4}{a_{n}-1}$ ，求关于 $a_{1}$ 的通项公式：大学解法（续）

我们可以退而求其次，把M拆成**容易求幂的矩阵** $X(=\lambda E)$ +**幂零矩阵** $N$ ，然后用**二项式定理**展开

$$
\begin{align}
M^n &= (\lambda E + N)^n \\
&= \sum_{k=0}^n \binom{n}{k} (\lambda E)^{n-k} N^k \\
&= \lambda^n E + n\lambda^{n-1} N + \binom{n}{2}\lambda^{n-2}N^2 + \cdots
\end{align}
$$

幂零矩阵满足 $N^c=0$ ，于是二项式展开的大多数项都为0，从而简化 $M^n$ 的计算。

由**Cayley-Hamilton定理**（这里先不展开，且听下回分解~）：若二阶矩阵M有二重特征值 $\lambda$ ，则 $(M-\lambda E)^2=0$ 。令 $N=M-\lambda E$ ，则N为幂零矩阵： $N^2=0$ 。于是 $M^n$ 简化为

$$
\lambda^n E + n\lambda^{n-1} N \tag{4}
$$

---

## $a_{n+1}=\frac{3a_{n}-4}{a_{n}-1}$ ，求关于 $a_{1}$ 的通项公式：大学解法（续2）

回到这题， $\lambda=1$ ，于是 $N=M-E=\begin{pmatrix}2&-4\\1&-2\end{pmatrix}$ ， $M^n=E+nN=\begin{pmatrix} 2n+1 & -4n \\ n & 1-2n \end{pmatrix}$

于是

$$
\mathbf{v}_n = M^{n-1}\mathbf{v}_1 = \begin{pmatrix} 2n-1 & -4n+4 \\ n-1 & 3-2n \end{pmatrix}\begin{pmatrix} a_{1} \\ 1 \end{pmatrix}=\begin{pmatrix} (2n-1)a_{1} - 4n+4 \\ (n-1) a_{1} + 3 - 2n \end{pmatrix}
$$

故 $a_n = \frac{(2n-1)a_{1} - 4n+4}{(n-1) a_{1} + 3 - 2n}$ 。代入 $a_{1}=5$ 得 $a_{n}$ 确实是 $\frac{6n-1}{3n-2}$

## 且听下回分解

<MyBlock type="success" title="高中的方法和大学的方法有联系吗？">

有很深刻的联系。但我近期太忙了，而且~~这里空白太小写不下~~。那就且听下回分解咯~
</MyBlock>

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
