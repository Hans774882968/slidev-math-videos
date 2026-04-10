---
theme: ./hans-green-theme
mdc: true
transition: slide-left
lineNumbers: true
tags:
  - 分类讨论
  - 递推式
---

<SlidevPageRedirector />
<MovingWatermark />
<AutoSlide :timeList="[0, 28 + 5, 12, 40, 86, 39.5, 40.5, 23, 27.5, 42, 50, 29, 36.5, 27, 11, 38.5, 20.5, 6, 18]" />

<div class="bg-gradient-to-br from-[#719cd4] to-[#5984bf] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
  <h1 class="title-stroke !text-[#3468ab] !mb-1 font-black tracking-tighter text-center">
    2026广东一模dp压轴
  </h1>

  <div class="flex flex-col justify-center items-center gap-3">
    <h2 class="flex justify-center items-center font-black text-center !text-[#4a81c8] !text-4xl md:!text-5xl">
      <span class="subtitle-stroke">竟然是</span>
      <div class="mx-6 bg-white px-4 py-1.5 rounded-xl">
        <span class="!text-5xl md:!text-[52px] text-[#4a81c8]">洛谷P1350</span>
      </div>
      <span class="subtitle-stroke">的子问题！</span>
    </h2>
  </div>

  <p class="text-white text-2xl md:text-3xl text-center">
    原题一题两解 + 我自编一题 + 洛谷P1350一题两解
  </p>

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
    OIER/ACMER 狂喜题~
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

甲社区有 $n$ 个女生和 $n$ 个男生，且每个女生都认识所有男生；乙社区有 $n$ 个女生 $g_1, g_2, \cdots, g_n$ 和 $2n-1$ 个男生 $b_1, b_2, \cdots, b_{2n-1}$ ，其中女生 $g_i (i=1,2,\cdots,n)$ 认识男生 $b_j (j=1,2,\cdots,2i-1)$ ，但不认识其他男生。现从甲社区和乙社区分别选出 $m (m=1,2,\cdots,n)$ 队选手参加社区比赛，每队选手均为2人。

**(1)** 若 $n=3, m=1$ ，求所有参赛队伍的参赛选手性别相同的概率；

**(2)** 若要求每队选手必须是男、女组队，且女生认识男生，分别记甲社区和乙社区选出的 $m$ 队的不同选法种数为 $A_n(m)$ 和 $B_n(m)$

- **(i)** 求 $A_n(m)$ ，并证明：当 $2 \leq m \leq n-1$ 时， $A_n(m) = A_{n-1}(m) + (2n-m)A_{n-1}(m-1)$ 三者之间的递推公式，并说明理由；（注：题干可能是命题人赶工出来的，语句不通顺。意思是让我们证明A数组满足这个递推式）

- **(ii)** 若乙社区将选出的 $m$ 个男生和 $m$ 个女生按男、女搭配随机组队，求组队结果满足参赛要求的概率。

<div class="h-18 flex items-center gap-4 text-5xl text-orange">
洛谷P1350是它的升级版~

<MyKeywords :keywords="['分类讨论', '递推式']" color="green" />
</div>

---

## （1）送分

记事件 $A_{1},\ A_{2},\ B_{1},\ B_{2}$ 分别表示甲社区参赛选手都是女生、甲社区参赛选手都是男生、乙社区参赛选手都是女生、乙社区参赛选手都是男生。则

$$
\begin{cases}
P(A_{1})=P(A_{2})=\frac{C_{3}^2}{C_{6}^2}=\frac{1}{5} \\
P(B_{1})=\frac{C_{3}^2}{C_{8}^2}=\frac{3}{28} \\
P(B_{2})=\frac{C_{5}^2}{C_{8}^2}=\frac{5}{14}
\end{cases}
$$

所求事件概率 $P=P(A_{1})P(B_{1})+P(A_{2})P(B_{2})=\frac{13}{140}$

<MyTheorem type="note">

送分题要格外注意**细节和规范**！
</MyTheorem>

---

## （2）证明 $A_n(m) = A_{n-1}(m) + (2n-m)A_{n-1}(m-1)$

### 法1：直接算反而更简单

1. 找m个女生，方案数 $C_{n}^m$ ；找m个男生，方案数 $C_{n}^m$
2. m男m女随机两两组队。不妨男女都从1到m编号，于是我们只需要为1到m号女生各确定一个男生编号。方案数就是排列数 $m!$

