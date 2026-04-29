---
theme: ./hans-green-theme
mdc: true
transition: slide-left
lineNumbers: true
tags:
  - 质因数分解
  - 正难则反
---

<SlidevPageRedirector />
<MovingWatermark />
<!-- <AutoSlide :timeList="[0, 0]" /> -->

<div class="bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
  <h1 class="title-stroke !text-[#059669] !mb-1 font-black tracking-tighter text-center">
    2026汕头高三期末T14
  </h1>

  <div class="flex flex-col justify-center items-center gap-3 mb-2">
    <h2 class="flex justify-center items-center font-black text-center !text-[#059669] !text-2xl md:!text-3xl">
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">质因数分解</span>
      </div>
      <span class="subtitle-stroke">+</span>
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">正难则反</span>
      </div>
      <span class="subtitle-stroke">+</span>
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">dfs</span>
      </div>
    </h2>
  </div>

  <div class="bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif">

将 $1$ 到 $37$ 排成数列 $\{a_n\}$ ，已知

$a_1 = 37$ ，且前 $n$ 项和 $S_n$

总能被下一项 $a_{n+1}$ 整除。求 $a_{37}$
  </div>

  <p class="text-[#059669] text-2xl md:text-3xl mt-6 text-center">
    做一个网页，搜索符合条件的所有数列~
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

<MyBlock type="info" title="题干">

将 $1$ 到 $37$ 排成数列 $\{a_n\}$ ，已知 $a_1 = 37$ ，且前 $n$ 项和 $S_n$ 总能被下一项 $a_{n+1}$ 整除（即 $S_n \pmod{a_{n+1}} = 0$ ）。求 $a_{37}$
</MyBlock>

<div class="h-26 flex justify-center items-center gap-1 text-5xl text-orange">
小清新的脑筋急转弯~

<MyKeywords
  :keywords="['质因数分解', '正难则反', 'dfs']"
  color="green"
  keywordTagCls="!text-xl !px-3 !py-1 !rounded-xl"
/>
</div>

---

## 题解

<MyBlock type="success" title="朴素的想法">

求出数列的前几项，看看有什么规律
</MyBlock>

$a_{1} = 37$ ， $S_{1} \pmod{a_{2}} = 0$ 。37是素数，所以 $a_{2} = 1\text{ or }37$ ，但 $a_{1}=37$ ，所以 $a_{2}=1$

$S_{2} \pmod{a_{3}} = 38 \pmod{a_{3}} = 0$ 。38的质因数分解为 $2 \times 19$ ，并且1已经被占用，所以 $a_{3}=2\text{ or }19$

我们在这卡住了！因为我们接下来需要分别假设 $a_{3}=2$ 和 $a_{3}=19$ ，后续求出的 $a_{4},\  a_{5},\ \dots$ 的分支只会越来越多。

<div class="h-30 flex justify-center items-center text-6xl text-orange">
指望这样找到规律似乎很难！
</div>

---

## 怎么办呢？

<MyBlock type="success" title="正着推导很困难，我们就">

直接看最后一项！**正难则反**
</MyBlock>

根据题意， $S_{36}$ 必须能被 $a_{37}$ 整除（令 $n+1=37$ ）。 $S_{36}$ 不是固定的，但 $S_{37} = \frac{(1+37) \times 37}{2} = 19 \times 37 = 703$ 是定值，所以

$$
S_{36} = S_{37} - a_{37} = 703 - a_{37} \implies a_{37} \mid (703 - a_{37}) \implies a_{37} \mid (19 \times 37)
$$

19、37都是素数，所以 $a_{37}=1\text{ or }19\text{ or }37$ 。但之前已经推出 $a_{1}=37,\ a_{2}=1$ ，所以 $a_{37}=19$

---

## 总结

<MyBlock type="success" title="题干中值得被反复观察、把玩的信息">

1. 数列 $\{a_n\}$ 是 $1$ 到 $37$ 的**排列**
2. $S_n$ 总能被下一项 $a_{n+1}$ 整除
	1. 观察开头：令 $n=1$
	2. 观察结尾：令 $n=36$
