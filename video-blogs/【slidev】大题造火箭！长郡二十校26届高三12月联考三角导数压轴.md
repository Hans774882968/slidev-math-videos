---
theme: dracula
mdc: true
transition: slide-left
class: text-center
tags:
  - 和差化积
  - 积化和差
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

<div class="h-50 flex flex-col gap-4 justify-center items-center text-[42px] text-orange">
小题1+1，大题造飞机😭

用欧拉公式算 $\sum_{k=1}^{n} \cos(a_{1}+(k-1)d)$ ！
</div>

---

## （1） $f(x)=x+\cos x,\ f(2m+1)-f(2m-1)>2$ ，求证： $-1<\sin m+\cos m<1$

$$
f(2m+1)-f(2m-1)=2+\cos(2m+1)-\cos(2m-1)>2 \implies \cos(2m+1)>\cos(2m-1)
$$

用和角公式拆开：

$$
\cos 2m\cos 1-\sin 2m\sin 1>\cos 2m\cos 1+\sin 2m\sin 1 \implies \sin 2m\sin 1<0
$$

显然 $\sin 1>0$ ，所以 $\sin 2m<0$

1. 于是 $2k\pi+\pi<2m<2k\pi+2\pi \implies k\pi+\frac{\pi}{2}<m<k\pi+\pi,\ k \in Z$ 。然后我们看要证的式子 $\sin m+\cos m=\sqrt{ 2 }\sin(m+\frac{\pi}{4})$ 。我们有 $k\pi+\frac{3\pi}{4}<m+\frac{\pi}{4}<k\pi+\frac{5\pi}{4}$ ，用和角公式拆开： $\sin(k\pi+t)=\pm \sin t,\ t \in (\frac{3\pi}{4},\frac{5\pi}{4})$ ，这个式子的值域确实是 $(-\frac{\sqrt{ 2 }}{2},\ \frac{\sqrt{ 2 }}{2})$ ，证毕
2. 直接 $(\sin m+\cos m)^2=1+\sin 2m<1$ 带走

---

## 第二、三题的前置芝士

为了解决后面两问，我们需要两个关键公式，就是sin和cos等差数列的和：

$$
\textcolor{orange}{
\boldsymbol{
\begin{cases}
\sin a_{1}+\sin(a_{1}+d)+\dots+\sin(a_{1}+(n-1)d)=\frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}}\sin(a_{1}+\frac{n-1}{2}d) \\
\cos a_{1}+\cos(a_{1}+d)+\dots+\cos(a_{1}+(n-1)d)=\frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}}\cos(a_{1}+\frac{n-1}{2}d)
\end{cases}
}
}
$$

这两个公式可以用三角变换技能包证，也可以用**欧拉公式**证。这里我选后者。