综上， $A_{n}(m)=(C_{n}^m)^2 \cdot m! = \frac{(n!)^2}{((n-m)!)^2m!}$ 。最后验证递推式就很简单了：

$$
\begin{align}
rhs&=\frac{((n-1)!)^2}{((n-1-m)!)^2m!}+(2n-m)\frac{((n-1)!)^2}{((n-m)!)^2(m-1)!} \\
&=\frac{((n-1)!)^2}{((n-1-m)!)^2(m-1)!}(\frac{1}{m}+(2n-m)\frac{1}{(n-m)^2}) \\
&=\frac{((n-1)!)^2}{((n-1-m)!)^2(m-1)!} \cdot \frac{n^2}{(n-m)^2m} \\
&=\frac{(n!)^2}{((n-m)!)^2m!}=lhs
\end{align}
$$

---

## （2）法2：求递推式看似多此一举，却能给（3）启发

$A_{n-1}(m)$ 表示少了男生 $b_{n}$ 和女生 $g_{n}$ ，但还是有m队。 $A_{n-1}(m-1)$ 表示少了男生 $b_{n}$ 和女生 $g_{n}$ ，但少了一队。这启发我们：

<MyBlock type="success" title="关键想法">

考虑对男生 $b_{n}$ 和女生 $g_{n}$ 是否参加社区比赛**分类讨论**，共`2*2=4`种情况
</MyBlock>

1. $b_{n},\ g_{n}$ 都不参加。那么其他2n-2人已经组成m队，方案数 $A_{n-1}(m)$
2. $b_{n}$ 参加， $g_{n}$ 不参加。首先其他2n-2人组成m-1队（ $A_{n-1}(m-1)$ ）。此时女生还有n-m+1人没被选中，但记得排除 $g_{n}$ ，于是 $b_{n}$ 可挑选组队的女生数为 $n-m$ 。总方案数 $(n-m)A_{n-1}(m-1)$
3. $g_{n}$ 参加， $b_{n}$ 不参加。和“2”类似，不赘述。
4. $b_{n},\ g_{n}$ 都参加。首先其他2n-2人组成m-1队（ $A_{n-1}(m-1)$ ）。接下来是易错点：**不要默认 $b_{n},\ g_{n}$ 在同一队**。实际上 $g_{n}$ 可以选择**拆散**一个组好的队伍，从而和其他参赛男生组队。总方案数 $mA_{n-1}(m-1)$

综上，得递推式 $A_n(m) = A_{n-1}(m) + (2(n-m)+m)A_{n-1}(m-1) = A_{n-1}(m) + (2n-m)A_{n-1}(m-1)$

---

## （3）直接写出通项公式，碰壁

随机组队的总方案数是 $C_{n}^mC_{2n-1}^m m!$ ，所求概率 $P=\frac{B_{n}(m)}{C_{n}^mC_{2n-1}^m m!}$ 。所以我们需要求 $B_{n}(m)$ 的通项公式。

> [!note] 想法
> 先试试直接用组合意义写出**通项公式**。碰壁了就考虑**子问题**的性质，先求递推式再求通项！

<div class="flex justify-center">
<img src="./assets/260327/想法1.png" class="w-160" />
</div>

考虑枚举被选中的女生编号 $g_{i_{1}},\ g_{i_{2}},\ \dots,\ g_{i_{m}}$ （共 $C_{n}^m$ 种情况）。不失一般性，约定 $1 \leq g_{i_{1}} < g_{i_{2}} < \dots < g_{i_{m}} \leq n$ 。考虑第k个被选中的女生 $g_{i_{k}}$ ，则她可选的男生数为 $(2i_{k}-1)-(k-1)=2i_{k}-k$ 。故：

$$
B_{n}(m)=\sum_{1 \leq g_{i_{1}} < g_{i_{2}} < \dots < g_{i_{m}} \leq n} \prod_{k=1}^m (2i_{k}-k)
$$

化简这条式子似乎不容易，我们还是考虑从B的递推式入手吧！

---

## （3）意外发现B和A是完全一样的数组！

模仿上一问的法2来**分类讨论**。但因为只有 $g_{n}$ 认识 $b_{2n-2},\ b_{2n-1}$ ，所以我们只按 $g_{n}$ 是否参赛来分类：

1.  $g_{n}$ 不参赛。 $B_{n-1}(m)$
2.  $g_{n}$ 参赛。首先其他3n-3人组成m-1队（ $B_{n-1}(m-1)$ ）。这里 $g_{n}$ 不能拆散组好的队伍，所以需要在没被选中的 $(2n-1)-(m-1)=2n-m$ 位男生中选一位组队。总方案数 $(2n-m)B_{n-1}(m-1)$