</MyBlock>

---

## 扩展

<MyBlock type="info" title="回顾题干">

将 $1$ 到 $37$ 排成数列 $\{a_n\}$ ，已知 $a_1 = 37$ ，且前 $n$ 项和 $S_n$ 总能被下一项 $a_{n+1}$ 整除。求 $a_{37}$
</MyBlock>

下面我们考虑怎么对这题进行扩展。首先，37是素数，不难想到：数列的项数n应为素数，设为p。

接下来回顾之前的解题过程，我们能够确定的是 $a_{2} = 1$ ， $S_{p}=p*\frac{p+1}{2}$ ，以及 $a_{p} \mid \left( p \times \frac{p+1}{2} \right)$ 。于是我们不难想到：限制 $\frac{p+1}{2}$ 为素数，必然能让 $a_{p}$ 固定为 $\frac{p+1}{2}$

这表明“ $\frac{p+1}{2}$ 也为素数”是 $a_{p}=\frac{p+1}{2}$ 的充分条件。但它是必要条件吗？

---

## 我们不妨写代码来寻找符合条件的数列

<MyBlock type="success" title="回到最开始说的朴素的想法">

假设数列的前 $idx$ 项（`a[1~idx]`）均已求出。枚举所有还没用过的数`u`，只要符合题意，就令 $a[idx+1]$ 为`u`。于是，假设被增强为：数列的前 $idx+1$ 项均已求出——这是一个递归的过程

`a[1~n]`都求出后，就得到了一个符合条件的数列。这样的数列可能很多
</MyBlock>

这个非常朴素的想法，就是所谓的**dfs**（深度优先搜索）。

```cpp {*}{maxHeight:'226px'}
int P;
__int64 current_sum;         // 记录当前前缀和 S[idx]
vector<int> perm;            // 当前构造的序列
vector<bool> used;           // 标记数字是否已使用
__int64 solution_count = 0;  // 合法排列计数

void dfs(int idx) {
  if (idx == P) {
    solution_count++;
    // 输出答案
    return;
  }

  for (int cand = 1; cand <= P; ++cand) {
    if (used[cand]) continue;
    if (current_sum % cand != 0) continue;
    used[cand] = true;
    perm[idx] = cand;
    current_sum += cand;
    dfs(idx + 1);
    current_sum -= cand;
    used[cand] = false;
  }
}
```

---

```cpp {*}{maxHeight:'420px'}
#include <iostream>
#include <vector>
#include <cmath>
#include <chrono>
// Copyright (c) 2026 hans7

using namespace std;

bool isPrime(int n) {
  if (n < 2) return false;
  for (int i = 2; i <= static_cast<int>(sqrt(n)); ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

int P;
__int64 current_sum;         // 记录当前前缀和 S[idx]
vector<int> perm;            // 当前构造的序列
vector<bool> used;           // 标记数字是否已使用
__int64 solution_count = 0;  // 合法排列计数

void dfs(int idx) {
  if (idx == P) {
    solution_count++;
    cout << "【解 " << solution_count << "】: ";
    for (int i = 0; i < P; ++i) {
      cout << perm[i] << (i == P - 1 ? "" : ", ");
    }
    cout << "\n";
    return;
  }

  for (int cand = 1; cand <= P; ++cand) {
    if (used[cand]) continue;
    if (current_sum % cand != 0) continue;
    used[cand] = true;
    perm[idx] = cand;
    current_sum += cand;

    dfs(idx + 1);

    current_sum -= cand;
    used[cand] = false;
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  cout << "请输入素数 p: " << flush;
  if (!(cin >> P)) return 0;

  if (!isPrime(P)) {
    cerr << "❌ 错误: " << P << " 不是素数。\n";
    return 114514;
  }
  if ((P + 1) % 2 != 0) {
    cerr << "❌ 错误: (p+1)/2 不是整数（p 必须为奇素数）。\n";
    return 114514;
  }

  if (P > 23) {
    cout << "⚠️  警告: P > 23 时搜索树极深。DFS "
            "剪枝可大幅加速，但仍可能耗时较长。\n";
  }

  perm.assign(P, 0);
  used.assign(P + 1, false);

  perm[0] = P;
  used[P] = true;
  current_sum = P;

  auto start = chrono::high_resolution_clock::now();
  cout << "🔍 开始搜索合法排列...\n";

  dfs(1);

  auto end = chrono::high_resolution_clock::now();
  chrono::duration<double> elapsed = end - start;

  cout << "\n✅ 搜索完成。\n";
  cout << "📊 共找到 " << solution_count << " 个合法排列。\n";
  cout << "⏱️  耗时: " << elapsed.count() << " 秒\n";

  return 0;
}
```

