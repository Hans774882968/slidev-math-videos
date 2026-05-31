---
theme: ./hans-green-theme
mdc: true
transition: slide-left
lineNumbers: true
tags:
  - 生成函数
  - 幂级数
  - 指数生成函数
---

<SlidevPageRedirector />
<MovingWatermark />
<AutoSlide :timeList="[0, 28 + 7, 38, 24.5, 52.5, 35.5, 32, 58, 32.5, 22, 76.5, 40, 33, 61.5]" />

<div class="bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
  <h1 class="title-stroke !text-[#059669] !mb-1 font-black tracking-tighter text-center">
    26成都一诊压轴
  </h1>

  <div class="flex flex-col justify-center items-center gap-3 mb-2">
    <h2 class="flex justify-center items-center font-black text-center !text-[#059669] !text-2xl md:!text-3xl">
      <span class="subtitle-stroke">竟能用</span>
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">OGF</span>
      </div>
      <span class="subtitle-stroke">和</span>
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">EGF</span>
      </div>
      <span class="subtitle-stroke">巧解~</span>
    </h2>
  </div>

  <div class="mb-2 bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif">

证明： $\sum_{k=1}^{n} C_{n}^k \frac{(-1)^{k+1}}{k}=\sum_{k=1}^{n} \frac{1}{k}$
  </div>

  <p class="text-[#059669] text-2xl md:text-3xl !my-2 text-center">
    感受高阶数学工具的威力~
  </p>

  <p class="text-[#059669] !text-[22px] md:text-3xl !mt-0 text-center">
    OGF, EGF = 生成函数, 指数生成函数
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

## 题干

<div class="text-3xl">

证明： $\sum_{k=1}^{n} C_{n}^k \frac{(-1)^{k+1}}{k}=\sum_{k=1}^{n} \frac{1}{k}$
</div>

<div class="h-28 flex justify-center items-center gap-1 text-6xl text-orange">

OGF和EGF解法~

<MyKeywords :keywords="['生成函数', '指数生成函数', '幂级数']" color="green" keywordTagCls="!text-xl !px-3 !py-1 !rounded-xl" />
</div>

<div class="flex justify-center">
<img src="./assets/260530/26成都一诊压轴讲解视频1.png" class="w-66" />
</div>

---

## 法1：生成函数

数列 $a$ 的**普通生成函数**（Ordinary Generating Function，OGF）定义为形式幂级数：

$$
F(x)=\sum_{n=0}^{\infty} a_n x^n
$$

$a$ 既可以是有穷数列，也可以是无穷数列。比如：

1. 数列 $a=\{ 11,45,14 \}$ 的生成函数是 $11+45x+14x^2$
2. 数列 $a=\{ 1,3,5,7,9,\cdots \}$ 的生成函数是 $\sum_{n = 0}^{\infty} (2n+1)x^n$

<MyBlock type="success" title="一个朴素的想法">

给你俩数列 $\{ a_{n} \},\ \{ b_{n} \}$ ，只需证明 $\sum_{n=0}^{\infty} a_n x^n = \sum_{n=0}^{\infty} b_n x^n$ ，就能证明它们相等
</MyBlock>

由此得到目标：证明 $\sum_{n=1}^\infty \left( \sum_{k=1}^n \binom{n}{k} \frac{(-1)^{k+1}}{k} \right) x^n = \sum_{n=1}^\infty \left( \sum_{k=1}^n \frac{1}{k} \right) x^n$

---

## 生成函数-常用的数学工具

OGF乘法运算的性质。直接套多项式乘法的定义：

$$
\left( \sum_{n=0}^\infty a_{n} x^n \right) \left( \sum_{n=0}^\infty b_{n} x^n \right) = \sum_{n=0}^{\infty} \left( \sum_{i=0}^{n} a_{i}b_{n-i} \right) x^n
$$

常用**泰勒展开式**：

1. $\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3)$ ，对应的数列是 $\left\{  1, -\frac{1}{2}, \frac{1}{3}, -\frac{1}{4}, \dots  \right\}$ 。用-x替换x，得 $-\ln(1-x)$ 对应数列 $\left\{  1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \dots  \right\}$
2. $\frac{1}{1-x}=1+x+x^2+x^3+o(x^3)$ ，对应的数列是 $\left\{  1, 1, 1, \dots  \right\}$
3. $\frac{1}{1-x^c}=\sum_{n=0}^\infty x^{cn}$ ，幂是c的倍数时系数为1，否则为0
4. $\frac{1}{(1-x)^c}=\sum_{n=0}^\infty \binom{n+c-1}{n} x^{n}$ ，对应的数列是 $\left\{  \binom{c-1}{0}=1,\ \binom{c}{1}=c,\ \binom{c+1}{2}=\frac{(c+1)c}{2!},\ \dots  \right\}$
5. $e^x=\sum_{n=0}^{\infty} \frac{x^n}{n!}$ ，对应的数列是 $\left\{  1,\ \frac{1}{2!},\ \frac{1}{3!},\ \dots \right\}$