综上，得到递推式

$$
B_n(m) = B_{n-1}(m) + (2n-m)B_{n-1}(m-1)
$$

<MyTheorem type="note" title="诶，B的递推式刚好和A一样！">

$$
A_n(m) = A_{n-1}(m) + (2n-m)A_{n-1}(m-1)
$$
</MyTheorem>

---

## （3）收尾

不要高兴得太早！要记得检查边界情况！ $A_{n}(1)=n^2,\ B_{n}(1)=1+3+\dots+(2n-1)=n^2=A_{n}(1)$ ，确实一样，放心了！

<MyTheorem type="note">

如果你打算法竞赛，你就会知道 $n \geq 1,\ m=0$ 可以直接约定A和B数组都为1，于是不需要验算 $B_{n}(1)$
</MyTheorem>

所以所求概率

$$
P=\frac{B_{n}(m)}{C_{n}^mC_{2n-1}^m m!}=\frac{(C_{n}^m)^2 \cdot m!}{C_{n}^mC_{2n-1}^m m!}=\frac{C_{n}^m}{C_{2n-1}^m}=\frac{n!(2n-1-m)!}{(n-m)!(2n-1)!}
$$

---

## （3）回顾通项公式

<MyTheorem type="note" title="之前求出">

$$
B_{n}(m)=\sum_{1 \leq g_{i_{1}} < g_{i_{2}} < \dots < g_{i_{m}} \leq n} \prod_{k=1}^m (2i_{k}-k)
$$
</MyTheorem>

而刚刚我们也领悟了 $B_{n}(m)$ 的组合意义。于是我们不难想到如何拆分这个式子：把这 $C_{n}^m$ 项分为 $i_{m} < n$ 和 $i_{m} = n$ 两类。

1. $i_{m} < n$ ：就是 $B_{n-1}(m)$
2. $i_{m} = n$ ：把 $2i_{m}-m=2n-m$ 这个公因子提出来，就得到 $(2n-m)B_{n-1}(m-1)$ （懒得把式子写完整了）

~~如果你注意力惊人，想到**通项公式**转**递推式**，就能在不知道组合意义的情况下解决这题~~

---

## 进一步深挖： $A_{n}(m)$ 究竟是什么？

在OEIS输入`1, 64, 1568, 18816, 117600, 376320, 564480, 322560, 40320`这个数列，就得到以下组合意义：

1. T(n,k) is the number of increasing subsequences of length n-k over all permutations of `[n]`
2. T(n,k) is also the number of ways to place k nonattacking rooks on an n X n chessboard

1：选择n-k个数的方案数 $C_{n}^{n-k}$ ，为n-k个数选n-k个位置的方案数 $C_{n}^{n-k}$ 。剩下k个数可以任意排，方案数 $k!$

2：引入**模型1**：把m个车放到 $n \times n$ 的棋盘上，要求**任意两个车不能在同一行，也不能在同一列**，求方案数。不难发现，前面第二问等价于模型1：有车的行可以认为是被选中的男生，有车的列可以认为是被选中的女生。

### 视角1：通项公式

1. 选择m行和m列放车。方案数 $C_{n}^m \cdot C_{n}^m$
2. 问题转化为同一问题的特殊情况：求m个车放到 $m \times m$ 的棋盘上的方案数。第一行有m种放法，第二行有m-1种，……，第m行有1种。总方案数 $m!$

综上，总方案数 $(C_{n}^m)^2 \cdot m!$

---

## 视角2：前面第二问的递推式 $A_n(m) = A_{n-1}(m) + (2n-m)A_{n-1}(m-1)$

设`dp[i,j]`表示在`i*i`的棋盘上放j个车的方案数。边界条件：答案为`dp[n,m]`，`dp[i,0]=1`。模仿前面第二问的法2来**分类讨论**：

1. `dp[i-1,j]`表示j个车都放在`(i-1)*(i-1)`的棋盘上
2. 第i行放一个车，但第i列不放车（对应前面 $b_{i}$ 参赛 $g_{i}$ 不参赛），则 $(i,i)$ 位置不能放车。方案数 $((i-1)-(j-1))dp[i-1,j-1]=(i-j)dp[i-1,j-1]$
3. 第i列放一个车，但第i行不放车。同上，方案数 $(i-j)dp[i-1,j-1]$
4. 第i行第i列都放车。类似地，拆散组队的操作，对应这里挪之前放好的棋子的动作。设被挪动的棋子是 $(x,y)\ (1 \leq x,y \leq i-1)$ ，则 $g_{i}$ 和 $b_{x}$ 组队， $b_{i}$ 和 $g_{y}$ 组队，对应第j个棋子被放到 $(i,y)$ ，被挪动的棋子被放到 $(x,i)$ 。挪棋子的方案数j-1，加上第j个棋子就放在 $(i,i)$ 的1个方案，得 $jdp[i-1,j-1]$