---

## dfs剪枝优化

考虑dfs中可行的`cand`需要满足的条件：

1. `1 <= cand <= P && used[cand] = false`
2. `cand`是`current_sum`的因数

考虑从“2”入手进行优化。我们预处理出1到 $P*\frac{P+1}{2}$ 的每个数的所有因数，并把大于P的去掉，形成一张因数表`vector<vector<int>> factors`，然后dfs枚举的时候可以直接遍历这张表，不再需要遍历1到P

|        | 原版代码       | 剪枝版代码      |
| ------ | ---------- | ---------- |
| `p=19` | 0.023874 秒 | 0.010446 秒 |
| `p=23` | 0.873968 秒 | 0.342937 秒 |
| `p=29` | 138.214 秒  | 45.8159 秒  |

---

优化后的完整代码：

```cpp {*}{maxHeight:'402px'}
#include <iostream>
#include <vector>
#include <cmath>
#include <chrono>
#include <algorithm>
// Copyright (c) 2026 hans7

using namespace std;

bool isPrime(int n) {
  if (n < 2) return false;
  for (int i = 2; i <= static_cast<int>(sqrt(n)); ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

vector<vector<int>> factors;

void precompute_factors(int max_sum, int P) {
  factors.resize(max_sum + 1);
  for (int s = 1; s <= max_sum; ++s) {
    for (int d = 1; d * d <= s; ++d) {
      if (s % d == 0) {
        if (d <= P) factors[s].push_back(d);
        int other = s / d;
        if (other != d && other <= P) factors[s].push_back(other);
      }
    }
    // 升序排序在此没必要，但排序后调试更方便
    sort(factors[s].begin(), factors[s].end());
  }
}

int P;
__int64 current_sum;         // 记录当前前缀和 S[idx]
vector<int> perm;            // 当前构造的序列
vector<bool> used;           // 标记数字是否已使用
__int64 solution_count = 0;  // 合法排列计数

void dfs(int idx) {
  if (idx == P) {
    solution_count++;
    cout << "【解 " << solution_count << "】: ";
    for (int i = 0; i < P; ++i) {
      cout << perm[i] << (i == P - 1 ? "" : ", ");
    }
    cout << "\n";
    return;
  }

  for (int cand : factors[current_sum]) {
    if (used[cand]) continue;
    used[cand] = true;
    perm[idx] = cand;
    current_sum += cand;

    dfs(idx + 1);

    current_sum -= cand;
    used[cand] = false;
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  cout << "请输入素数 p: " << flush;
  if (!(cin >> P)) return 0;

  if (!isPrime(P)) {
    cerr << "❌ 错误: " << P << " 不是素数。\n";
    return 114514;
  }
  if ((P + 1) % 2 != 0) {
    cerr << "❌ 错误: (p+1)/2 不是整数（p 必须为奇素数）。\n";
    return 114514;
  }

  if (P > 23) {
    cout << "⚠️  警告: P > 23 时搜索树极深。DFS "
            "剪枝可大幅加速，但仍可能耗时较长。\n";
  }

  const int max_sum = P * (P + 1) / 2;
  cout << "📦 预处理因数表 [1, " << max_sum << "] ...\n";
  auto pre_start = chrono::high_resolution_clock::now();

  precompute_factors(max_sum, P);

  auto pre_end = chrono::high_resolution_clock::now();
  chrono::duration<double> pre_elapsed = pre_end - pre_start;
  cout << "✅ 预处理完成，耗时: " << pre_elapsed.count() << " 秒\n\n";

  perm.assign(P, 0);
  used.assign(P + 1, false);

  perm[0] = P;
  used[P] = true;
  current_sum = P;

  auto start = chrono::high_resolution_clock::now();
  cout << "🔍 开始搜索合法排列...\n";

  dfs(1);

  auto end = chrono::high_resolution_clock::now();
  chrono::duration<double> elapsed = end - start;

  cout << "\n✅ 搜索完成。\n";
  cout << "📊 共找到 " << solution_count << " 个合法排列。\n";
  cout << "⏱️  搜索耗时: " << elapsed.count() << " 秒\n";
  cout << "📈 总耗时(含预处理): " << (pre_elapsed + elapsed).count() << " 秒\n";

  return 0;
}
```

