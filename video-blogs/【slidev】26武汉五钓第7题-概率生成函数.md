---
theme: ./hans-green-theme
mdc: true
transition: slide-left
lineNumbers: true
tags:
  - 概率生成函数
  - 二项式定理
  - 第二类斯特林数
  - 下降幂
---

<SlidevPageRedirector />
<MovingWatermark />
<AutoSlide :timeList="[0, 41 + 7, 55, 69.5, 53, 57.5, 32, 39, 53, 45.5, 23.5]" />

<div class="bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
  <h1 class="title-stroke !text-[#059669] !mb-1 font-black tracking-tighter text-center">
    26武汉五钓单选
  </h1>

  <div class="flex flex-col justify-center items-center gap-3 mb-2">
    <h2 class="flex justify-center items-center font-black text-center !text-[#059669] !text-2xl md:!text-3xl">
      <span class="subtitle-stroke">竟能用</span>
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">概率生成函数</span>
      </div>
      <span class="subtitle-stroke">巧解~</span>
    </h2>
  </div>

  <div class="mb-2 bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif">

已知 $X \sim B(20,0.5)$ ，求 $E(X^3)$
  </div>

  <p class="text-[#059669] text-2xl md:text-3xl !mt-2 text-center">
    其常规做法也由PGF启发得到~
  </p>

  <p class="text-[#059669] text-2xl md:text-3xl !mt-0 text-center">
    PS：高三同学别做钓鱼卷！
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

已知 $X \sim B(20,0.5)$ ，求 $E(X^3)$

<div class="flex gap-4">
<GreenCard
  title="不建议高三同学"
>

1. 快高考了，别做钓鱼卷了
2. 从零学新知识
</GreenCard>

<GreenCard
  title="建议高三同学"
>

1. 回归**高考真题**和**优质模拟题**，再次深挖，吸收老题的营养
2. 回顾自己的**错题集**，把错题当新题来做
</GreenCard>
</div>

<div class="h-36 flex justify-center items-center gap-1 text-7xl text-orange">

概率生成函数

<MyKeywords :keywords="['二项式定理', '第二类斯特林数', '下降幂']" color="green" keywordTagCls="!text-xl !px-3 !py-1 !rounded-xl" />
</div>

---

## 概率生成函数

设X是离散型随机变量且 $X \in N$ ，则X的**概率生成函数**（Probability Generating Function, **PGF**）定义为：

$$
G(z) = \sum_{k=0}^{\infty} P(X=k) \, z^k \tag{1}
$$

首先，不难发现 $G(1)=1$ ，因为是所有概率之和。接下来我们尝试求导，看看能发现什么性质！

$G'(z)=\sum_{k=0}^{\infty} P(X=k) k z^{k-1}$ ，令z=1得 $G'(1)=\sum_{k=0}^{\infty} kP(X=k)=E(X)$ 。再求一次导： $G''(z)=\sum_{k=0}^{\infty} P(X=k) k(k-1) z^{k-2}$ ，令z=1得 $G''(1)=\sum_{k=0}^{\infty} k(k-1) P(X=k)=E(X(X-1))$

<MyBlock type="success" title="你发现了什么规律？">

$G^{(m)}(1)=\sum_{k=0}^{\infty} k(k-1)\dots(k-m+1) P(X=k)=E(X\dots(X-m+1))=E(A_{X}^{m})$
</MyBlock>

注： $A_{X}^{m}$ 是高中学过的**排列数**，但在OI里，它又叫做**下降幂**。

---

## 用 $E(A_{X}^1),\ E(A_{X}^2),\ \dots,\ E(A_{X}^m)$ 的线性组合表示 $E(X^m)$

$A_{X}^{m}$ 是关于X的m次多项式，于是 $X^m$ 可以用 $A_{X}^1,\ A_{X}^2,\ \dots,\ A_{X}^m$ 的线性组合表示。根据**期望的可加性**，我们只需要求出 $E(X),\ E(A_{X}^{2}),\ E(A_{X}^{3})$ ，就能求出这题想要的 $E(X^3)$ ！

$$
E(X^3)=k_{3}E(A_{X}^{3})+k_{2}E(A_{X}^{2})+k_{1}E(X)
$$

<MyBlock type="warning" title="问题来了">

怎么确定 $k_{1},k_{2},k_{3}$ ？
</MyBlock>

待定系数法自然能做，但如果你打过OI，就会知道有一个公式可以更方便地求出这些系数——**下降幂转普通幂**：

$$
X^n=\sum_{k=0}^{n} S_{2}(n,k) A_{X}^{k}
$$

