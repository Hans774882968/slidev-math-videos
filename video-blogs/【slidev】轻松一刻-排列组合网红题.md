---
theme: ./hans-green-theme
mdc: true
transition: slide-left
lineNumbers: true
tags:
  - 枚举
  - 隔板法
  - 生成函数
---

<SlidevPageRedirector />
<MovingWatermark />
<AutoSlide :timeList="[0, 20 + 5, 36, 59, 40.5, 56.5, 41.5, 36, 57.5, 51, 53.5]" />

<div class="bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
  <h1 class="title-stroke !text-[#059669] !mb-1 font-black tracking-tighter text-center">
    排列组合网红题
  </h1>

  <div class="flex flex-col justify-center items-center gap-3 mb-2">
    <h2 class="flex justify-center items-center font-black text-center !text-[#059669] !text-2xl md:!text-3xl">
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">枚举+隔板法</span>
      </div>
      <span class="subtitle-stroke">+</span>
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">生成函数</span>
      </div>
      <span class="subtitle-stroke">你都掌握了吗？</span>
    </h2>
  </div>

  <div class="mb-2 bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif">

$x_{1}+x_{2}+x_{3}+2x_{4}+2x_{5}+3x_{6}=15$

的正整数解有多少个？
  </div>

  <p class="text-[#059669] text-2xl md:text-3xl !mt-2 text-center">
    快来回顾下基础~
  </p>

  <p class="text-[#059669] text-2xl md:text-3xl !mt-0 text-center">
    顺便分享个人对枚举的理解
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

$x_{1}+x_{2}+x_{3}+2x_{4}+2x_{5}+3x_{6}=15$ 的正整数解有多少个？

<div class="h-30 flex justify-center items-center gap-1 text-5xl text-orange">
不懂为何会成为网红题~

<MyKeywords :keywords="['枚举+隔板法', '生成函数']" color="green" keywordTagCls="!text-xl !px-3 !py-1 !rounded-xl" />
</div>

---

## 法1：枚举+隔板法：回顾隔板法

简单回顾下**隔板法**模型：场景：把n个相同的小球放进m个不同的盒子里。对应的数学模型： $x_{1}+\dots+x_{m}=n$ 的正整数解有多少个？

我们想象这n个小球摆成一排，用m-1个**相同的隔板**隔开，且隔板之间不能相邻。这就相当于在n-1个**相同空位**中选择m-1个作为隔板，所以方案数是 $C_{n-1}^{m-1}$

<div class="flex justify-center">
<img src="./assets/260508/隔板法讲解视频.png" class="w-66" />
</div>

---

## 法1：枚举+隔板法

<MyBlock type="success" title="这题唯一的难点">

不愿放下身段去**枚举**！总感觉这里可能有什么未被发现的特殊性质，可以避免枚举的劳累！
</MyBlock>

当我们有隔板法的基础后，观察方程的系数，发现 $x_{4}\ ,x_{5},\ x_{6}$ 的系数不是1，无法直接套隔板法模型。怎么办呢？

<MyBlock type="success" title="核心思路">

直接枚举 $x_{4}\ ,x_{5},\ x_{6}$ 的所有可能取值！ $x_{4}\ ,x_{5},\ x_{6}$ 都定下来后，剩下的3个变量就成为标准的隔板法模型了
</MyBlock>

估算一下要枚举的情况有多少：即使是 $x_{4}=x_{5}=x_{6}=1$ ，等式右边也只剩15-7=8了，可以预计需要枚举的情况并不多！

---

## 法1：枚举+隔板法-开始枚举

个人采用的策略：想象 $x_{4}\ ,x_{5},\ x_{6}$ 构成**变进制数**来枚举：