[我之前的视频](https://www.bilibili.com/video/BV1yisazLEqX)介绍过可以用欧拉公式 $e^{ix}=\cos x+i\sin x$ 表示sin和cos：

$$
\begin{cases}
\sin x=\frac{e^{ix}-e^{-ix}}{2i} \\
\cos x=\frac{e^{ix}+e^{-ix}}{2}
\end{cases}
$$

思想：先把sin和cos换成e的指数形式，然后利用等比数列求和公式，最后在合适时机把e的指数形式还原回sin和cos

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
\textcolor{orange}{
\boldsymbol{
s=\frac{1}{2i} (\frac{e^{ia_{1}}(e^{ind}-1)}{e^{id}-1}-\frac{e^{-ia_{1}}(e^{-ind}-1)}{e^{-id}-1})
}
}
$$

$e^{ia_{1}}$ 可以直接用欧拉公式还原成sin和cos。但 $\frac{e^{ind}-1}{e^{id}-1},\ \frac{e^{-ind}-1}{e^{-id}-1}$ 咋转化？

---

## 求 $s=\sum_{i=1}^{n} \sin(a_{1}+(i-1)d)$ 续：求 $e^{iX}-1$

我们回望 $\sin x=\frac{e^{ix}-e^{-ix}}{2i}$ 这个式子，发现分子分母同乘 $e^{ix}$ ，就能发现 $e^{i(2x)}-1$ 这种形式。所以 $e^{iX}-1$ 可以变成 $2ie^{i\frac{X}{2}}\frac{e^{i\frac{X}{2}}-e^{i\frac{-X}{2}}}{2i}$ ，这样就能弄出sin了： **$2ie^{i\frac{X}{2}}\sin \frac{X}{2}$** 。分别代入 $X=nd,\ d,\ -nd,\ -d$ 得：

$$
s=\frac{1}{2i}(e^{ia_{1}}\frac{e^{i\frac{nd}{2}}\sin \frac{nd}{2}}{e^{i\frac{d}{2}}\sin \frac{d}{2}}-e^{-ia_{1}}\frac{e^{i\frac{-nd}{2}}\sin \frac{-nd}{2}}{e^{i\frac{-d}{2}}\sin \frac{-d}{2}})
$$

把 $\frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}}$ 提出来，我们发现剩下的几个e的指数刚好互为相反数（ $a_{1}+\frac{nd}{2}-\frac{d}{2}$ 和它的相反数），所以可以再次套用 $\sin x=\frac{e^{ix}-e^{-ix}}{2i}$ ：

$$
s=\frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}} \frac{e^{i(a_{1}+\frac{nd}{2}-\frac{d}{2})}-e^{-i(a_{1}+\frac{nd}{2}-\frac{d}{2})}}{2i}=\frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}}\sin(a_{1}+\frac{n-1}{2}d)
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
&= \frac{\sin \frac{nd}{2}}{\sin \frac{d}{2}} \frac{e^{i(a_{1}+\frac{nd}{2}-\frac{d}{2})}+e^{-i(a_{1}+\frac{nd}{2}-\frac{d}{2})}}{2} \\
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

所以只需证 **$\sin^2 t\cos^2 \frac{1}{2}+(1-\cos^2 t)\sin^2 \frac{1}{2}>0$** 。左边的 $\sin \frac{1}{2},\ \cos \frac{1}{2}>0$ ， $\sin^2 t,\ 1-\cos^2 t \geq 0$ 。又 $t=n+\frac{1}{2}$ 不可能取到 $\pi$ 的倍数，所以 $\sin^2 t,\ 1-\cos^2 t > 0$ 。证毕

---

## （2）$a_{n}=\sin 2n$ ，设前n项和为 $S_{n}$ ，求证： $-\frac{1}{2}\tan \frac{1}{2}<S_{n}<\frac{1}{2\tan \frac{1}{2}}$

### 右边

右边完全类似。欲证原式，只需证 **$\sin^2 t\cos^2 \frac{1}{2}-\cos^2 t\sin^2 \frac{1}{2}<\cos^2 \frac{1}{2}$** 。同理， $\sin^2 t-1$ 和 $-\cos^2 t$ 都严格小于0，但 $sin^2 \frac{1}{2},\ \cos^2 \frac{1}{2}$ 严格大于0。证毕

---

## （3）等差数列 $\{b_{n}\}$ 的公差 $d=2026$ ，前n项和为 $T_{n}$ ， $f(x)=x+\cos x,\ \sum_{i=1}^{2026} f(b_{i})=1013\pi$ ，求 $T_{2026}$

为了方便，我们不妨设 $u=1013$ ，处理含u的式子，最后再代入u的值。

$$
\sum_{i=1}^{2u} f(b_{i})=T_{2u}+\sum_{k=1}^{2u} \cos(b_{1}+2u(k-1))=u\pi
$$

### 法1：我的做法

我们用 $b_{1}$ 和u（公差的一半）表达一切。分别由等差数列求和公式和前面介绍的cos公式得：

$$
\begin{cases}
T_{2u}=2ub_{1}+2u^2(2u-1) \\
\sum_{k=1}^{2u} \cos(b_{1}+2u(k-1))=\frac{\sin 2u^2}{\sin u}\cos(b_{1}+u(2u-1))
\end{cases}
$$

