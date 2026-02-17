---
theme: dracula
mdc: true
transition: slide-left
tags:
  - 数学模板
---

<SlidevPageRedirector />
<MovingWatermark />
<!-- <AutoSlide :timeList="[0, 0]" /> -->



---

## 题干

<div class="text-3xl">

记 $d(n)$ 为n的正因数个数（约数函数）。求所有正整数n，满足

$$
n-1=(d(n)-1)^2 \cdot d^2(n-1)
$$

来源：漫士沉思录
</div>

<div class="h-30 flex justify-center items-center text-6xl text-orange">
只属于2026的数论题
</div>

---

```python
for n in range(2, 1919810):
    if n - 1 == (number_of_divisors(n) - 1) ** 2 * number_of_divisors(n - 1) ** 2:
        print(n)
```

运行结果：`2, 2026, 893026`

---

令 $n-1=m^2$ ，其中 $m=(d(n)-1) \cdot d(n-1)$ 。通过遍历m来反向确定n，就能把搜索范围扩大到 $10^{10}$ 级别~

如果你成功证明出m只能是奇数（~~留作习题，读者自证不难~~），那么还可以把搜索范围扩大4倍，但意义不大~

```python
result_list = []
for m in range(1, 114514):
    n = m ^ 2 + 1
    val1 = number_of_divisors(n)
    val2 = number_of_divisors(m ^ 2)
    res = (val1 - 1) * val2
    if res == m:
        print(m, n)
        result_list.append(n)
print(result_list)
```

```python
1 2
45 2026
945 893026
```

---

## 证明只有`2, 2026, 893026`这3个解

### 初步思路

回顾： $n-1=m^2,\ m=(d(n)-1) \cdot d(n-1)$ 。所以只需要证明n足够大时能够满足 $d(n)$ 和 $d(n-1)$ 相乘小于 $O(\sqrt{ n })$ 。把命题增强一下，如果能证明n足够大时 $d(n),\ d(n-1)$ 都小于等于 $O(n ^ {\frac{1}{4}})$ ，那就能证明只有这3个解。

---

## 估计 $d(n)$ 上界需要的性质

