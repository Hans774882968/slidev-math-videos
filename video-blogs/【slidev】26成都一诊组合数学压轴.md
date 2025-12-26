---
theme: dracula
mdc: true
transition: slide-left
tags:
  - 二项式定理
  - 生成函数
  - 优惠券收集问题
  - 容斥原理
  - 洛必达法则
  - 马尔可夫链
  - 期望的尾概率公式
---

<SlidevPageRedirector />
<MovingWatermark />

留空

---

## 题干

设函数 $f_n(x) = -1 + C_n^1 x + C_n^2 \frac{x^2}{2^2} + C_n^3 \frac{x^3}{3^2} + \cdots + C_n^n \frac{x^n}{n^2}$ ($x \in \mathbb{R},\ n \in \mathbb{N}^*$)

1. 证明：对每个 $n \in \mathbb{N}^*,\ n \geq 2$，存在唯一的 $x_n \in \left[0, \frac{1}{2}\right]$，满足 $f_n(x_n) = 0$ （注：原题干有误，手动改正了）
2. 若 $f_2(x) + 1 \ge a \ln(x+1)$，求 $a$
3. 证明：$f_n'(-1) = 1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n}$，其中 $f_n'(x)$ 表示 $f_n(x)$ 的导数

$$
\textcolor{orange}{
\boldsymbol{
\begin{cases}
\text{导数：端点效应} \\
\text{几何分布、幂级数} \\
\text{优惠券收集问题：期望的尾概率公式、容斥原理、交换求和次序}
\end{cases}
}
}
$$

<div class="h-30 flex justify-center items-center text-5xl text-orange">
这么多知识点，一道好题统统打包带走~
</div>

---

## 第一问

题干：设函数 $f_n(x) = -1 + C_n^1 x + C_n^2 \frac{x^2}{2^2} + C_n^3 \frac{x^3}{3^2} + \cdots + C_n^n \frac{x^n}{n^2}$ ($x \in \mathbb{R},\ n \in \mathbb{N}^*$) 。证明：对每个 $n \geq 2$，存在唯一的 $x_n \in \left[0, \frac{1}{2}\right]$，满足 $f_n(x_n) = 0$ （注：原题干有误，手动改正了）

在高中，证明零点唯一，一般是使用**介值定理**。说明 $f_{n}(0)f_{n}(\frac{1}{2})<0$ 、f闭区间连续且f单增/单减就行。

$f_n(0) = -1 < 0$ ；f显然闭区间连续；f的每个带x的项的系数都是正的，所以f严格单增。万事俱备，只差证明 $f_{n}(\frac{1}{2})>0$

$n=2$ 时， $f_{2}(\frac{1}{2})=\frac{1}{16}>0$ 。 $n \geq 3$ 时，简单放缩一下 $f_{n}(x) > nx-1$ ，所以 $f_{n}(\frac{1}{2})>\frac{n}{2}-1>0$ 。证毕

---

## （2）若 $\frac{x^2}{4}+2x \geq a\ln(x+1)$ ，求a

一道很常规的导数题。

### 考场上不建议无脑分离参数

无脑分离参数能做吗？当然能。设 $g(x)=\frac{\frac{x^2}{4}+2x}{\ln(x+1)}$ ，我们需要求 $(-1,0]$ 上g的最大值和 $[0,+\infty)$ 上g的最小值。GeoGebra画图可知， $(-1,+\infty)$ 上g单增，所以 $(-1,0]$ 上g的最大值和 $[0,+\infty)$ 上g的最小值都是 $g(0)=2$ （注：**洛必达法则** $\lim_{ x \to 0 } \frac{\frac{x^2}{4}+2x}{\ln(x+1)}=\lim_{ x \to 0 } \frac{\frac{x}{2}+2}{\frac{1}{x+1}}=2$ ）所以 $a=2$

但在考场上你很难证明 $g(x)$ 的单调性！

<div class="h-30 flex justify-center items-center text-5xl text-orange">
指数找朋友，对数单身狗
</div>

---

## （2）若 $\frac{x^2}{4}+2x \geq a\ln(x+1)$ ，求a（续）

