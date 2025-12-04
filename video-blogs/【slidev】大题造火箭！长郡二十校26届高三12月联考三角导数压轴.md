---
theme: dracula
mdc: true
transition: slide-left
class: text-center
tags:
  - 和差化积
  - 欧拉公式
  - 裂项相消
---

## 大题造火箭！长郡二十校26届高三12月联考三角导数压轴

题源：长郡二十校联盟2026届高三12月联考第19题

作者： **hans7**

**我们必须想象，做题人是幸福的**

文字稿传送门：见视频简介

---

## 题干

有函数 $f(x)=x+\cos x$

（1）若 $f(2m+1)-f(2m-1)>2$ ，求证： $-1<\sin m+\cos m<1$

（2）若数列 $\{a_{n}\}$ 满足 $a_{n}=\sin 2n$ ，设前n项和为 $S_{n}$ ，求证： $-\frac{1}{2}\tan \frac{1}{2}<S_{n}<\frac{1}{2\tan \frac{1}{2}}$

（3）若等差数列 $\{b_{n}\}$ 的公差 $d=2026$ ，前n项和为 $T_{n}$ ， $\sum_{i=1}^{2026} f(b_{i})=1013\pi$ ，求 $T_{2026}$

<div class="h-50 flex justify-center items-center text-4xl text-orange">
小题1+1，大题造火箭😭来求sin和cos等差数列的和！
</div>

---

## 第一题

$$
f(2m+1)-f(2m-1)=2+\cos(2m+1)-\cos(2m-1)>2 \implies \cos(2m+1)>\cos(2m-1)
$$

用和角公式拆开：

$$
\cos 2m\cos 1-\sin 2m\sin 1>\cos 2m\cos 1+\sin 2m\sin 1 \implies \sin 2m\sin 1<0
$$

显然 $\sin 1>0$ ，所以 $\sin 2m<0$ ，于是 $2k\pi+\pi<2m<2k\pi+2\pi \implies k\pi+\frac{\pi}{2}<m<k\pi+\pi,\ k \in Z$ 。然后我们看要证的式子 $\sin m+\cos m=\sqrt{ 2 }\sin(m+\frac{\pi}{4})$ 。我们有 $k\pi+\frac{3\pi}{4}<m+\frac{\pi}{4}<k\pi+\frac{5\pi}{4}$ ，接下来就很简单了，有多种方法得到结论。

我们选择用和角公式拆开： $\sin(k\pi+t)=\pm \sin t,\ t \in (\frac{3\pi}{4},\frac{5\pi}{4})$ ，这个式子的值域确实是 $(-\frac{\sqrt{ 2 }}{2},\ \frac{\sqrt{ 2 }}{2})$ ，证毕

---

## 第二、三题的前置芝士

为了解决后面两问，我们需要两个关键公式，就是sin和cos等差数列的和：

$$
\begin{cases}
\sin a_{1}+\sin(a_{1}+d)+\dots+\sin(a_{1}+(n-1)d)=\frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}}\sin(a_{1}+\frac{n-1}{2}d) \\
\cos a_{1}+\cos(a_{1}+d)+\dots+\cos(a_{1}+(n-1)d)=\frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}}\cos(a_{1}+\frac{n-1}{2}d)
\end{cases}
$$

这两个公式可以用三角变换技能包证，也可以用**欧拉公式**证。这里我选择后者，因为复变函数技能包用着比三角变换技能包顺手。