---

## 法1：我的做法（续）

所以

$$
2ub_{1}+2u^2(2u-1)+\frac{\sin 2u^2}{\sin u}\cos(b_{1}+u(2u-1))=u\pi
$$

式子两边除以2u：

$$
b_{1}+u(2u-1)+\frac{\sin 2u^2}{2u\sin u}\cos(b_{1}+u(2u-1))=\frac{\pi}{2}
$$

为什么选择除以2u？因为我们发现除以2u后，cos里和cos外各出现了一个 $t=b_{1}+u(2u-1)$ 。再设 $v=\frac{\sin 2u^2}{2u\sin u}$ ，于是这个式子可以写成 $t+v\cos t=\frac{\pi}{2}$

$|v|=|\frac{\sin 2u^2}{2u\sin u}|<|\frac{1}{2u\sin u}|$ ，估算 $u\ mod\ \pi=0.4479 \pi$ ，故 $\sin u$ 比较接近1，而u是一千多，所以**v非常接近0**。设 $g(t)=t+v\cos t$ ，则 $g'(t)=1-v\sin t$ 。因为v很接近0，所以 $v\sin t$ 肯定比1小，所以g在R上单增。又g的值域也为R，所以上面式子只有一个解。瞪眼法容易得到 $t=\frac{\pi}{2}$ 。

所以 $\sum_{k=1}^{2u} \cos(b_{1}+2u(k-1))=\frac{\sin 2u^2}{\sin u}\cos t=0$ ， $T_{2u}=T_{2026}=1013\pi$

---

## （3）等差数列 $\{b_{n}\}$ 的公差 $d=2026$ ，前n项和为 $T_{n}$ ， $f(x)=x+\cos x,\ \sum_{i=1}^{2026} f(b_{i})=1013\pi$ ，求 $T_{2026}$

### 法2：参考答案的做法

在不知道复变函数的情况下能不能做？能。这就是参考答案的做法。

类似于等差数列求和公式的推导，我们把 $\cos b_{1},\ \cos b_{2026}$ 、 $\cos b_{2},\ \cos b_{2025}$ …放在一起，两个一组来化简。我们知道

$$
\begin{cases}
b_{k}+b_{2u+1-k}=\frac{T_{2u}}{u} \\
b_{2u+1-k}-b_{k}=2u(2u+1-2k)
\end{cases}
$$

所以考虑**和差化积**：

$$
\cos b_{k}+\cos b_{2u+1-k}=2\cos \frac{T_{2u}}{2u}\cos(u(2u+1-2k))
$$

---

## 法2：参考答案的做法（续）

取遍 $k=1,2,\dots,1013$ ，则 $2u+1-2k=2025,2023,\dots,1$ 。原方程变为

$$
\textcolor{orange}{
\boldsymbol{
T_{2u}+(2\cos \frac{T_{2u}}{2u})\sum_{k=1}^{u} \cos(u(2u+1-2k))=u\pi
}
}
$$

参考答案直接设 $x=T_{2u}$ 求导了，但我选择和法1一样，等式两边同时除以2u再换元：

$$
t+\frac{\sum_{k=1}^{u} \cos(u(2u+1-2k))}{u}\cos t=\frac{\pi}{2}
$$

同样设g并求导： $g'(t)=1-\frac{\sum_{k=1}^{u} \cos(u(2u+1-2k))}{u}\sin t=1-Y\sin t$ 。Y的分子的cos项里，至少有一项小于1，所以 $|Y|<1$ ，所以 $g'(t)>0$ 。推出 $t=\frac{\pi}{2}$ 的后续过程和法1类似，这里不再赘述~

### 回顾与发现

法2和法1设的g是同一个函数，这说明法1的 $\frac{\sin 2u^2}{2u\sin u}$ 还原为法2的cos求和，估值难度反而下降了

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了一键三连喔</span>

谢谢观看~
