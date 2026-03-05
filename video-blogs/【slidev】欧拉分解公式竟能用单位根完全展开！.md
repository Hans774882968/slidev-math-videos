---
theme: dracula
mdc: true
transition: slide-left
tags:
  - 单位根
  - 特征值
  - 循环矩阵
  - 欧拉分解公式
---

<SlidevPageRedirector />
<MovingWatermark />
<AutoSlide :timeList="[0, 25 + 5, 20.5, 31.5, 26, 28.5, 12.5, 26, 12, 9, 19, 13]" />

---

**欧拉分解公式**，打过初中数学竞赛的都懂：

$$
\begin{aligned}
a^3+b^3+c^3-3abc &= (a+b+c)(a^2+b^2+c^2-ab-bc-ca)\\
&= \frac{1}{2}(a+b+c)((a-b)^2+(b-c)^2+(c-a)^2)
\end{aligned}
$$

但这个呢（ $w=\cos \frac{2\pi}{3}+i\sin \frac{2\pi}{3}=-\frac{1}{2}+\frac{\sqrt{ 3 }}{2}i$ 为3次单位根）？

$$
a^3+b^3+c^3-3abc=(a+b+c)(a+wb+w^2c)(a+wc+w^2b)=\det \begin{pmatrix}
a \quad b \quad c \\
c \quad a \quad b \\
b \quad c \quad a
\end{pmatrix}
$$

<div class="h-26 flex justify-center items-center text-5xl text-orange">
用<span class="text-7xl">线性代数</span>知识完全展开这条公式
</div>

<div class="flex justify-center items-center text-4xl text-orange">
高中生也能听懂！
</div>

---

## 验证 $a^3+b^3+c^3-3abc=(a+b+c)(a+wb+w^2c)(a+wc+w^2b)$

根据 $w^3=1$ 展开右边不难得到左边。但我们感兴趣的是怎么从左边得到右边。

想法：引入**n阶循环矩阵**：

$$
C=\begin{bmatrix}
c_0 & c_1 & c_2 & \cdots & c_{n-1} \\
c_{n-1} & c_0 & c_1 & \cdots & c_{n-2} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
c_1 & c_2 & c_3 & \cdots & c_0
\end{bmatrix}
$$

我们发现3阶循环矩阵 $\begin{bmatrix} a & b & c \\ c & a & b \\ b & c & a \end{bmatrix}$ 的行列式为 $a^3+b^3+c^3-3abc$ （按第一行展开易证）

再用**高等代数**知识证明它的行列式也能展开成 $(a+b+c)(a+wb+w^2c)(a+wc+w^2b)$ 即可。

---

证明： $(a+b+c)(a+wb+w^2c)(a+wc+w^2b)=\det \begin{pmatrix} a \quad b \quad c \\ c \quad a \quad b \\ b \quad c \quad a \end{pmatrix}$

引入**基础循环矩阵**：

$$
P=\begin{bmatrix}
0 & 1 & 0 & \cdots & 0 \\
0 & 0 & 1 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & 1 \\
1 & 0 & 0 & \cdots & 0
\end{bmatrix}=\begin{bmatrix}
0 & E_{n-1} \\
E_{1} & 0
\end{bmatrix}
$$

举例： $n=3$ 对应 $P = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}$

P的性质：$P^k=\begin{bmatrix} 0 & E_{n-k} \\ E_{k} & 0 \end{bmatrix}$ ，手算不难验证。特别地， $P^n=E_{n}$ 表示移位n的倍数次回到单位阵

---

## 左乘P对方阵A的作用

先看左乘P对列向量（`n*1`的矩阵）的作用：

$$
P\begin{bmatrix}
v_{1} \\
v_{2} \\
\vdots \\
v_{n}
\end{bmatrix}=\begin{bmatrix}
v_{2} \\
v_{3} \\
\vdots \\
v_{n} \\
v_{1}
\end{bmatrix}
$$

因为**方阵A可以看成n个列向量**，所以总作用就是A的第2到n行向上移动，第1行变成最后一行

动手试试：右乘P对方阵A的作用

---

## 求基础循环矩阵的特征值和特征向量

因为 $P^n=E_{n}$ ，所以P的特征值 $\lambda$ 必满足 $\lambda^n=1$ 。故 $P$ 的 $n$ 个特征值正是 $n$ 次单位根：$\lambda_k = \omega^k, \quad k = 0, 1, \dots, n-1$ ，其中 $\omega = e^{i \frac{2\pi}{n}}$

### 求 $\lambda_k = \omega^k$ 对应的特征向量

回到特征值和特征向量的定义 $Pv=\lambda v$ ， $Pv_{k}=w^k v_{k}$ ，设 $v_{k}=(x_1, x_2, \dots, x_n)^T$ ，由左乘P对列向量的作用知： $Pv_{k}=(x_2, x_3, \dots, x_1)^T$ ，于是得到约束条件

$$
\begin{cases}
x_{2}=w^kx_{1} \\
x_{3}=w^kx_{2} \\
\dots \\
x_{1}=w^kx_{n}
\end{cases}
$$

不妨令 $x_{1}=1$ ，得到特征向量 $(1,w^k,w^{2k},\dots, w^{(n-1)k})^T$

---

## 题外话：P的特征向量刚好就是DFT的列向量