1. $(1,1,1):\ C(8-1,3-1)=21$
2. $(1,1,2):\ C(5-1,3-1)=6$
3. $(1,2,1):\ C(6-1,3-1)=10$
4. $(1,2,2):\ C(3-1,3-1)=1$
5. $(1,3,1):\ C(4-1,3-1)=3$
6. $(2,1,1):\ C(6-1,3-1)=10$
7. $(2,1,2):\ C(3-1,3-1)=1$
8. $(2,2,1):\ C(4-1,3-1)=3$
9. $(3,1,1):\ C(4-1,3-1)=3$

21+6+10+1+3+10+1+3+3=58

---

## 法2：改进枚举策略

注意到 $x_{6}$ 的系数是3，最大，且容易确定取值 $(1,1,3)$ 超出范围，那么就分 $x_{6}=1,2$ 两种情况来枚举。

$x_{6}=1$ ： $x_{4},x_{5}$ 的系数都是2，这意味着它们有**对称性**。此时 $2x_{4}+2x_{5} \leq 9 \implies x_{4}+x_{5}=2,3,4$

1. 取2， $(1,1)$ ，1种，贡献 $1*C(8-1,3-1)=21$
2. 取3， $(1,2),(2,1)$ ，2种，贡献 $2*C(6-1,3-1)=20$
3. 取4， $(1,3),(2,2),(3,1)$ ，3种，贡献 $3*C(4-1,3-1)=9$

$x_{6}=2$ ：此时 $2x_{4}+2x_{5} \leq 6 \implies x_{4}+x_{5}=2,3$

1. 取2， $(1,1)$ ，1种，贡献 $1*C(5-1,3-1)=6$
2. 取3， $(1,2),(2,1)$ ，2种，贡献 $2*C(3-1,3-1)=2$

21+20+9+6+2=58

---

## 分类讨论/枚举对数学模型的作用

为了让枚举成为同学们更愿意使用的数学工具，我们来讲讲：

<MyBlock type="success" title="分类讨论/枚举对数学模型的作用">

把性质不够好的、难以套进标准模型的问题，拆分为若干个性质更好的、容易套进**标准模型**的**子问题**
</MyBlock>

什么叫性质好呢？

- 静止的、运动受限的，或运动有规律的
- 多个对象之间差异更小的，或有对称性的
- ……

一言以蔽之，容易**被标准模型描述**的。

---

## 分类讨论/枚举对数学模型的作用-以这道题为例

比如 $x_{1}+x_{2}+x_{3}+2x_{4}+2x_{5}+3x_{6}=15$ 这道题， $x_{4}\ ,x_{5},\ x_{6}$ 的系数不是1，可以理解为：

- 运动的对象过多
- 对象间产生了不一致性
- ……

有很多种理解，但都是描述同一个东西：性质不够好，**无法套用标准模型**。

而枚举 $x_{4}\ ,x_{5},\ x_{6}$ 的作用可以理解为：

- 化动为静
- 消除不一致性
- ……

也有很多种理解，但也都是描述同一个东西：施加限制，获得多个容易套进**标准模型**的子问题

---

## 法3-生成函数

- $x_{1}, x_{2}, x_{3}$ 可以取所有正整数，故生成函数为 $z+z^2+\dots$
- $2x_{4}, 2x_{5}$ 可以取所有大于等于2的偶数，故生成函数为 $z^2+z^4+\dots$
- $3x_{6}$ 可以取所有大于等于3的3的倍数，故生成函数为 $z^3+z^6+\dots$

这里不方便直接相乘！但如果你学过微积分中《幂级数》这一章，就知道： $\frac{1}{1-z}= \sum_{i=0}^\infty z^i$ 。于是：

- $x_{1}, x_{2}, x_{3}$ ： $\frac{z}{1-z}$
- $2x_{4}, 2x_{5}$ ： $\frac{z^2}{1-z^2}$
- $3x_{6}$ ： $\frac{z^3}{1-z^3}$

相乘：

$$
G(z) = \left(\frac{z}{1-z}\right)^3 \left(\frac{z^2}{1-z^2}\right)^2 \left(\frac{z^3}{1-z^3}\right) = \frac{z^{10}}{(1-z)^3 (1-z^2)^2 (1-z^3)}
$$