[我之前的视频](https://www.bilibili.com/video/BV1yisazLEqX)介绍过可以用欧拉公式 $e^{ix}=\cos x+i\sin x$ 表示sin和cos：

$$
\begin{cases}
\sin x=\frac{e^{ix}-e^{-ix}}{2i} \\
\cos x=\frac{e^{ix}+e^{-ix}}{2}
\end{cases}
$$

---

## 求 $s=\sum_{i=1}^{n} \sin(a_{1}+(i-1)d)$

二话不说，先套公式 $\sin x=\frac{e^{ix}-e^{-ix}}{2i}$ ：

$$
\begin{equation}
\begin{split}
s=\sum_{k=1}^{n} \sin(a_{1}+(k-1)d) &= \sum_{k=1}^{n} \frac{e^{i(a_{1}+(k-1)d)}-e^{-i(a_{1}+(k-1)d)}}{2i} \\
&= \frac{1}{2i} (e^{ia_{1}}\sum_{k=1}^{n} e^{i(k-1)d}-e^{-ia_{1}}\sum_{k=1}^{n} e^{-i(k-1)d})
\end{split}
\end{equation}
$$

这里可以用**等比数列求和公式**，首项都是1，公比分别是 $e^{id},\ e^{-id}$ ：

$$
s=\frac{1}{2i} (\frac{e^{ia_{1}}(e^{ind}-1)}{e^{id}-1}-\frac{e^{-ia_{1}}(e^{-ind}-1)}{e^{-id}-1})
$$

$e^{ia_{1}}$ 可以直接用欧拉公式还原成sin和cos。但 $\frac{e^{ind}-1}{e^{id}-1}$ 咋转化？

---

## 求 $s=\sum_{i=1}^{n} \sin(a_{1}+(i-1)d)$ 续：求 $e^{iX}-1$

我们回望 $\sin x=\frac{e^{ix}-e^{-ix}}{2i}$ 这个式子，发现分子分母同乘 $e^{ix}$ ，就能发现 $e^{i(2x)}-1$ 这种形式。所以 $e^{iX}-1$ 可以变成 $2ie^{i\frac{X}{2}}\frac{e^{i\frac{X}{2}}-e^{i\frac{-X}{2}}}{2i}$ ，这样就能弄出sin了： $2ie^{i\frac{X}{2}}\sin \frac{X}{2}$ 。分别代入 $X=nd,\ d,\ -nd,\ -d$ 得：

$$
s=\frac{1}{2i}(e^{ia_{1}}\frac{e^{i\frac{nd}{2}}\sin \frac{nd}{2}}{e^{i\frac{d}{2}}\sin \frac{d}{2}}-e^{-ia_{1}}\frac{e^{i\frac{-nd}{2}}\sin \frac{-nd}{2}}{e^{i\frac{-d}{2}}\sin \frac{-d}{2}})
$$

把 $\frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}}$ 提出来，我们发现剩下的几个e的指数刚好互为相反数（ $a_{1}+\frac{nd}{2}-\frac{d}{2}$ 和它的相反数），所以可以再次套用 $\sin x=\frac{e^{ix}-e^{-ix}}{2i}$ ：

$$
s=\frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}} \frac{e^{a_{1}+\frac{nd}{2}-\frac{d}{2}}-e^{-(a_{1}+\frac{nd}{2}-\frac{d}{2})}}{2i}=\frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}}\sin(a_{1}+\frac{n-1}{2}d)
$$

---

## 求 $s=\sum_{i=1}^{n} \cos(a_{1}+(i-1)d)$

微调上一页PPT推导过程就能拿到cos的式子

$$
\begin{equation}
\begin{split}
s=\sum_{k=1}^{n} \cos(a_{1}+(k-1)d) &= \sum_{k=1}^{n} \frac{e^{i(a_{1}+(k-1)d)}+e^{-i(a_{1}+(k-1)d)}}{2} \\
&= \frac{1}{2} (e^{ia_{1}}\sum_{k=1}^{n} e^{i(k-1)d}+e^{-ia_{1}}\sum_{k=1}^{n} e^{-i(k-1)d}) \\
&= \frac{1}{2} (\frac{e^{ia_{1}}(e^{ind}-1)}{e^{id}-1}+\frac{e^{-ia_{1}}(e^{-ind}-1)}{e^{-id}-1}) \\
&= \frac{1}{2}(e^{ia_{1}}\frac{e^{i\frac{nd}{2}}\sin \frac{nd}{2}}{e^{i\frac{d}{2}}\sin \frac{d}{2}}+e^{-ia_{1}}\frac{e^{i\frac{-nd}{2}}\sin \frac{-nd}{2}}{e^{i\frac{-d}{2}}\sin \frac{-d}{2}}) \\
&= \frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}} \frac{e^{a_{1}+\frac{nd}{2}-\frac{d}{2}}+e^{-(a_{1}+\frac{nd}{2}-\frac{d}{2})}}{2} \\
&= \frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}}\cos(a_{1}+\frac{n-1}{2}d)
\end{split}
\end{equation}
$$