综上，成功得到和第二问一样的递推式 **$dp[i,j]=dp[i-1,j]+(2i-j)dp[i-1,j-1]$**

---

## 视角3：另一种动态规划（普适性更强）

设`dp[i,j]`表示棋盘前`i`行上放j个车的方案数，则：

1. 边界条件：答案为`dp[n,m]`，`dp[i,0]=1`
2. 仍然按第j个车放的位置**分类讨论**：
	1. `dp[i-1,j]`表示j个车都放在前`i-1`行，第i行没有车
	2. `dp[i-1,j-1]`表示第j个车要放在第i行。第i行有n个格子，但已经有`j-1`个被占用，所以有`n-j+1`个格子可选


<MyBlock type="success" title="所以状态转移方程">

$$
dp[i,j]=dp[i-1,j]+(n-j+1)dp[i-1,j-1]
$$
</MyBlock>

---

## 前面第三问等价于特定形状的棋盘放车的方案数

类似地，前面的第三问等价于这个问题：有以下形状的棋盘

```
x       1列
xxx     3列
...
xxxxxxx 2n-1列
```

把m个车放到这个棋盘上，要求**任意两个车不能在同一行，也不能在同一列**，求方案数。

模仿刚刚说的**视角3**，设`dp[i,j]`表示棋盘前`i`行放j个车的方案数，则：

1. `dp[i-1,j]`表示j个车都放在前`i-1`行，第i行没有车
2. `dp[i-1,j-1]`表示第j个车要放在第i行。第i行有 $2i-1$ 个格子，但已经有`j-1`个被占用，所以有 $(2i-1)-(j-1)=2i-j$ 个格子可选

所以状态转移方程：

$$
dp[i,j]=dp[i-1,j]+(2i-j)dp[i-1,j-1]
$$

---

## 扩展2：我自编的一道水题

我们发现视角3介绍的dp对于**任意形状的棋盘**都适用。所以不妨来做做下面这题：棋盘有2n行，第2k+1、2k+2行（k从0到n-1）的格子数是3k+2。试求放m个车的方案数

```python {*}{maxHeight:'360px'}
def compute_dp(n, m_max=None):
    """
    计算升级版棋盘的dp[i][j]
    dp[i][j] = 前i行放置j个非进攻型车的方案数
    第2k+1行和第2k+2行各有3k+2个可放置列
    """
    rows = 2 * n
    if m_max is None:
        m_max = rows
    dp = [[0] * (m_max + 1) for _ in range(rows + 1)]
    for i in range(rows + 1):
        dp[i][0] = 1

    def get_width(row):
        """第row行的可放置列数（row从1开始）"""
        k = (row - 1) // 2
        return 3 * k + 2

    for i in range(1, rows + 1):
        width_i = get_width(i)
        for j in range(1, min(i, m_max) + 1):
            # 递推式：
            # 1. 第i行不放车：dp[i-1][j]
            # 2. 第i行放车：(width_i - (j-1)) * dp[i-1][j-1]
            if width_i >= j:
                dp[i][j] = dp[i - 1][j] + (width_i - j + 1) * dp[i - 1][j - 1]
            else:
                dp[i][j] = dp[i - 1][j]
    return dp
```

---

## 扩展3：洛谷P1350-题干

<div class="flex items-center">

有这样一个网格棋盘，$a,b,c,d$ 表示对应边长度，也就是对应的格子数：

<div class="bg-white">
<img src="./assets/260327/洛谷1350-1.png" class="w-75" />
</div>
</div>

<div class="flex items-center">

当 $a=b=c=d=2$ 时，对应这样一个棋盘：

<div class="bg-white">
<img src="./assets/260327/洛谷1350-2.png" class="w-75" />
</div>
</div>

要在这个棋盘上放 $k$ 个相互不攻击的车，也就是这 $k$ 个车没有两个车在同一行，也没有两个车在同一列，问有多少种方案。

输入五个非负整数 $0\leq a,b,c,d,k\leq 10^3$ ，且至少有一种可行方案。答案要 $\bmod$ $10^5+3$