求 $G(z)$ 中 $z^{15}$ 的系数，相当于求 $H(z)=\frac{1}{(1-z)^3 (1-z^2)^2 (1-z^3)}$ 中 $z^{5}$ 的系数

---

## 法3-生成函数-推导 $\frac{1}{1-z^c}$ 和 $\frac{1}{(1-z)^c}$

观察 $H(z)=\frac{1}{(1-z)^3 (1-z^2)^2 (1-z^3)}$ ，我们还需要两个结论： $\frac{1}{1-z^c}$ ，以及 $\frac{1}{(1-z)^c}$ 。这俩都可以用 $\frac{1}{1-z}= \sum_{i=0}^\infty z^i$ 简单推出~

1. $\frac{1}{1-z^c}$ ：把z换成 $z^c$ 就能得到： $\frac{1}{1-z^c}=\sum_{i=0}^\infty z^{ci}$ （幂是c的倍数时系数为1，否则为0）
2. $\frac{1}{(1-z)^c}$ ：注意到 $(1-z)^{-c}$ 是幂函数换元1-z，所以考虑对 $(1-z)^{-1}$ **多次求导**，看看规律：
	1. 1阶导： $(-1)(1-z)^{-2}(-1)=(1-z)^{-2}$ 。2阶导： $(-2)(1-z)^{-3}(-1)=2(1-z)^{-3}$ 。3阶导： $2(-3)(1-z)^{-4}(-1)=3!(1-z)^{-4}$ 。总结出规律：对 $\frac{1}{1-z}$ 求c-1阶导可得 $\frac{(c-1)!}{(1-z)^c}$
	2. 接着对 $\frac{1}{1-z}$ 的幂级数展开求c-1导： $\sum_{n=c-1}^\infty n(n-1)\cdots(n-c+2) z^{n-c+1} = \sum_{k=0}^{\infty} (k+c-1)(k+c-2)\dots(k+1) z^{k}$ 。把 $(c-1)!$ 除过去，就得到我们想要的系数 $\frac{(k+c-1)(k+c-2)\dots(k+1)}{(c-1)!}=\frac{(k+c-1)!}{k!(c-1)!}=C(k+c-1,k)$

尝试套用结论： $\frac{1}{(1-z)^3} = \sum_{i=0}^\infty \binom{i+2}{2} z^i$ ， $\frac{1}{(1-z^2)^2} = \sum_{j=0}^\infty \binom{j+1}{1} z^{2j}$ ， $\frac{1}{1-z^3} = \sum_{k=0}^\infty z^{3k}$

---

## 法3-生成函数（续）

我们已经得到： $\frac{1}{(1-z)^3} = \sum_{i=0}^\infty \binom{i+2}{2} z^i$ ， $\frac{1}{(1-z^2)^2} = \sum_{j=0}^\infty (j+1) z^{2j}$ ， $\frac{1}{1-z^3} = \sum_{k=0}^\infty z^{3k}$

由**多项式乘法的定义**，乘积中 $z^5$ 的系数为所有满足 $i + 2j + 3k = 5$ 的自然数 $i, j, k$ 的项之和：

$$
\sum_{i+2j+3k=5} C_{i+2}^{2} \cdot (j+1) \tag{1}
$$

依旧考虑按系数大的变量来分类讨论：k只能取0、1

- $k=0$ ：j可取0、1、2，贡献 $1C_{7}^2+2C_{5}^2+3C_{3}^2=50$
- $k=1$ ：j可取0、1，贡献 $1C_{4}^2+2C_{2}^2=8$

<MyBlock type="success" title="你发现了什么？">

1. 巧法，也是无法避免枚举工作滴！
2. 这里**生成函数**的作用是，把“法2：改进枚举策略”压缩成一个公式
</MyBlock>

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