---

## （2）$a_{n}=\sin 2n$ ，设前n项和为 $S_{n}$ ，求证： $-\frac{1}{2}\tan \frac{1}{2}<S_{n}<\frac{1}{2\tan \frac{1}{2}}$

### 法1：直接套前面介绍的公式

$\sum_{k=1}^{n} \sin 2k=\frac{\sin(n+1)\sin n}{\sin 1}$

### 法2：利用第一问给的式子求和

第一问用到的式子 $\cos(2m+1)-\cos(2m-1)=-2\sin 1\sin 2m$ ，**注意到**这个式子可以直接**裂项相消**求出题干想要的 $S_{n}$ ：

$$
\cos(2n+1)-\cos 1=-2\sin 1S_{n} \implies S_{n}=\frac{\cos 1-\cos(2n+1)}{2\sin 1}
$$

### 题解剩余部分

法1的结果积化和差就得到法2的结果。拿法1或者法2结果去证都行。这里以法1结果为例。

---

## （2）$a_{n}=\sin 2n$ ，设前n项和为 $S_{n}$ ，求证： $-\frac{1}{2}\tan \frac{1}{2}<S_{n}<\frac{1}{2\tan \frac{1}{2}}$

### 左边

tan只出现1次，所以我们把tan都换成sin、cos，于是顺势二倍角拆开 $\sin 1$ 。欲证原式，只需证

$$
-\frac{1}{2}\tan \frac{1}{2}=-\frac{\sin \frac{1}{2}}{2\cos \frac{1}{2}}<\frac{\sin(n+1)\sin n}{2\sin \frac{1}{2}\cos \frac{1}{2}} \iff -\sin^2 \frac{1}{2}<\sin(n+1)\sin n
$$

n+1和n相差1，是0.5的2倍，所以设 $t=n+\frac{1}{2}$ ：

$$
\sin(t+\frac{1}{2})\sin(t-\frac{1}{2})=\sin^2 t\cos^2 \frac{1}{2}-\cos^2 t\sin^2 \frac{1}{2}
$$

所以只需证 $\sin^2 t\cos^2 \frac{1}{2}+(1-\cos^2 t)\sin^2 \frac{1}{2}>0$ 。左边的 $\sin \frac{1}{2},\ \cos \frac{1}{2}>0$ ， $\sin^2 t,\ 1-\cos^2 t \geq 0$ 。又 $t=n+\frac{1}{2}$ 不可能取到 $\pi$ 的倍数，所以 $\sin^2 t,\ 1-\cos^2 t > 0$ 。证毕

---

## （2）$a_{n}=\sin 2n$ ，设前n项和为 $S_{n}$ ，求证： $-\frac{1}{2}\tan \frac{1}{2}<S_{n}<\frac{1}{2\tan \frac{1}{2}}$

### 右边

右边完全类似。欲证原式，只需证 $\sin^2 t\cos^2 \frac{1}{2}-\cos^2 t\sin^2 \frac{1}{2}<\cos^2 \frac{1}{2}$ 。同理， $\sin^2 t-1$ 和 $-\cos^2 t$ 都严格小于0。证毕

---

## 第三题

$$
\sum_{i=1}^{2026} f(b_{i})=T_{2026}+\sum_{k=1}^{2026} \cos(b_{1}+2026(k-1))=1013\pi
$$

那个cos式子等于

$$
\frac{\sin 1013n}{\sin 1013}\cos(a_{1}+1013(n-1))
$$

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了一键三连喔</span>

谢谢观看~
