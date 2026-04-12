---
theme: ./hans-green-theme
mdc: true
transition: slide-left
lineNumbers: true
tags:
  - 三角换元
  - 二倍角公式
  - 欧拉公式
  - 麦克劳林展开
  - 放缩
---

<SlidevPageRedirector />
<MovingWatermark />
<!-- <AutoSlide :timeList="[0, 0]" /> -->

<div class="bg-gradient-to-br from-[#719cd4] to-[#5984bf] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
  <h1 class="title-stroke !text-[#3468ab] !mb-1 font-black tracking-tighter text-center">
    2026成都二诊压轴
  </h1>

  <div class="flex flex-col justify-center items-center gap-3 mb-2">
    <h2 class="flex justify-center items-center font-black text-center !text-[#4a81c8] !text-2xl md:!text-3xl">
      <div class="mx-2 bg-white px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#4a81c8]">三角换元求通项</span>
      </div>
      <span class="subtitle-stroke">+</span>
      <div class="mx-2 bg-white px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#4a81c8]">麦克劳林展开</span>
      </div>
      <span class="subtitle-stroke">+</span>
      <div class="mx-2 bg-white px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#4a81c8]">放缩</span>
      </div>
    </h2>
  </div>

  <div class="border-4 border-white bg-gradient-to-br from-[#719cd4] to-[#5984bf] px-4 rounded-2xl shadow-lg flex items-center justify-center text-lg md:text-xl text-white font-serif">

$$
\boldsymbol{
\begin{cases}
A_n(m) = A_{n-1}(m) + (2n-m)A_{n-1}(m-1) \\
dp[i,j]=dp[i-1,j]+(n-j+1)dp[i-1,j-1]
\end{cases}
}
$$
  </div>

  <p class="text-white text-2xl md:text-3xl mt-6 text-center">
    简单扩展后，还涉及欧拉公式~
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

在数列 $\{ a_{n} \}$ 中， $a_{1}=1,\ a_{n+1}=\sqrt{ a_{n}+2 }$ ，设 $\{ a_{n} \}$ 的前n项和为 $S_{n}$ ，记 $[x]$ 为不超过x的最大整数（高斯函数）

1. 求 $[S_{1}],\ [S_{2}],\ [S_{3}]$
2. 是否存在常数 $A,\ \omega\ (A>0,\ 0< \omega < 2\pi)$ 使得 $a_{n}=A\cos \frac{\omega}{2^n}$ ？若存在，请算出来；若不存在，请说明理由
3. 求 $[2S_{1}+1]+[2S_{2}+1]\dots+[2S_{n}+1]$

<div class="h-24 flex justify-center items-center gap-1 text-6xl text-orange">
这么综合？

<MyKeywords
  :keywords="['三角换元求通项', '麦克劳林展开', '放缩', '欧拉公式']"
  color="green"
  keywordTagCls="!text-xl !px-3 !py-1 !rounded-xl"
/>
</div>

---

## （1）送分

$a_{1}=1,\ a_{2}=\sqrt{ a_{1}+2 }=\sqrt{ 3 },\ a_{3}=\sqrt{ a_{2}+2 }=\sqrt{ \sqrt{ 3 }+2 }$

$1.5 < a_{2}=\sqrt{ 3 } < 2$ ，所以 $[S_{1}]=1,\ 1+1.5=2.5 < S_{2}=1+\sqrt{ 3 } < 1+2=3 \implies [S_{2}]=2$

为了求出a3的范围，考虑它的平方： $3.5 < a_{3}^2=\sqrt{ 3 }+2 < 4$ 。所以 $1.5 < a_{3} < 2$ 。所以 $1+1.5+1.5=4 < S_{3} < 1+2+2=5 \implies [S_{3}]=4$

---

## （2）即使没有引导，通项也不难求

对原问题进行**一般化**： $a_{n+1}=\sqrt{ Aa_{n}+B }$ 。1. A和B要满足什么关系才能求通项？2. 如何进行**三角换元**？

两边平方并移项： $a_{n+1}^2-B=Aa_{n}$ 。这让你想到了什么？

<MyBlock type="success" title="关键想法">

联想到**二倍角公式** $\cos 2x=2\cos^2 x-1$
</MyBlock>

设 $a_{n}=C \cos x_{n},\ a_{n+1}=C \cos \frac{x_{n}}{2}, C \neq 0$ ，则

$$
\textcolor{#fb923c}{
\boldsymbol{
a_{n+1}^2-B=C^2 \cos^2 \frac{x_{n}}{2}-B =Aa_{n}=AC(2\cos^2 \frac{x_{n}}{2}-1)
}
}
$$