老老实实分类讨论吧。设 $g(x)=\frac{x^2}{4}+2x-a\ln(x+1)$ ，则 $g'(x)=\frac{x}{2}+2-\frac{a}{x+1}$ 。0对 $\ln(x+1)$ 很特殊，所以我们试求 $g(0)=0,\ g'(0)=2-a$

$g(0)=0$ 意味着，在0的**去心邻域**上都要有 $g(x)>0$ ，或者用高中生熟悉的词“**端点效应**”：如果 $g'(0)>0$ 则g的去心左邻域必须有小于0的区间，如果 $g'(0)<0$ 则g的去心右邻域必须有小于0的区间。所以只能是 $g'(0)=2-a=0 \implies a=2$

做完了？没有！这只是必要条件，还要证明它的充分性。 $g'(0)=0$ ，再求一阶导 $g''(x)=\frac{2}{(x+1)^2}+\frac{1}{2}>0$ ，所以 $g'(x)$ 在 $(-1,0]$ 小于0，在 $[0,+\infty)$ 大于0，所以 $g(x)$ 在 $(-1,0]$ 单减，在 $[0,+\infty)$ 单增。所以 $a=2$ 合题意

---

## （3）证明 $C_{n}^1+C_{n}^2\frac{-1}{2}+\dots+C_{n}^n\frac{(-1)^{n-1}}{n}=1+\frac{1}{2}+\dots+\frac{1}{n}$

把 $(-1)^{n-1}$ 改成 $(-1)^{n+1}$ 会更好看。我们要证的就是 $\sum_{k=1}^{n} C_{n}^k \frac{(-1)^{k+1}}{k}=\sum_{k=1}^{n} \frac{1}{k}$

这里直接揭晓这条组合恒等式的背景了：**优惠券收集问题**（Coupon Collector's Problem）。某抽卡游戏卡池里一共有n张卡，抽到每张卡的概率是相等的，每次抽到的卡会放回卡池，用X表示集满所有卡花费的抽卡次数，求X的数学期望。

### 视角1：马尔可夫链或几何分布

**马尔可夫链**或**几何分布**都能导出。几何分布：每次抽卡的成功率是p，求第一次抽到卡平均需要多少次。设现在已经抽出k张卡，抽卡次数为 $E(k)$ ，则抽出第k+1张新卡的过程是**几何分布**，成功概率是 $1-\frac{k}{n}$ ，所以平均成功次数是 $\frac{n}{n-k}$ ，于是 $E(k+1)=E(k)+\frac{n}{n-k},\ E(0)=0$

累加得： $E(n)=\frac{n}{n}+\frac{n}{n-1}+\dots+\frac{n}{1}=n(\frac{1}{1}+\frac{1}{2}+\dots+\frac{1}{n})$

---

## $\sum_{k=1}^{n} C_{n}^k \frac{(-1)^{k+1}}{k}=\sum_{k=1}^{n} \frac{1}{k}$ 视角2：期望的尾概率公式和容斥原理

**期望的尾概率公式**（Tail Expectation Formula）： $E(X)=\sum_{k=0}^{\infty}P(X \geq k+1)=\sum_{k=1}^{\infty}P(X \geq k)$ 。

### 举例帮助理解

设离散型随机变量X的分布表如下：

| 1   | 2   | 3   | 4   |
| --- | --- | --- | --- |
| a   | b   | c   | d   |

那么 $E(X)=a+2b+3c+4d,\ P(X \geq 0+1)=a+b+c+d,\ P(X \geq 1+1)=b+c+d,\ P(X \geq 2+1)=c+d,\ P(X \geq 3+1)=d,\ P(X \geq 4+1)=0$

---

### 正式推导期望的尾概率公式

上一页的例子启发我们： $P(X=k)=P(X \geq k)-P(X \geq k+1)$ 。左右两边同乘k，并把式子放在一起：

$$
\begin{cases}
P(X=1)=P(X \geq 1)-P(X \geq 2) \\
2P(X=2)=2(P(X \geq 2)-P(X \geq 3)) \\
\dots \\
kP(X=k)=k(P(X \geq k)-P(X \geq k+1)) \\
(k+1)P(X=k+1)=(k+1)(P(X \geq k+1)-P(X \geq k+2))
\end{cases}
$$