其中 $S_{2}(n,k)$ 是**第二类斯特林数**。所以 $k_{i}=S_{2}(3,i),\ 1 \leq i \leq 3$ 。这里直接给出它们的值： $k_{1},k_{2},k_{3}=1,3,1$ ，故 $E(X^3)=E(A_{X}^{3})+3E(A_{X}^{2})+E(X)$

---

## 推导二项分布的概率生成函数

我们已经知道 $E(A_{X}^{m})=G^{(m)}(1)$ ，但我们还不知道二项分布的PGF呢，又怎么求m阶导呢！ 

下面记二项分布 $X \sim B(n,p)$ ， $q=1-p$ 。把 $P(X=k)=C_{n}^{k}q^{n-k}p^k$ 代入概率生成函数的定义式：

$$
G(z)=\sum_{k=0}^{\infty} C_{n}^{k}q^{n-k}p^k \, z^k=\sum_{k=0}^{\infty} C_{n}^{k}q^{n-k}(pz)^k=(q+pz)^n
$$

但注意力涣散怎么办？我们不妨用下面的性质，给出二项分布的PGF的另一种推导方法。

<MyBlock type="success" title="概率生成函数的乘积性质">

设随机变量X和Y独立，且它们的概率生成函数分别为 $G_{X}(z),\ G_{Y}(z)$ ，则 $X+Y$ 的概率生成函数为 $G_{X+Y}(z)=G_{X}(z)G_{Y}(z)$
</MyBlock>

---

## 推导二项分布的概率生成函数（续）

### 概率生成函数的乘积性质-证明

由X、Y独立得 $P(X+Y=k) = \sum_{i=0}^k P(X=i)P(Y=k-i)$ 。代入概率生成函数的定义式：

$$
G_{X+Y}(z)=\sum_{k=0}^{\infty} (\sum_{i=0}^k P(X=i)P(Y=k-i)) z^k
$$

由**多项式乘法的定义**得： $G_{X+Y}(z)=\left( \sum_{i=0}^\infty P(X=i)z^i \right) \left( \sum_{j=0}^\infty P(Y=j)z^j \right)=G_{X}(z)G_{Y}(z)$

### 用0-1分布的PGF推导二项分布的PGF

在高中我们知道，0-1分布是做1次伯努利试验，二项分布是做n次**独立**的伯努利试验。设有n个0-1分布的随机变量 $X_{i} \sim B(1,p),\ 1 \leq i \leq n$ ， $X=\sum_{i=1}^{n} X_{i}$ ，则我们想要的就是 $G_{X}(z)=G_{\sum_{i=1}^{n} X_{i}}(z)=\prod_{i=1}^{n} G_{X_{i}}(z)$ 。故只需求 $G_{X_{i}}(z)$

因为 $P(X_{i}=0)=q,\ P(X_{i}=1)=p$ ，所以 $G_{X_{i}}(z)=q+pz$

所以二项分布的 $G_{X}(z)=(q+pz)^n$ 。它的m阶导是很容易求的

---

## 问题收尾

我们已经知道

<div class="flex gap-4">
<GreenCard
  title="1-二项分布的概率生成函数"
>

$G_{X}(z)=(q+pz)^n$
</GreenCard>

<GreenCard
  title="2-用下降幂表示一切"
>

$E(X^3)=E(A_{X}^{3})+3E(A_{X}^{2})+E(X),\ E(A_{X}^{m})=G^{(m)}(1)$
</GreenCard>
</div>

现在我们可以轻松做出这题了！代入 $n=20,p=0.5$ 得 $G(z) = \left(\frac{1+z}{2}\right)^{20}$ 。逐次求导：

- $G'(z) = 20 \cdot \frac12 \left(\frac{1+z}{2}\right)^{19} = 10 \left(\frac{1+z}{2}\right)^{19}$
- $G''(z) = 10 \cdot 19 \cdot \frac12 \left(\frac{1+z}{2}\right)^{18} = 95 \left(\frac{1+z}{2}\right)^{18}$
- $G'''(z) = 95 \cdot 18 \cdot \frac12 \left(\frac{1+z}{2}\right)^{17} = 855 \left(\frac{1+z}{2}\right)^{17}$

故 $E(X)=G'(1)=10,\ E(A_{X}^2)=G''(1)=95,\ E(A_{X}^3)=G'''(1)=855$ ，所求 $E(X^3)=E(A_{X}^{3})+3E(A_{X}^{2})+E(X)=855 + 3 \times 95 + 10 = 855 + 285 + 10 = 1150$