---

## 扩展3：洛谷P1350-法1：扩展模型1求通项公式

首先，我们把模型1扩展到`n*m`棋盘的情况（**模型2**）：把k个车放到 $n \times m$ 的棋盘上，要求**任意两个车不能在同一行，也不能在同一列**，求方案数

同模型1，方案数是 $C_{n}^k \cdot C_{m}^k \cdot k!$ 。 $C_{n}^k \cdot C_{m}^k$ 表示把问题转化为求k个车放到 $k \times k$ 的棋盘上的方案数

<div class="flex items-center">

回顾棋盘形状：

<div class="bg-white">
<img src="./assets/260327/洛谷1350-1.png" class="w-75" />
</div>
</div>

<MyBlock type="success" title="棋盘可以看成由两个矩形组成，所以我们可以有两个想法">

1. 先在`c*d`的矩形上放车，再在`a*(b+d)`的矩形上放车
2. 先在`a*b`的矩形上放车，再在`(a+c)*d`的矩形上放车
</MyBlock>

---

## 洛谷P1350-法1（续）

1，设在`c*d`的矩形上放了i个车（ $0 \leq i \leq k$ ）。因为`a*(b+d)`的矩形有i行被占用了，所以相当于矩形变成了`a*(b+d-i)`。套模型2的公式得总方案数：

$$
\sum_{i=0}^{k} C_{c}^iC_{d}^ii! \cdot C_{a}^{k-i}C_{b+d-i}^{k-i}(k-i)!
$$

2，设在`a*b`的矩形上放了i个车（ $0 \leq i \leq k$ ）。因为`(a+c)*d`的矩形有i列被占用了，所以相当于矩形变成了`(a+c-i)*d`。套模型2的公式得总方案数：

$$
\sum_{i=0}^{k} C_{a}^iC_{b}^ii! \cdot C_{d}^{k-i}C_{a+c-i}^{k-i}(k-i)!
$$

---

## 洛谷P1350-法1-代码

```python {*}{maxHeight:'422px'}
MOD = 100003
MAX_N = 2005

C = [[0] * MAX_N for _ in range(MAX_N)]
fact = [1] * MAX_N


def precompute():
    for i in range(MAX_N):
        C[i][0] = 1
        for j in range(1, i + 1):
            C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD
    for i in range(1, MAX_N):
        fact[i] = (fact[i - 1] * i) % MOD


def solve_expr1(a, b, c, d, k):
    """
    计算表达式 1:
    sum_{i=0}^{k} C(c, i) * C(d, i) * i! * C(a, k-i) * C(b+d-i, k-i) * (k-i)!
    """
    ans = 0
    for i in range(k + 1):
        term = C[c][i] * C[d][i] % MOD * fact[i] % MOD * C[a][k - i] % MOD
        n2 = b + d - i
        m2 = k - i
        if n2 >= 0:
            term = (term * C[n2][m2]) % MOD
        else:
            term = 0
        term = (term * fact[k - i]) % MOD
        ans = (ans + term) % MOD
    return ans


if __name__ == "__main__":
    precompute()
    a, b, c, d, k = list(map(int, input().split()))
    ans = solve_expr1(a, b, c, d, k)
    print(ans)
```

---

## 洛谷P1350-法2-动态规划

前面介绍的视角3的dp适用于任何形状的棋盘，那自然也适用于这题。设`dp[i,j]`表示棋盘前`i`行上放j个车的方案数，则：

$$
dp[i,j]=dp[i-1,j]+K \cdot dp[i-1,j-1]
$$

其中K是一个跟行号有关的函数 $K(i)$ ：`K(i)=(a - j + 1) if i <= b else (a + c - j + 1)`

另外，记得**约束**j（枚举放置的车的数目）的范围：`j_lim = min(k, a) if i <= b else min(k, a + c)`

```python
MOD = 100003
MAX_N = 2005
a, b, c, d, k = list(map(int, input().split()))
dp = [[0] * MAX_N for _ in range(MAX_N)]
dp[0][0] = 1
for i in range(1, b + d + 1):
    j_lim = min(k, a) if i <= b else min(k, a + c)
    for j in range(j_lim + 1):
        coeff = (a - j + 1) if i <= b else (a + c - j + 1)
        dp[i][j] = (dp[i - 1][j] + (dp[i - 1][j - 1] if j > 0 else 0) * coeff % MOD) % MOD
print(dp[b + d][k])
```

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