对比系数得： $C=2A,\ B=AC=2A^2$ 。回到原题： $a_{n+1}=\sqrt{ a_{n}+2 }$ ，这里 $A=1$ ，设 $a_{n}=2 \cos x_{n}$ 即可。 $\{ x_{n} \}$ 是公比为 $\frac{1}{2}$ 的等比数列。于是我们只需要求出 $x_{1}$ 。

$a_{1}=2 \cos x_{1}=1 \implies x_{1}=\frac{\pi}{3} \implies a_{n}=2 \cos \frac{\pi}{3*2^{n-1}}$

---

## （2）的扩展：如果给定一个比较大的 $a_{1}$ ，该怎么办呢？

<MyBlock type="info" title="问题">

$a_{n+1}=\sqrt{ a_{n}+2 }$ ，但 $a_{1} = 114514$ ，求通项
</MyBlock>

[我之前的视频](https://www.bilibili.com/video/BV1yisazLEqX)介绍过可以用欧拉公式 $e^{ix}=\cos x+i\sin x$ 表示sin和cos：

$$
\begin{cases}
\sin x=\frac{e^{ix}-e^{-ix}}{2i} \\
\cos x=\frac{e^{ix}+e^{-ix}}{2}
\end{cases}
$$

---

## （2）的扩展：给定比较大的 $a_{1}$ （续）

我们已知 $a_{n}=2 \cos x_{n} \implies a_{n}=e^{ix_n} + e^{-ix_n}$ 。又已知 $\{ x_{n} \}$ 是公比为 $\frac{1}{2}$ 的等比数列，故 $a_{n}=\left(e^{ix_1}\right)^{1/2^{n-1}} + \left(e^{ix_1}\right)^{-1/2^{n-1}}$ 。所以我们只需要求 $e^{ix_{1}}$

令 $z = e^{ix_1}$，则 $e^{-ix_1} = z^{-1}$ ，于是 $a_{1}=e^{ix_1}+e^{-ix_1}=z+\frac{1}{z}=114514 \implies z^2 - 114514z + 1 = 0$

我们知道a数列都是实数，所以不用算也能猜测，这个方程肯定能求出两个实数根 $z_{1},z_{2}$ ，且 $z_{1}z_{2}=1$ 。这里不妨取大于1的根 $z_{1}=\frac{114514 + \sqrt{114514^2 - 4}}{2}$ （注： $z_{2}=\frac{114514 - \sqrt{114514^2 - 4}}{2}=\frac{1}{z_{1}}$

于是求出通项公式 $a_{n}=z_{1}^{2^{1-n}}+z_{1}^{-2^{1-n}}$

---

## 留些拓展思考吧~

都很💧，但建议**第一次接触欧拉公式的同学**简单玩玩~

<MyTheorem type="corollary" title="拓展思考1">

写代码求出 $a_{n+1}=\sqrt{ a_{n}+2 }$ ，但 $a_{1} = a > 0$ 的通项
</MyTheorem>

<MyTheorem type="corollary" title="拓展思考2">

把前面解题过程的114514改成1，立刻得到原来第二问的通项公式

$$
a_n = \left( \frac{1 + i\sqrt{3}}{2} \right)^{2^{1-n}} + \left( \frac{1 - i\sqrt{3}}{2} \right)^{2^{1-n}}
$$

请验证它和 $a_{n}=2 \cos \frac{\pi}{3*2^{n-1}}$ 确实相等
</MyTheorem>

---

## （2）的解题过程

题干复述：求出常数 $A,\ \omega\ (A>0,\ 0< \omega < 2\pi)$ 使得 $a_{n}=A\cos \frac{\omega}{2^n}$

两个未知数只需要两个方程，所以用 $a_{1},a_{2}$ 的值列方程就行：

$$
\begin{cases}
a_{1}=1=A\cos \frac{\omega}{2} \\
a_{2}=\sqrt{ 3 }=A\cos \frac{\omega}{4}
\end{cases} \implies \cos \frac{\omega}{4}=\sqrt{ 3 } \cos \frac{\omega}{2}
$$

对右边用**二倍角公式**，拿到一元二次方程： $\cos \frac{\omega}{4}=\sqrt{ 3 }\left( 2\cos^2 \frac{\omega}{4}-1 \right) \implies \cos \frac{\omega}{4}=\frac{1 \pm \sqrt{ 1+4\sqrt{ 3 }*2\sqrt{ 3 } }}{4\sqrt{ 3 }}=\frac{\sqrt{ 3 }}{2} \text{ or } -\frac{\sqrt{ 3 }}{3}$ 。因为 $a_{1}>0$ ，所以要舍去负解，得 $\cos \frac{\omega}{4}=\frac{\sqrt{ 3 }}{2} \implies \omega=\frac{2\pi}{3},\ A=2 \implies a_{n}=2 \cos \frac{\pi}{3*2^{n-1}}$

---

## （2）的解题过程（续）

别高兴得太早！刚刚只用到了 $a_{1},a_{2}$ 的值，别忘了验证它是否满足递推式！ $rhs=\sqrt{ a_{n}+2 }=\sqrt{ 2(\cos \frac{\pi}{3*2^{n-1}} +1) }$ 。考虑二倍角公式 $1+\cos 2x=2\cos^2 x$ 有： $rhs=\sqrt{ 4\cos^2 \frac{\pi}{3*2^n} }=2\cos \frac{\pi}{3*2^n}=a_{n+1}$

<MyBlock type="info" title="评论">

这题虽然不难，但它的铺垫真的给得很好~
</MyBlock>

---

## （3）求 $[2S_{1}+1]+[2S_{2}+1]\dots+[2S_{n}+1]$

<MyBlock type="success" title="如何处理高斯函数？">

高斯函数就像一堵墙，把**相邻项联合起来处理**的可能性隔绝了。所以我们只能考虑把 $[2S_{n}+1]$ **放缩**到两个相邻的整数之间
</MyBlock>

为了处理 $2S_{n}+1$ ，我们先看看 $a_{n}$ 有什么性质。首先，不难发现： $\lim_{ n \to +\infty } \frac{\pi}{3*2^{n-1}}=0$ ，所以 $\lim_{ n \to +\infty } a_{n}=2$ 。猜测从足够大的n开始使用放缩 $a_{n} < 2$ ，应该是个不错的选择~

如果从 $a_{2}$ 开始放缩，可得： $2S_{n}+1 < 2(1+2(n-1))+1=4n-1$ 。如果从 $a_{3}$ 开始放缩，可得： $2S_{n}+1 < 2(1+\sqrt{ 3 }+2(n-2))+1=4n+(2\sqrt{ 3 }-5)$ ，而 $-2 < 2\sqrt{ 3 }-5 < -1$ 。所以在此我们不妨大胆猜测： $[2S_{n}+1]$ 就是 $4n-2$ （ $n \geq 2$ 才成立， $n=1$ 的情况放到最后特殊处理）！

---

## （3）求 $[2S_{1}+1]+[2S_{2}+1]\dots+[2S_{n}+1]$ （续）

那如何进行另一边的放缩呢？我们手上缺少直接进行 $\cos$ 等比数列求和的工具，但有一个工具可以帮我们把 $\cos$ 变成**多项式**，从而转化为**容易求和**的结构，那就是：

<MyBlock type="success" title="让求和变得容易的关键工具">

麦克劳林公式： $\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots+\frac{(-1)^k x^{2 k}}{(2 k)!}+\ldots$
</MyBlock>

这里只需要展开两项： $\cos x = 1 - \frac{x^2}{2!} + o(x^2)$

<MyTheorem type="note">

考场上记得写求导证明 $\cos x > 1 - \frac{x^2}{2}$ 的过程！
</MyTheorem>

$$
a_{n}=2 \cos \frac{\pi}{3*2^{n-1}} > 2\left( 1-\frac{1}{2}\left( \frac{\pi}{3*2^{n-1}} \right)^2 \right)=2-4\left( \frac{\pi}{3*2^{n}} \right)^2 \tag{1}
$$

---

## （3）求 $[2S_{1}+1]+[2S_{2}+1]\dots+[2S_{n}+1]$ （续2）

仍然从 $a_{2}$ 开始放缩，得：

$$
\begin{align}
S_{n} &> 1+\left( 2(n-1)-\frac{4\pi^2}{9}\left( \frac{1}{4^2}+\frac{1}{4^3}+\dots+\frac{1}{4^n} \right) \right) \\
&=(2n-1)-\frac{\pi^2}{27}\left( 1-\frac{1}{4^{n-1}} \right) > 2n-1-\frac{\pi^2}{27}
\end{align}
$$

于是 $2S_{n}+1 > 4n-1-\frac{2\pi^2}{27}$ 。 $\pi^2$ 约等于10，所以 $\frac{2\pi^2}{27} < 1 \implies 2S_{n}+1 > 4n-2$ 。综上， $[2S_{n}+1]=4n-2,\ (n \geq 2)$ ，所求：

$$
\begin{align}
[2S_{1}+1]+[2S_{2}+1]\dots+[2S_{n}+1]&=3+(6+10+\dots+(4n-2)) \\
&=3+\frac{(4n+4)(n-1)}{2}=2n^2+1,\ (n \geq 2)
\end{align}
$$

别高兴得太早！别忘了验证 $n=1$ 的情况！ $[2S_{1}+1]=3=2*1^2+1$ ，刚好也成立。综上，所求确实是 $2n^2+1$

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
