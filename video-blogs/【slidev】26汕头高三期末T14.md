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
    </h2>
  </div>

  <div class="bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif">

将 $1$ 到 $37$ 排成数列 $\{a_n\}$ ，已知

$a_1 = 37$ ，且前 $n$ 项和 $S_n$

总能被下一项 $a_{n+1}$ 整除。求 $a_{37}$
  </div>

  <p class="text-[#059669] text-2xl md:text-3xl mt-6 text-center">
    不妨做一个网页，搜索符合条件的所有数列~
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

将 $1$ 到 $37$ 排成数列 $\{a_n\}$ ，已知 $a_1 = 37$ ，且前 $n$ 项和 $S_n$ 总能被下一项 $a_{n+1}$ 整除（即 $S_n \pmod{a_{n+1}} = 0$ ）。求 $a_{37}$

<div class="h-30 flex justify-center items-center text-5xl text-orange">
质因数分解+正难则反，很有创意~
</div>

---

## 题解

<MyBlock type="success" title="朴素的想法">

求出数列的前几项，看看有什么规律
</MyBlock>

$a_{1} = 37$ ， $S_{1} \pmod{a_{2}} = 0$ 。37是素数，所以 $a_{2} = 1\text{ or }37$ ，但 $a_{1}=37$ ，所以 $a_{2}=1$

$S_{2} \pmod{a_{3}} = 38 \pmod{a_{3}} = 0$ 。38的质因数分解为 $2 \times 19$ ，并且1已经被占用，所以 $a_{3}=2\text{ or }19$

我们在这卡住了！因为我们接下来需要分别假设 $a_{3}=2$ 和 $a_{3}=19$ ，后续求出的 $a_{4},\  a_{5},\ \dots$ 的分支只会越来越多。指望靠这种方式找到数列的规律似乎很困难！

---

## 怎么办呢？

<MyBlock type="success" title="正着推导很困难，我们就">

直接看最后一项！**正难则反**
</MyBlock>

1.  数列总和 $S_{37} = \frac{(1+37) \times 37}{2} = 19 \times 37 = 703$
2.  根据题意，$S_{36}$ 必须能被 $a_{37}$ 整除
3.  $S_{36} = S_{37} - a_{37} = 703 - a_{37}$
4.  若 $a_{37} \mid (703 - a_{37})$，则必然有 $a_{37} \mid 703$
5.  $703 = 19 \times 37$。其因数为 $1, 19, 37$
6.  因为 $a_1 = 37$ 且数列各项互不相同，故 $a_{37} \neq 37$

---

## 扩展

下面我们考虑怎么对这题进行扩展。回顾之前的解题过程：我们推出了 $a_{2} = 1$ ，以及 $a_{p}$

需要限制 $\frac{p + 1}{2}$ 是素数吗？不清楚，但只限制 $\frac{p + 1}{2}$ 是正整数是不够的。比如 $p=11$ 时能找到两个排列：

```
11, 1, 2, 7, 3, 8, 4, 9, 5, 10, 6
11, 1, 4, 8, 6, 10, 5, 9, 2, 7, 3
```

这里出现了末项不是 $\frac{p + 1}{2}$ 的情况。

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
