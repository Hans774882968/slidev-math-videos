---
theme: dracula
mdc: true
transition: slide-left
class: text-center
tags:
  - 组合数
  - 抽象函数
  - 二项式定理
---

<SlidevPageRedirector />
<AutoSlide :timeList="[[52, 7], 12, 31, 26, 42]" :debug="true" />

## 《高中数学竞赛培优教程》好题：函数性质+组合数定义

题源：《高中数学竞赛培优教程一试》第四版《函数的综合应用》赛题演练P12（第61页）

作者： **hans7**

**我们必须想象，做题人是幸福的**

文字稿传送门：见视频简介

这题当真需要聚精会神才能做？

---

## 题干

已知f是R上奇函数， $f(1)=1$ 且对任意 $x<0$ 有 

$$
f(\frac{x}{x-1})=xf(x)
$$

求

$$
\sum_{i=1}^{50} f(\frac{1}{i})f(\frac{1}{101-i})
$$

<div
  v-click
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0 }"
>

## 思路

<div class="h-40 flex justify-center items-center text-2xl text-orange">
根据目标函数的长相，不断地手玩约束方程，直到找到能用来<span class="font-bold">化简目标函数的性质</span>
</div>
</div>

---

## 题解

下面记目标函数为g。看到目标函数里有 $\frac{1}{x}$ ，我们自然会想把 $\frac{1}{x},\ x<0$ 代入约束方程试试：

$$
f(\frac{\frac{1}{x}}{\frac{1}{x}-1})=f(\frac{1}{1-x})=\frac{1}{x}f(\frac{1}{x})
$$

然后f是奇函数，所以我们会想把上面的x换成-x试试：

$$
-\frac{1}{x}f(-\frac{1}{x})=(-1)^2\frac{1}{x}f(\frac{1}{x})=f(\frac{1}{1+x})
$$

所以

<div class="font-bold border border-white px-2 py-1 rounded-lg">
$$
\frac{1}{x}f(\frac{1}{x})=f(\frac{1}{1-x})=f(\frac{1}{1+x}),\ x<0
$$
</div>

---

## 题解续

这里 $x<0$ ，但我们**希望x是正数**，所以把上式的x换成 $u=-x>0$ ：

<div class="font-bold border border-white px-2 py-1 rounded-lg">
$$
\frac{1}{u}f\left( \frac{1}{u} \right)=\frac{1}{x}f(\frac{1}{x})=f(\frac{1}{1-x})=f(\frac{1}{1+(-x)})=f(\frac{1}{1+u})
$$
</div>

我们拿到了一个**递推式**！所以不难得到 $f\left( \frac{1}{x} \right)=\frac{1}{(x-1)!},\ x\geq1$ 。于是目标函数

$$
g=\sum_{i=1}^{50} f\left( \frac{1}{i} \right)f\left( \frac{1}{101-i} \right)=\sum_{i=0}^{49} \frac{1}{i!(99-i)!}
$$

---

## 题解续

联想到组合数的定义式 $C_{n}^m=\frac{n!}{m!(n-m)!}$ ，于是

$$
g=\frac{1}{99!}\sum_{i=0}^{49} C_{99}^i
$$

又由二项式定理

$$
\sum_{i=0}^{99} C_{99}^i = 2^{99}
$$

和 $C_{99}^i=C_{99}^{99-i}$ ，得

$$
\sum_{i=0}^{49} C_{99}^i=\frac{\sum_{i=0}^{99} C_{99}^i}{2}=2^{98} \Rightarrow g=\frac{2^{98}}{99!}
$$

**总结**：只有这一页PPT需要一点点注意力~

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了一键三连喔</span>

谢谢观看~
