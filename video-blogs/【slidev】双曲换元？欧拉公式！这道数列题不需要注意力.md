---
theme: dracula
mdc: true
transition: slide-left
class: text-center
tags:
  - 二倍角公式
  - 欧拉公式
---

<SlidevPageRedirector />
<MovingWatermark />
<AutoSlide :timeList="[[42, 26], [12, 14], 20, 14]" />

## 双曲换元？欧拉公式！这道数列题不需要注意力

题源： https://www.bilibili.com/video/BV14yxvz8EQx

作者： **hans7**

**我们必须想象，做题人是幸福的**

文字稿传送门：见视频简介

---

## 题干

已知

$$
a_{n} = 2a_{n-1}^2 - 1,\ a_{0} = 3
$$

求 $a_{n}$ 通项公式

<div
  v-click
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0 }"
>

注意力？不用~

解决这类问题的**通法**：二倍角公式+**欧拉公式**
</div>

---

## 欧拉公式

$$
\textcolor{orange}{
\boldsymbol{
e^{i\theta} = \cos \theta + i \sin \theta
}
}
$$

推论：

$$
\begin{cases}
e^{i\theta} = \cos \theta + i \sin \theta \\
e^{-i\theta} = \cos \theta - i \sin \theta
\end{cases}

\Rightarrow \cos \theta = \frac{e^{i\theta}+e^{-i\theta}}{2}
$$

<div
  v-click
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0 }"
>

令 $x=e^{i\theta}$ 则

$$
\cos \theta = \frac{x+\frac{1}{x}}{2}
$$

这不就是题源视频说的“双曲换元”吗？
</div>

---

## 题解

令 $x=e^{i\theta}$ 则

$$
a_{0} = \frac{x+\frac{1}{x}}{2} = 3 \Rightarrow x^2-6x+1=0 \Rightarrow x=3\pm 2\sqrt{ 2 }
$$

然后

$$
\begin{cases}
a_{1}=2a_{0}^2-1 = \cos 2\theta = \frac{x^2+\frac{1}{x^2}}{2} \\
a_{2}=2a_{1}^2-1 = \cos 4\theta = \frac{x^4+\frac{1}{x^4}}{2} \\
\dots \\
a_{n} = 2a_{n-1}^2-1 = \cos 2^n \theta = \frac{1}{2}(x^{2^n} + \frac{1}{x^{2^n}})
\end{cases}
$$

所以

$$
a_{n} = \frac{(3+2\sqrt{ 2 })^{2^n} + (3-2\sqrt{ 2 })^{2^n}}{2}
$$

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了一键三连喔</span>

谢谢观看~