注：本期视频称这5条泰勒展开式为展开式1到5。展开式3、4都是“2”的推广，c为正整数

---

## 法1：生成函数-开始证明

目标：证明 $\sum_{n=1}^\infty \left( \sum_{k=1}^n \binom{n}{k} \frac{(-1)^{k+1}}{k} \right) x^n = \sum_{n=1}^\infty \left( \sum_{k=1}^n \frac{1}{k} \right) x^n$

<MyBlock type="success" title="你会从等式左边还是右边入手？">

从左边入手需要**化简**，从右边入手需要**无中生有**。化简更容易，所以从左边入手
</MyBlock>

首先，我们考虑**交换求和顺序**，让k在外层求和。为此，我们考虑有哪些n对指定的k有贡献：所有大于等于k的n，对 $\frac{(-1)^{k+1}}{k}$ 的贡献分别为 $\binom{n}{k} x^n$ 。故

$$
lhs=\sum_{k=1}^\infty \frac{(-1)^{k+1}}{k} \sum_{n=k}^\infty \binom{n}{k} x^n=\sum_{k=1}^\infty \frac{(-1)^{k+1}}{k} \sum_{n=k}^\infty \binom{n}{n-k} x^n \tag{1}
$$

注意到 $A=\sum_{n=k}^\infty \binom{n}{n-k} x^n$ 的形式与 $\frac{1}{(1-x)^c}=\sum_{n=0}^\infty \binom{n+c-1}{n} x^{n}$ 的形式很接近！为了套展开式4，我们提出 $x^k$ ： $A=x^k(\sum_{n=0}^\infty \binom{n+k}{n} x^{n})$ 。套展开式4（ $k=c-1 \implies c=k+1$ ）得 $A=\frac{x^k}{(1-x)^{k+1}}$ ，于是

---

## 法1：生成函数-证明（续）

$$
lhs=\sum_{k=1}^\infty \frac{(-1)^{k+1}}{k} \cdot \frac{x^k}{(1-x)^{k+1}}=\frac{1}{1-x} \sum_{k=1}^\infty \frac{(-1)^{k+1}}{k} \left( \frac{x}{1-x} \right)^k \tag{2}
$$

展开式1告诉我们， $\ln(1+x)$ 对应的数列恰好就是这里想要的 $\frac{(-1)^{k+1}}{k}$ ，所以

$$
\sum_{k=1}^\infty \frac{(-1)^{k+1}}{k} \left( \frac{x}{1-x} \right)^k = \ln\left(1 + \frac{x}{1-x}\right) = \ln\left(\frac{1}{1-x}\right) = -\ln(1-x) \tag{3}
$$

故 $lhs=-\frac{\ln(1-x)}{1-x}$ 。这时，我们有了一个新想法：

<MyBlock type="success" title="新想法">

把右边也化简为 $-\frac{\ln(1-x)}{1-x}$
</MyBlock>

---

## 法1：生成函数-证明（续2）

模仿化简等式左边的过程，我们考虑**交换求和顺序**，让k在外层求和。所有大于等于k的n，对 $\frac{1}{k}$ 的贡献分别是 $x^n$ 。故

$$
rhs=\sum_{k=1}^\infty \frac{1}{k} \sum_{n=k}^\infty x^n \tag{1}
$$

同理，我们提出 $x^k$ 就可以套展开式4了（也可以说是展开式2，过程作为练习）：

$$
rhs=\sum_{k=1}^\infty \frac{1}{k} \cdot \frac{x^k}{1-x}=\frac{1}{1-x} \sum_{k=1}^\infty \frac{x^k}{k} \tag{2}
$$

由展开式1得， $\left\{  \frac{1}{k}  \right\}$ 的OGF就是 $-\ln(1-x)$ 。于是等式右边得到了和左边相同的结果 $-\frac{\ln(1-x)}{1-x}$ ，证毕~

---

## 法2：指数生成函数

模仿OGF的定义，我们给出数列 $a$ 的**指数生成函数**（Exponential Generating Function，EGF）：

$$
\textcolor{#fb923c}{
\boldsymbol{
\hat{F}(x)=\sum_{n=0}^{\infty} a_n \frac{x^n}{n!}
}
}
$$

一些例子：

