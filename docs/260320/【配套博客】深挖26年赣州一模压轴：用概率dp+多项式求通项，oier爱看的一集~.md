[TOC]

# 深挖26年赣州一模压轴：用概率dp+多项式求通项，oier爱看的一集~

## 引言

[本文视频版传送门]()

视频封面：

![](../../media/260320/260320-封面.png)

现有一种不断分裂的M细胞，在每个分裂周期中，一个M细胞以 $\frac{2}{3}$ 的概率分化成一个新的M细胞，以 $\frac{1}{3}$ 的概率分裂成两个新的M细胞，分裂后原来的M细胞消失，新的M细胞在下一个分裂周期里会继续分裂。设初始状态下有1个M细胞， $n$ 个分裂周期后，M细胞的数目为 $X_n$

1. 求 $X_2$ 的分布列和数学期望
2. 求概率 $P(X_n = 2)$
3. 证明： $P(X_n = 3) < \frac{6}{5}(\frac{2}{3})^{n-1}$

本文 52pojie： 

本文 博客园： 

本文 juejin： 

**作者：[hans774882968](https://blog.csdn.net/hans774882968)以及[hans774882968](https://juejin.cn/user/1464964842528888)以及[hans774882968](https://www.52pojie.cn/home.php?mod=space&uid=1906177)以及[hans77](https://www.cnblogs.com/hans77)**

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

## （2）求概率 $P(X_n = 2)$ - 法1：不用递推式

不懂**概率dp+全概率公式**（高中通常称为**马尔可夫链**）能做吗？能的

$X_n = 2$ 表示n个细胞周期中，某个周期有1个M细胞分裂成两个，其他周期都分化成1个。故枚举所有可能的一分为二的时刻 $k=1 \dots n$ ：

1. 前k-1个周期，只有一个细胞且都分化为1个，概率 $(\frac{2}{3})^{k-1}$
2. 第k个周期，细胞一分为二，概率 $\frac{1}{3}$
3. 后n-k个周期，两个细胞每次都分化为1个，概率 $(\frac{2}{3})^{2(n-k)}$

所以总概率

$$
\begin{align}
P(X_n = 2)&=\sum_{k=1}^{n} (\frac{2}{3})^{k-1}\frac{1}{3}(\frac{2}{3})^{2(n-k)}=\sum_{k=1}^{n} \frac{1}{3}(\frac{2}{3})^{2n-k-1} \\
&=\frac{1}{3}(\frac{2}{3})^{2n-1}\sum_{k=1}^{n}(\frac{3}{2})^{k}=(\frac{2}{3})^{2n-1}((\frac{3}{2})^n-1)=(\frac{2}{3})^{n-1}(1-(\frac{2}{3})^n)
\end{align}
$$

## （3）证明： $P(X_n = 3) < \frac{6}{5}(\frac{2}{3})^{n-1}$

> [!note] 想法
> 如果能求出**通项公式**，这题就很好解决。但这似乎不简单！那就考虑**子问题**的性质，求递推式吧！

<div class="flex justify-center">
<img src="./assets/260320/想法1.png" class="w-160" />
</div>

记 $P(X_{n}=m)$ 为 $dp[m,n]$ 。设第n-1个周期后有k个细胞，则：

- 第n个周期需要在k个细胞中选m-k个来一分为二，剩下 $2k-m$ 个细胞分化为一个，方案数 $C_{k}^{m-k}$ 。而为了能做这个选取动作，需要 $k \geq m-k \implies k \geq \lceil \frac{m}{2} \rceil$
- 边界情况：0个周期后只有1个细胞，故 $dp[m,0]=[m==1]$ ，即n=0时值为1，其他情况值为0

于是由**全概率公式**：

$$
\begin{cases}
dp[m,0]=[m == 1] \\
dp[m,n]=\sum_{k=\lceil m/2 \rceil}^{m} dp[k,n-1] \cdot C(k, m-k) \cdot \left(\frac{1}{3}\right)^{m-k} \cdot \left(\frac{2}{3}\right)^{2k-m}
\end{cases}
$$