考虑这道算法题（[洛谷P1221](https://www.luogu.com.cn/problem/P1221)）：求 $[1,n]$ 内因数最多的数，如果因数最多的数有多个，求最小的那个。可以顺便把最大因数个数求出来。 $n \leq 10^{18}$ 。

性质：我们知道，若k的素因子分解为：

$$
k = p_1^{a_1} p_2^{a_2} \cdots p_r^{a_r}
$$

则其因数个数为：

$$
d(k) = (a_1 + 1)(a_2 + 1)\cdots(a_r + 1)
$$

所求的因数最多的数一定满足 $a_{1} \geq a_{2} \geq \dots \geq a_{n}$

证明：假设因数最多的数的素因子分解有 $p_{i} < p_{j}$ 且 $a_{i} < a_{j}$ ，那么构造一个新的数：其他素因子不变，但这两个素因子变成 $p_{i}^{a_{j}}p_{j}^{a_{i}}$ 。因为 $p_{i}^{a_{j}}p_{j}^{a_{i}} < p_{i}^{a_{i}}p_{j}^{a_{j}}$ ，所以构造出了更小但因数个数不变的数，和假设矛盾。

---

## 这条性质意味着什么？

它意味着， $[1,n]$ 内因数最多的数必定由最小的几个质数 $\{2,3,5,7,\dots\}$ 组成，且幂次单减（ $a_{1} \geq a_{2} \geq \dots \geq a_{n}$ ）。

比如 $n=10^{16}$ 时答案为 $9097423832296800 = 2^5*3^5*5^2*7^2*11*13*17*19*23*29*31$ ，确实由最小的几个质数组成，且幂次 $\{5,5,2,2,1,\dots\}$ 确实单减。

注：据此我们可以写出[洛谷P1221](https://www.luogu.com.cn/problem/P1221)的AC代码。用dfs构造就行（见附录1）。

所以我们大胆猜测，n足够大时 $[1,n]$ 内最大的因数个数肯定比n小很多。那具体小多少呢？

论文的图

只要n足够大，那么 $d(n)$ 肯定能小于 $n^a$ ，其中a是任意接近0的常数。

---

```python {*}{maxHeight:'500px'}
from time import perf_counter


def calc_min_relative_error():
    mn_re = 1
    mn_re_val = None
    '''
    限制不要放太小，比如从946开始，发现res还会比m大。从114515开始就不会有这种情况了
    范围233333：
    2075/3344 (150480, 22644230400, 22644230401, 48, 1215, 57105)
    耗时：1.4549s

    范围改成444445：
    2075/3344 (150480, 22644230400, 22644230401, 48, 1215, 57105)
    耗时：4.5397s

    范围改成444445且只考虑奇数：
    182/209 (118503, 14042961009, 14042961010, 64, 243, 15309)
    耗时：2.2994s
    '''
    for m in range(114515, 444445, 2):
        n = m ^ 2 + 1
        val1 = number_of_divisors(n)
        val2 = number_of_divisors(m ^ 2)
        res = (val1 - 1) * val2
        relative_error = 1 * (m - res) / m
        if mn_re > relative_error:
            mn_re = relative_error
            mn_re_val = (m, m ^ 2, n, val1, val2, res)
    return mn_re, mn_re_val


if __name__ == '__main__':
    start_time = perf_counter()
    mn_re, mn_re_val = calc_min_relative_error()
    print(mn_re, mn_re_val)
    end_time = perf_counter()
    print(f'耗时：{end_time - start_time:.4f}s')
```

---

## 附录1：求 $[1,n]$ 内因数最多的数（[洛谷P1221](https://www.luogu.com.cn/problem/P1221)）

> 大佬，请用Python写一个dfs，求出1到n范围内的最大因数个数。遍历`1e2, 1e3, ..., 1e16`分别调用一次。你只需要用到前若干个质数：`2,3,5,7,11,13,17,19,23,29,31,37,41,43,47`

> 大佬，我看不到你成功运行的代码，请把它原样输出

---

```python {*}{maxHeight:'500px'}
from sage.all_cmdline import *
from time import perf_counter
from typing import List

# 1e16 只需要到47
prime_list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151]


def dfs(idx, last_exp, current_val, current_divisors, n, global_max):
    '''
    idx: 当前使用的质数下标
    last_exp: 上一个质数的指数（保证非增）
    current_val: 当前构造的数
    current_divisors: 当前数的因数个数
    n: 上界
    global_max: 用列表包装以实现引用传递，global_max 存储最大因数个数和取得最大因数个数的最小值
    '''
    if current_divisors > global_max[0]:
        global_max[0] = current_divisors
        global_max[1] = current_val

    if idx >= len(prime_list):
        return

    p = prime_list[idx]
    # 如果 p > n // current_val，则无法再乘任何 p^e (e>=1)
    if p > n // current_val:
        return

    # 尝试指数 e 从 1 到 last_exp（含）
    for e in range(1, last_exp + 1):
        p_pow_e = p ** e
        # 检查 current_val * p^e 是否会超过 n
        # 使用逐步乘法避免溢出
        if current_val > n // p_pow_e:
            break
        new_val = current_val * p_pow_e
        new_divisors = current_divisors * (e + 1)
        dfs(idx + 1, e, new_val, new_divisors, n, global_max)


def max_divisors_upto(n):
    if n < 1:
        return 0
    global_max = [1, 1]  # d(1) = 1
    # 2^60 > 1e18
    dfs(0, 60, 1, 1, n, global_max)
    return global_max


def simple_check(result_list: List[List[int]]):
    for _, max_d, max_val in result_list:
        d_count = number_of_divisors(max_val)
        assert d_count == max_d


if __name__ == '__main__':
    result_list = []
    # 跑过一次范围46的，跑出一个解要6s了
    for e in range(1, 37):
        n = 10 ** e
        start_time = perf_counter()
        result = max_divisors_upto(n)
        end_time = perf_counter()
        print(f'n = 1e{e}: max d(k) = {result[0]}, max_val = {result[1]} (time: {end_time - start_time:.4f}s)')
        result_list.append([n, *result])
    print(result_list)

    start_time = perf_counter()
    simple_check(result_list)
    end_time = perf_counter()
    print(f'耗时：{end_time - start_time:.4f}s')
```

---

## 附录2：开发最大因数个数增长趋势网页的提示词

```
大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。我们知道因数函数是积性函数。请帮我写一段JS代码，求1到1919810的每个数的因数个数（记为数组a），然后求出它的前缀max（记为数组`mx`），最后用数组`mx`画一条曲线图。

我希望用一个网页展示这个曲线图。上面介绍因数函数的积性性质。希望这个网页的外观是科技风。

技术栈：React、Tailwind CSS。请输出单个HTML文件。

前端开发最佳实践：

1. 遵循DRY原则，3次及以上重复出现的代码应抽象为函数、子组件等
2. 使用early return、early break、early continue，减少代码嵌套层级
```

初版提示词效果：通义千问的算法对，但前端出问题。智谱清言的前端对，但算法错。qwq

```
大佬，你的算法错了，我把它改对了。接下来请你在我给你的代码的基础上修改：

1. 新增一张卡片，展示最大因数的首次出现位置
2. 进入页面时，给各个卡片新增动画效果

请遵循最小改动原则，不改动与本次需求无关的代码。请输出完整HTML文件。
```

---

后面让智谱清言帮我迭代：

```
大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。下面给你的HTML代码是一个网页：求了1到1919810的每个数的因数个数（记为数组a），也求了它的前缀max（记为数组`mx`），并用数组`mx`画了一条曲线图。现在请你帮我修改这段代码：

1. 进入页面时，给“前缀最大值曲线”“关于因数函数”“数学原理”这3个盒子新增动画效果
2. 把页面下面的“因数函数 d(n) 是数论中的基本积性函数，揭示了整数结构的深层规律”挪到“关于因数函数”的第一个引用块

请遵循最小改动原则，不改动与本次需求无关的代码。请输出完整HTML文件。
```

下面《用Python写dfs构造n范围内的最大因数个数》已经弄出10到1e16范围内的结果了，直接让智谱清言帮我新增图表展示。

```
大佬，我通过Python写dfs求出了10到1e16范围内的最大因数个数的列表：`[[10, 4, 6], [100, 12, 60], [1000, 32, 840], [10000, 64, 9240], [100000, 128, 83160], [1000000, 240, 720720], [10000000, 448, 8648640], [100000000, 768, 91891800], [1000000000, 1344, 931170240], [10000000000, 2304, 6983776800], [100000000000, 4032, 97772875200], [1000000000000, 6720, 963761198400], [10000000000000, 10752, 9316358251200], [100000000000000, 17280, 97821761637600], [1000000000000000, 26880, 866421317361600], [10000000000000000, 41472, 9097423832296800]]`。3个元素分别表示数量级、最大因数个数、取得最大因数个数的最小值。

请帮我修改我下面给你的HTML代码，新增一个折线图，展示这个列表。

请遵循最小改动原则，不改动与本次需求无关的代码。请输出完整HTML文件。
```

---

```
大佬，我通过Python写dfs求出了10到`1e45`范围内的最大因数个数的列表：<省略>。3个元素分别表示数量级、最大因数个数、取得最大因数个数的最小值。

请帮我修改我下面给你的HTML代码，新增一个折线图，展示这个列表。注意：

1. 数量级10的幂不要直接展示，而是展示为`10^x`的形式；取得最大因数个数的最小值用字符串来展示。这样就不需要使用`BigInt`了
2. 当前代码已经包含一个`1e16`范围内的折线图。不要修改它的代码，但可以参考它的代码和文案
3. 请遵循最小改动原则，不改动与本次需求无关的代码。请输出完整HTML文件
```

```
大佬，现在我下面给你的HTML代码已经有：10到`1e16`范围内的最大因数个数的折线图和10到`1e45`范围内的最大因数个数的折线图。我希望你帮我做以下改动：

1. 给这两个已有折线图多绘制一个`10^{n/4}`的折线图作为参考，其中`n`表示数量级。这里直接展示浮点数即可
2. 在这两个图的“取得最大因数个数的最小值”的下面新增一栏“最小值的质因数分解”，字符串格式为`2^3*3^2*5*7^3^13^2`。这里11不是素因子，所以不出现。5的幂是1，所以没展示`5^1`而是简写了。已知素因子都在`prime_list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151]`范围内，写代码时直接用这个素数表就行。这里希望新增一个类`PrimeInfo`，其`toString()`就输出上述质因数分解的字符串；此外还要存一个数组，比如`[3, 2, 1, 3, 0, 2]`就表示`2^3*3^2*5*7^3^13^2`。

请遵循最小改动原则，不改动与本次需求无关的代码。请输出完整HTML文件
```

```
大佬，你的改动很成功。但我发现参考线和具体点的差距太大，所以我希望你帮我修改下面我给你的代码：

1. 把两个折线图的y轴都改为对数坐标轴，x轴不变
2. 参考线的具体点也展示出来。并且如果数量级是4的倍数，那么`10^{n/4}`直接展示为一个整数，不是4的倍数则展示为浮点数
3. 请帮我支持锚点定位：JS读取URL Hash，能够平滑滚动到“因数个数前缀最大值曲线”“最大因数个数增长趋势图”“最大因数个数增长趋势图-极宏观统计”“数学原理”

请遵循最小改动原则，不改动与本次需求无关的代码。请输出完整HTML文件
```

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