1. 由 $e^x$ 的泰勒展开式（展开式5），全1数列 $\left\{  1, 1, 1, \dots  \right\}$ 的EGF就是 $e^x=\sum_{n=0}^{\infty} \frac{x^n}{n!}$
2. 把“1”的x换成 $qx$ ，我们得到等比数列 $\{ 1,q,q^2,\dots \}$ 的EGF为 $e^{qx}=\sum_{n=0}^{\infty} \frac{q^nx^n}{n!}$
3. 令“2”的 $q=-1$ ，可得 $e^{-x}=\sum_{n=0}^{\infty} \frac{(-1)^nx^n}{n!}$

注：本期视频称这些式子为EGF例1到3

由EGF定义，得到目标：证明 $\sum_{n=1}^\infty \left( \sum_{k=1}^n \binom{n}{k} \frac{(-1)^{k+1}}{k} \right) \frac{x^n}{n!} = \sum_{n=1}^\infty \left( \sum_{k=1}^n \frac{1}{k} \right) \frac{x^n}{n!}$

---

## EGF-常用的数学工具

对EGF求导、积分分别有：

$$
\begin{cases}
\hat{F'}(x)=a_{1}\frac{x^0}{0!}+a_{2}\frac{x^1}{1!}+\dots=\sum_{n=0}^{\infty} a_{n+1} \frac{x^{n}}{n!} \\
\int \hat{F}(x)\, dx=C+\sum_{n=0}^{\infty} a_{n} \frac{x^{n+1}}{(n+1)!}=C+\sum_{n=1}^{\infty} a_{n-1} \frac{x^n}{n!}
\end{cases}
$$

<MyBlock type="success" title="我们发现">

求导和积分后，恰好分别得到数列a向左、向右移动一位（ $\{ a_{n+1} \},\ \{ a_{n-1} \}$ ）的EGF
</MyBlock>

和引入OGF时一样，我们考虑指数生成函数的**乘法运算**。设俩数列 $a,b$ 的EGF分别为 $\hat{F}(x),\hat{G}(x)$，那么

$$
\begin{aligned}
\hat{F}(x)\hat{G}(x)
&=\sum_{i=0}^{\infty} a_i\frac{x^i}{i!}\sum_{j=0}^{\infty} b_j\frac{x^j}{j!}\\
&=\sum_{n=0}^{\infty} x^{n}\sum_{i=0}^n a_ib_{n-i}\frac{1}{i!(n-i)!}=\sum_{n=0}^{\infty} \frac{x^{n}}{n!}\sum_{i=0}^n \binom{n}{i}a_ib_{n-i}
\end{aligned}
$$

---

## EGF-常用的数学工具（续）

$$
\hat{F}(x)\hat{G}(x)=\sum_{n=0}^{\infty} \frac{x^{n}}{n!}\sum_{i=0}^n \binom{n}{i}a_ib_{n-i}
$$

因此 $\hat{F}(x)\hat{G}(x)$ 是数列 $\{ \sum_{i=0}^n \binom{n}{i}a_ib_{n-i} \}$ 的指数生成函数。和OGF的乘法运算相比，多了一个系数 $C_{n}^{i}$

<MyTheorem type="corollary">

1. 令 $\hat{G}(x)=e^x$ ，则b为全1数列，于是数列 $\left\{  \sum_{i=0}^{n} \binom{n}{i}a_i \right\}$ 的EGF为 $e^x\hat{F}(x)$ 。这个等会会用到~
</MyTheorem>

---

## 法2：EGF-开始证明

目标：证明 $\sum_{n=1}^\infty \left( \sum_{k=1}^n \binom{n}{k} \frac{(-1)^{k+1}}{k} \right) \frac{x^n}{n!} = \sum_{n=1}^\infty \left( \sum_{k=1}^n \frac{1}{k} \right) \frac{x^n}{n!}$

和OGF一样，先化简等式左边：注意到等式左边 $\sum_{k=1}^{n} C_{n}^k \frac{(-1)^{k+1}}{k}$ 和上一页推论1的形式很像，不妨设辅助数列 $a_{n}=\frac{(-1)^{n+1}}{n}$ （补充定义 $a_{0}=0$ ），并设 $\{ a_{n} \}$ 的EGF为 $A(x)$ ，于是可以套用推论1：等式左边的EGF为 $e^xA(x)$ （注：和OGF一样，先交换求和次序，也能得到这条结论，留作练习~）

于是得到前进方向：化简 $A(x)=\sum_{n=1}^\infty \frac{(-1)^{n+1}}{n} \frac{x^n}{n!}$ 。在哪会出现 $(-1)^{n+1}$ 呢？EGF例3！我们要想办法把 $e^{-x}=\sum_{n=0}^{\infty} \frac{(-1)^nx^n}{n!}$ 变成 $A(x)$ ！

首先把EGF例3中 $n=0$ 的项去掉： $1-e^{-x}=\sum_{n=1}^{\infty} \frac{(-1)^{n+1}x^n}{n!}$ 。这样就只差系数 $\frac{1}{n}$ 了。怎么构造呢？考虑到幂级数的积分 $\int x^{n-1} dx=C+\frac{x^n}{n}$ ，我们提出1个x再积分（数列左移、右移相抵消）就OK：

$$
\frac{1-e^{-x}}{x}=\sum_{n=1}^{\infty} \frac{(-1)^{n+1}x^{n-1}}{n!} \implies \int_0^x \frac{1-e^{-t}}{t} \, dt=A(x)
$$

---

## 法2：EGF-证明（续）

<MyBlock type="success" title="新想法">

把右边也化简为 $e^x\int_0^x \frac{1-e^{-t}}{t} \, dt$ 就做完了。为此，我们需要想办法让右边也出现积分号。
</MyBlock>

不妨用定积分表示 $H=\sum_{n=1}^{\infty} \frac{1}{n}$ 。依旧考虑幂级数的积分 $\int_{0}^1 x^{n-1} dx=\left[ \frac{x^n}{n} \right]_{0}^1=\frac{1}{n}$ ，于是

$$
H=\sum_{n=1}^{\infty} \frac{1}{n} = \sum_{n=1}^{\infty} \int_{0}^1 x^{n-1} dx=\int_{0}^1 \sum_{n=1}^{\infty} x^{n-1} dx=\int_{0}^1 \frac{1-x^n}{1-x} dx \tag{1}
$$

代入EGF的定义式，并**交换求和号与积分号的顺序**，于是可以套用EGF例1和例2：

$$
\begin{aligned}
rhs &= \sum_{n=1}^\infty \frac{x^n}{n!} \int_0^1 \frac{1-t^n}{1-t} dt 
= \int_0^1 \frac{1}{1-t} \left( \sum_{n=1}^\infty \frac{x^n}{n!} - \sum_{n=1}^\infty \frac{(tx)^n}{n!} \right) dt \\
&= \int_0^1 \frac{(e^x-1) - (e^{tx}-1)}{1-t} dt 
= e^x\int_0^1 \frac{1 - e^{(t-1)x}}{1-t} dt
\end{aligned}
$$

---

## 法2：EGF-证明（续2）

<MyTheorem type="note" title="离目标很近了！观察目标式和rhs的差异">

$$
e^x\int_0^x \frac{1-e^{-t}}{t} \, dt \text{ VS } e^x\int_0^1 \frac{1 - e^{(t-1)x}}{1-t} dt
$$
</MyTheorem>

猜测 $e^{-t}$ 和 $e^{(t-1)x}$ 对应，不妨尝试换元 $u=(1-t)x$ ，于是积分下、上限分别变为x、0，得到：

$$
rhs=e^x \int_{x}^0 \frac{1-e^{-u}}{\frac{u}{x}} d\left( 1-\frac{u}{x} \right)=-e^x \int_{0}^x x \frac{1-e^{-u}}{u} \left( -\frac{1}{x} \right)du=e^x \int_{0}^x \frac{1-e^{-u}}{u} du
$$

证毕~

---

## 总结

两种方法的共性：

1. 都是先考虑化简更复杂的等式左边，在取得阶段性成果后，才真正确认等式右边的化简目标
2. 对**交换求和顺序**的功力都有一定要求（积分看作求和的连续版本）。第一步就尝试交换求和顺序总是没错的
3. 和去年讲解的“期望的尾概率公式+容斥原理”方法相比，化简目标都更为明确，不容易陷入迷茫、罚坐的境地

差异：

<div class="flex gap-4">
<GreenCard
  title="1"
>

处理 $C_{n}^{k}$ 的方式：OGF要求熟悉展开式4（ $\frac{1}{(1-x)^c}=\sum_{n=0}^\infty \binom{n+c-1}{n} x^{n}$ ），EGF要求熟悉**EGF的乘法运算的性质**
</GreenCard>

<GreenCard
  title="2-等式右边的推导"
>

化简等式右边的OGF比较简单，模仿等式左边的化简过程就行；化简等式右边的EGF对注意力涣散的Hans来说比较困难，很难注意到 $\sum_{n=1}^{\infty} \frac{1}{n}$ 竟能变成 $\int_0^1 \frac{1-t^n}{1-t} dt$
</GreenCard>
</div>

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