左右两边累加即得期望的尾概率公式

---

## $\sum_{k=1}^{n} C_{n}^k \frac{(-1)^{k+1}}{k}=\sum_{k=1}^{n} \frac{1}{k}$ 视角2：期望的尾概率公式和容斥原理（续）

设前k次抽取都没集齐n张卡的概率为 $P(X \geq k+1)$ ，所求即为 $\sum_{k=0}^{\infty} P(X > k)$ 。我们尝试计算它。

设事件 $A_{i}$ 表示抽k次后没抽到第i张卡，则 $P(X>k)=P(A_{1} \cup A_{2} \cup \dots \cup A_{n})$ 可以用**容斥原理**算。假设必定没抽到t张卡，剩下 $n-t$ 张卡可能抽到，那么并集情况数 $C_{n}^t$ ，每种并集情况的概率是 $(1-\frac{t}{n})^k$ ，于是

$$
P(A_{1} \cup A_{2} \cup \dots \cup A_{n})=\sum_{t=1}^{n} (-1)^{t+1}C_{n}^t(1-\frac{t}{n})^k
$$

于是所求为

$$
\sum_{k=0}^{\infty} P(X > k)=\sum_{k=0}^{\infty}\sum_{t=1}^{n} (-1)^{t+1}C_{n}^t(1-\frac{t}{n})^k
$$

---

## $\sum_{k=1}^{n} C_{n}^k \frac{(-1)^{k+1}}{k}=\sum_{k=1}^{n} \frac{1}{k}$ 视角2：期望的尾概率公式和容斥原理（续2）

交换求和次序（莫比乌斯反演、二项式反演等都会出现的技巧）：

$$
\sum_{k=0}^{\infty}\sum_{t=1}^{n} (-1)^{t+1}C_{n}^t(1-\frac{t}{n})^k=\sum_{t=1}^{n} (-1)^{t+1}C_{n}^t \sum_{k=0}^{\infty} (1-\frac{t}{n})^k
$$

对内层套等比数列求和公式 $\sum_{k=0}^{\infty} (1-\frac{t}{n})^k=\frac{1}{1-(1-\frac{t}{n})}=\frac{n}{t}$ 。于是

$$
\sum_{k=0}^{\infty} P(X > k)=n\sum_{t=1}^{n} (-1)^{t+1}C_{n}^t \frac{1}{t}
$$

把右边求和式的n去掉，t换成k，证毕

---

## 附录1：推导几何分布

每次抽卡的成功率是p，求第一次抽到卡平均需要多少次。

用期望的定义算：恰好在第k次抽到卡的概率是 $(1-p)^{k-1}p$ ，所以

$$
E(X)=\sum_{k=1}^{\infty} k(1-p)^{k-1}p=p\sum_{k=1}^{\infty} k(1-p)^{k-1}
$$

不会要错位相减法吧？设 $q=1-p$ 则根据常见**幂级数**：

$$
\sum_{k=1}^{\infty} kq^{k-1}=\frac{1}{(1-q)^2}
$$

所以 $E(X)=\frac{p}{(1-q)^2}=\frac{1}{p}$

---

## 附录2：容斥原理

以3个集合为例：

$$
\begin{aligned}
\mathbb{P}(A \cup B \cup C) =\;& \mathbb{P}(A) + \mathbb{P}(B) + \mathbb{P}(C) \\
&- \mathbb{P}(A \cap B) - \mathbb{P}(A \cap C) - \mathbb{P}(B \cap C) \\
&+ \mathbb{P}(A \cap B \cap C)
\end{aligned}
$$

各加1次后，我们发现， $A \cap B,\ A \cap C,\ B \cap C$ 各多算了1次，所以需要各减去1次。但我们又发现， $A \cap B \cap C$ 被多减了1次，所以需要再加回来。

n个集合的情况不难扩展得到。本期视频还用到一个常见的**容斥原理使用技巧**：把k个集合相交的情况合并在一起算。

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了一键三连喔</span>

谢谢观看~