---

p为素数+ $\frac{p+1}{2}$ 为正整数等价于p为奇素数。

结论：“ $\frac{p+1}{2}$ 也为素数”是 $a_{p}=\frac{p+1}{2}$ 的充分不必要条件。但“p为奇素数”是 $a_{p}=\frac{p+1}{2}$ 的必要不充分条件

比如 $p=11$ 的两个排列中，出现了末项不是 $\frac{p + 1}{2} = 6$ 的情况

```
11, 1, 2, 7, 3, 8, 4, 9, 5, 10, 6
11, 1, 4, 8, 6, 10, 5, 9, 2, 7, 3
```

$p=19$ 的6个排列的末项都是 $\frac{p + 1}{2} = 10$

```
19, 1, 2, 11, 3, 12, 4, 13, 5, 14, 6, 15, 7, 16, 8, 17, 9, 18, 10
19, 1, 2, 11, 3, 4, 5, 15, 12, 6, 13, 7, 14, 16, 8, 17, 9, 18, 10
19, 1, 4, 12, 3, 13, 2, 18, 8, 16, 6, 17, 7, 9, 5, 14, 11, 15, 10
19, 1, 4, 12, 6, 2, 11, 5, 15, 3, 13, 7, 14, 16, 8, 17, 9, 18, 10
19, 1, 4, 12, 6, 14, 8, 16, 5, 17, 2, 13, 9, 18, 3, 7, 11, 15, 10
19, 1, 4, 6, 15, 9, 18, 8, 5, 17, 3, 7, 16, 2, 13, 11, 14, 12, 10
```

---

## 26汕头高三期末T14-可视化网页

为了更方便地查看不同的奇素数p对应的符合条件的排列，以及它们的末项可能会出现哪些数、各出现几次（这里称为“**末项分布**”），我开发了一个网页。提示词（约4页）：

大佬，请完整复述这题的题干。然后我们不难容易知道这题a37=19。可以写dfs代码求出所有可能的解。请写一个html文件。网页有一个输入框，输入框支持输入一个素数p（表示a1=p，以及数列共有p项）然后要判定(p+1)/2也是素数。两个都满足，就能确定头和尾。就跑dfs算法，在网页展示10组满足条件的数列。这时出现一个“继续生成”按钮，每点击一次就再生成10组数据。这里“继续生成”的能力可以靠js的yield实现。

技术栈：Tailwind CSS、React。

```
大佬，下面这个函数报错：Uncaught SyntaxError: /Inline Babel script: Unexpected reserved word 'yield'. (40:10)
  38 |         // 终止条件：找到了长度为 p 的序列
  39 |         if (depth === p) {
> 40 |           yield[...path];
     |           ^
  41 |           return;
  42 |         }

// solveSequence 所有代码
```

---

谢谢大佬！网页能够运行，接下来请你帮我做以下修改：