如果你学过《数值分析》中的**离散傅里叶变换**（DFT），那么你会发现：P的特征向量不就是DFT矩阵的第k列（ $k = 0, 1, \dots, n-1$ ）吗？

$$
\begin{bmatrix}
w^0 & w^0 & \cdots & w^0 \\
w^0 & w^1 & \cdots & w^{n-1} \\
\vdots & \vdots & \ddots & \vdots \\
w^0 & w^{n-2} & \cdots & w^{(n-2)(n-1)} \\
w^0 & w^{n-1} & \cdots & w^{(n-1)(n-1)}
\end{bmatrix}
$$

---

## 任意循环矩阵可以由基础循环矩阵P的多项式表出

回头看**n阶循环矩阵**：

$$
C=\begin{bmatrix}
c_0 & c_1 & c_2 & \cdots & c_{n-1} \\
c_{n-1} & c_0 & c_1 & \cdots & c_{n-2} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
c_1 & c_2 & c_3 & \cdots & c_0
\end{bmatrix}
$$

以及 $P^k=\begin{bmatrix} 0 & E_{n-k} \\ E_{k} & 0 \end{bmatrix}$ 。我们发现：

1. $c_{0}E_{n}$ 构成C的对角线
2. $c_{1}P^1$ 构成C中的所有 $c_{1}$
3. $c_{2}P^2$ 构成C中的所有 $c_{2}$
4. …

所以 $C = c_0 E + c_1 P + c_2 P^2 + \dots + c_{n-1} P^{n-1}$ ，引入多项式 $f(x) = c_0 + c_1 x + c_2 x^2 + \dots + c_{n-1} x^{n-1}$ ，则 $C=f(P)$ 。我们希望用 $C=f(P)$ 拿到C的特征值，这就需要引出下面的定理。

---

## 引入**谱映射定理**的多项式情形

命题1：设 $A$ 是数域 $\mathbb{F}$ 上的 $n \times n$ 矩阵，$\lambda$ 是 $A$ 的一个特征值，$\mathbf{v}$ 是对应的非零特征向量（即 $A\mathbf{v} = \lambda\mathbf{v}$）。对任意多项式 $f(x) = a_m x^m + a_{m-1} x^{m-1} + \dots + a_1 x + a_0$，定义矩阵多项式 $f(A) = a_m A^m + \dots + a_1 A + a_0 E$ ，求证： $f(A)\mathbf{v} = f(\lambda)\mathbf{v}$ 。

引理1： $A^k \mathbf{v} = \lambda^k \mathbf{v}$ 。**数学归纳法**不难证：

$$
\begin{aligned}
A^{n+1} \mathbf{v} &= A (A^n \mathbf{v}) \\
&= A (\lambda^n \mathbf{v}) \quad \text{(由归纳假设)} \\
&= \lambda^n (A \mathbf{v}) \quad \text{(数乘提取)} \\
&= \lambda^n (\lambda \mathbf{v}) \quad \text{(由已知条件)} \\
&= \lambda^{n+1} \mathbf{v}
\end{aligned}
$$

---

## 谱映射定理的多项式情形（续）

用引理1证命题1：

$$
\begin{aligned}
f(A)\mathbf{v} &= \left( \sum_{k=0}^m a_k A^k \right) \mathbf{v} \\
&= \sum_{k=0}^m a_k (A^k \mathbf{v}) \quad \text{(矩阵乘法分配律)} \\
&= \sum_{k=0}^m a_k (\lambda^k \mathbf{v}) \quad \text{(由引理1)} \\
&= \left( \sum_{k=0}^m a_k \lambda^k \right) \mathbf{v} \quad \text{(向量数乘提取公因子)} \\
&= f(\lambda) \mathbf{v}
\end{aligned}
$$

---

## 收尾

由命题1，C的n个特征值为 $c_{0}+c_{1}w^{1k}+c_{2}w^{2k}+\dots+c_{n-1}w^{(n-1)k},\ k=0,\dots,n-1$

对于n=3的情形， $\begin{bmatrix} a & b & c \\ c & a & b \\ b & c & a \end{bmatrix}$ 的特征值为 $a+bw^0+cw^0,\ a+bw^1+cw^2,\ a+bw^2+cw^4=a+bw^2+cw$

由**特征值之积=行列式**，完成证明 $(a+b+c)(a+wb+w^2c)(a+wc+w^2b)=a^3+b^3+c^3-3abc$

动手试试： $n=2$ 可以导出什么恒等式呢？ $n=4$ 呢？

---

## 附录1：提示词

>大佬，你是一名数学科研工作者，精通代数方向。我们知道欧拉分解公式 $a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$ ，请问怎么把它完全展开为 $(a+b+c)(a+wb+w^2c)(a+wc+w^2b)$ （w是3次单位根）

>大佬，请问循环矩阵的特征值的公式是怎么由基础循环矩阵的特征值推出来的

>如果矩阵A有特征值 $\lambda$ 和特征向量v，即 $Av=\lambda v$ ，那么对于任意多项式f，矩阵 $f(A)$ 有相同的特征向量v，而特征值变为 $f(\lambda)$ 。请问这个叫什么定理？如何证明

>大佬，请问一个方阵左乘基础循环矩阵的作用是什么

>基础循环矩阵P对应于 $w^k$ 的特征向量 $v_k$ 的推导，请展开说说，怎么想到特征向量的每个分量都是单位根的幂的

反馈：LLM并没有成功回答第5条提示词的问题

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