---

## 总结&扩展

概率生成函数的优美性质：

<div class="grid grid-cols-3 gap-4">
<MyBlock type="success" title="1" blockContentCls="h-full" scholarlyBlockCls="!m-0">

$G(1)=1$
</MyBlock>

<MyBlock type="success" title="2" scholarlyBlockCls="!m-0">

$E(A_{X}^{m})=G^{(m)}(1)$ ，于是可以用 $E(A_{X}^{m})$ 的线性组合表示一切 $E(f(X))$ ，其中 $f(X)$ 为X的任意多项式
</MyBlock>

<MyBlock type="success" title="3-PGF的乘积性质" blockContentCls="h-full" scholarlyBlockCls="!m-0">

设随机变量X和Y独立，则 $X+Y$ 的PGF为 $G_{X+Y}(z)=G_{X}(z)G_{Y}(z)$
</MyBlock>
</div>

常见离散分布的PGF：

<div class="grid grid-cols-3 gap-4">
<MyBlock type="success" title="0-1分布" scholarlyBlockCls="!m-0">

$G_{X}(z)=q+pz$
</MyBlock>

<MyBlock type="success" title="二项分布" scholarlyBlockCls="!m-0">

$G_{X}(z)=(q+pz)^n$
</MyBlock>
</div>

---

## 总结&扩展（续）

为了用 $E(A_{X}^{m})$ 的线性组合表示出一切 $E(f(X))$ ，我们还需要用到**下降幂转普通幂**公式：

$$
X^n=\sum_{k=0}^{n} S_{2}(n,k) A_{X}^{k}
$$

有了这些知识，我们可以尝试做一些更难的题：

1. 已知 $X \sim B(1919810,0.5)$ ，求 $E(X^{114514})$ ，模998244353（需要写代码）
2. 洛谷P6620
3. 洛谷P6667

### 再挖个坑~

我网上冲浪时偶然发现，**矩生成函数**（MGF）可以视为PGF的推广，所以这题还可以用MGF做，而且整个解题过程毫无思维含量，就是纯计算。但~~这里空白太小写不下~~，后续有时间再做视频讲解了~

---

## 受PGF启发，得到一种不超纲做法

从期望定义出发：

$$
E(X^3) = \sum_{k=0}^{20} k^3 \binom{20}{k} p^k q^{20-k}, \quad p=q=0.5 \tag{1}
$$

p=q， $p^k q^{20-k}=2^{20}$ 为定值，于是问题简化为 $\sum k^3 \binom{n}{k}$ 。但它依旧不好算，怎么办呢？

<MyBlock type="success" title="对PGF求m阶导，下降幂自然就会出现">

$G^{(m)}(z)=\sum_{k=0}^{\infty} k(k-1)\dots(k-m+1) z^{k-m} P(X=k)$
</MyBlock>

受这一观察启发，我们把普通幂 $k^3$ 拆分为**下降幂**的线性组合： $k^3 = A_{k}^3 + 3A_{k}^2 + k$ ，于是

$$
2^{20} E(X^3)=\sum_{k=0}^{20} A_{k}^3 \binom{20}{k}+3\sum_{k=0}^{20} A_{k}^2 \binom{20}{k}+\sum_{k=0}^{20} k \binom{20}{k}
$$

所以我们只需求 $g(m)=\sum_{k=0}^{20} A_{k}^m \binom{20}{k},\ m=1,2,3$

---

## 不超纲做法（续）

如何构造出 $g(m)$ 中的系数 $A_{k}^m$ 呢？**二项式定理**+**求导**！我们对 $f(x)=(1+x)^{n}$ 求高阶导：

1. $n(1+x)^{n-1}=\sum_{k=0}^{n} A_{k}^{1} \binom{n}{k} x^{k-1}$
2. $n(n-1)(1+x)^{n-2}=\sum_{k=0}^{n} A_{k}^{2} \binom{n}{k} x^{k-2}$
3. $n(n-1)(n-2)(1+x)^{n-3}=\sum_{k=0}^{n} A_{k}^{3} \binom{n}{k} x^{k-3}$

令x=1，则有 $f^{(m)}(1)=g(m),\ m=1,2,3$ 。所以

$$
\begin{align}
E(X^3)&=\frac{f'(1)+3f''(1)+f'''(1)}{2^{20}} \\
&=\frac{20*2^{19}+3*20*19*2^{18}+20*19*18*2^{17}}{2^{20}} \\
&=10+3*95+855 \\
&=1150
\end{align}
$$

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