1. “验证条件”按钮改成“验证条件并搜索”，点击后会验证条件。如果不通过，行为和目前一致。如果通过，就预先生成前10个数列。
2. 对于p=37，第一次点击“继续生成10组”按钮后，我看到有10组数据出来，但是按钮一直都是“搜索中”，无法继续点击。请帮我查找原因并修复这个bug
3. 复制按钮改为总是显示
4. 复制按钮的左边新增一个“验证”按钮，点击后弹出一个对话框，对话框显示每一个 $S_n$ 和 $a_{n+1}$ ，以表明它确实符合题意

请在我给你的代码的基础上修改：

```
谢谢大佬！接下来请帮我在“已找到XX组解”的上方新增一个组件。这个组件有一个输入框，可以输入一个逗号分隔的数组。首先做输入校验，
比如验证数列是否是1到p的排列。然后验证数列是否符合题意。这里可以考虑复用前面开发过的“验证”的对话框的组件，
但是这个组件不需要弹出对话框。

请在我给你的代码的基础上修改：
```

---

谢谢大佬！接下来请帮我在`validationMsg`的上方新增一行文本，展示1到200的正整数中，满足p和`(p+1)/2`都是素数的所有p。这次你只需要输出需要改动的代码

```
谢谢大佬，接下来请帮我在“已找到X组解”的下方新增一行文本，展示目前搜索到的每种末项，及它们各出现了几次。

1. 请在我给你的代码的基础上修改，给出修改后的完整代码
2. 代码要符合React最佳实践
```

谢谢大佬，接下来请帮我在“继续生成10组”按钮的左边加一个“搜索所有数列”按钮，点击后继续跑dfs，直到dfs运行完毕，并把所有数列都展示在页面上。

请在我给你的代码的基础上修改：

// 完整代码

---

## UI 升级：变成 quantum-rose 主题

大佬，你是一名专家前端工程师，精通前端工程化。我有一个html文件，技术栈是Tailwind CSS、React，目前它的UI比较朴素。希望你帮我把这个网页的颜色主题变为 quantum-rose （来自 tweakcn 网站）

要求：符合最小改动原则，只改变颜色主题，其他都不改变。

quantum-rose 主题的 CSS 代码：

完整HTML代码：

---

## 吸收点JS知识

为了理解前面给出的提示词，除了要知道这题可以用dfs求出所有解，还要知道在JS中如何**优雅**地拿到dfs给出的前若干个解：Generator函数和`yield`语句（ES6推出）

<div class="flex gap-4">

```js {*}{maxHeight:'333px'}
const generateBatch = (count) => {
  let gen = generatorRef.current;

  if (!gen) {
    const p = parseInt(inputP);
    gen = solveSequence(p);
    generatorRef.current = gen;
  }

  const newSolutions = [];
  let done = false;

  for (let i = 0; i < count; i++) {
    const result = gen.next();
    if (result.done) {
      done = true;
      break;
    }
    newSolutions.push(result.value);
  }

  if (newSolutions.length > 0) {
    setSolutions(prev => [...prev, ...newSolutions]);
  }

  if (done) {
    setIsFinished(true);
  }
};
```

```js {*}{maxHeight:'333px'}
const searchAll = async () => {
  if (isSearchingAll) return;

  setIsSearchingAll(true);
  let gen = generatorRef.current;

  if (!gen) {
    const p = parseInt(inputP);
    gen = solveSequence(p);
    generatorRef.current = gen;
  }

  const BATCH_SIZE = 50;

  while (true) {
    const batch = [];
    let done = false;

    for (let i = 0; i < BATCH_SIZE; i++) {
      const result = gen.next();
      if (result.done) {
        done = true;
        break;
      }
      batch.push(result.value);
    }

    if (batch.length > 0) {
      setSolutions(prev => [...prev, ...batch]);
    }

    if (done) {
      setIsFinished(true);
      break;
    }

    // 让出主线程， UI 才能更新，用户才能看到每次增加 50 个解的效果
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  setIsSearchingAll(false);
};
```

</div>

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
