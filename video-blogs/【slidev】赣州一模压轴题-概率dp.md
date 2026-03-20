---
theme: dracula
mdc: true
transition: slide-left
lineNumbers: true
# fonts:
#   sans: 'HanYiLingXinTiJian'
#   local: 'HanYiLingXinTiJian'
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
  font-family: 'HanYiLingXinTiJian';
  src: url('/fonts/HanYiLingXinTiJian.ttf') format('truetype');
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

<div class="h-30 flex justify-center items-center text-5xl text-orange">
概率dp求多项式系数~
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
3. 后n-k个周期，两个细胞都分化为1个，概率 $(\frac{2}{3})^{2(n-k)}$

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

记 $P(X_{n}=m)$ 为 $dp[m,n]$ 。设第n-1个周期有k个细胞，则：

- 第n个周期需要在k个细胞中选m-k个来一分为二，剩下 $2k-m$ 个细胞分化为一个。而为了能做这个选取动作，需要 $k \geq m-k \implies k \geq \lceil \frac{m}{2} \rceil$
- 边界条件：0个周期只有1个细胞，故 $dp[m,0]=[m==1]$ ，即n=0时值为1，其他情况值为0

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

问题来了：这种数列的通项公式怎么求？

---

## （3）求数列通项公式-法1：将递推式转化为累加形式

我们希望通过两边同乘 $f(n)$ ，使得递推式能够累加，即

$$
\begin{cases}
f(n)dp[3,n]=\dots+\frac{8}{27}f(n)dp[3,n-1] \\
f(n-1)dp[3,n-1]=\dots+\frac{8}{27}f(n-1)dp[3,n-2] \\
\dots
\end{cases}
$$

里满足 $\frac{8}{27}f(n)=f(n-1)$ 。令 $\frac{8}{27}f(1)=f(0)=1$ 得 $f(n)=(\frac{3}{2})^{3n}$ 。于是累加得：

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

我们希望找到 $f(n)$ ，使得 $dp[3,n]+f(n)=\frac{8}{27}(dp[3,n-1]+f(n-1))$ ，展开并对比原递推式得： $
f(n) - (\frac{2}{3})^3 f(n-1) = (\frac{2}{3})^{2n-1} - (\frac{2}{3})^n$

右边是关于 $x=(\frac{2}{3})^n \in (0, \frac{2}{3}]$ 的二次函数 $\frac{3}{2}x^2-x$ ，故设 $f(n) = A \cdot (\frac{2}{3})^{2n} + B \cdot (\frac{2}{3})^n$ ，于是方程左边

$$
\begin{align}
\text{LHS} &= \left[ A \left(\frac{2}{3}\right)^{2n} + B \left(\frac{2}{3}\right)^n \right] - \left(\frac{2}{3}\right)^3 \left[ A \left(\frac{2}{3}\right)^{2n-2} + B \left(\frac{2}{3}\right)^{n-1} \right] \\
&=\frac{1}{3} A \left(\frac{2}{3}\right)^{2n} + \frac{5}{9} B \left(\frac{2}{3}\right)^n=\frac{A}{3}x^2+\frac{5}{9}Bx
\end{align}
$$

对比系数得 $\frac{A}{3}=\frac{3}{2},\ \frac{5}{9}B=-1\implies A = \frac{9}{2},\ B = -\frac{9}{5}$ 。设新数列 $c_n = dp[3,n] + f(n)=dp[3,n]+\left[ \frac{9}{2} \left(\frac{2}{3}\right)^{2n} - \frac{9}{5} \left(\frac{2}{3}\right)^n \right]$ ，则它是首项 $c_{0}=\frac{27}{10}$ ，公比为 $\frac{8}{27}$ 的等比数列。故

$$
dp[3,n]=c_{n}-f(n)=\frac{27}{10} \left(\frac{2}{3}\right)^{3n} - \left[ \frac{9}{2} \left(\frac{2}{3}\right)^{2n} - \frac{9}{5} \left(\frac{2}{3}\right)^n \right]=\frac{27}{10}(\frac{2}{3})^{3n}-\frac{9}{2}(\frac{2}{3})^{2n}+\frac{9}{5}(\frac{2}{3})^{n}
$$

---

## （3）给证明收尾

前面已经求出通项公式 $dp[3,n]==\frac{27}{10}(\frac{2}{3})^{3n}-\frac{9}{2}(\frac{2}{3})^{2n}+\frac{9}{5}(\frac{2}{3})^{n}$

按原不等式想要的系数 $\frac{6}{5}(\frac{2}{3})^{n-1}$ 提取公因式：

$$
P(X_{n}=3)=\frac{6}{5}(\frac{2}{3})^{n-1}(\frac{9}{4}(\frac{2}{3})^{2n+1}-\frac{15}{4}(\frac{2}{3})^{n+1}+1)=\frac{6}{5}(\frac{2}{3})^{n-1}(\frac{3}{2}(\frac{2}{3})^{2n}-\frac{5}{2}(\frac{2}{3})^{n}+1)
$$

记 $x=(\frac{2}{3})^n \in (0, \frac{2}{3}]$ 则得 $0 \leq \frac{3}{2}x^2-\frac{5}{2}x+1 < 1$ ，证毕

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
