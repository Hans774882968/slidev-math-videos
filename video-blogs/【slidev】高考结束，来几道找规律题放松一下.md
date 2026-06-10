---
theme: ./hans-green-theme
mdc: true
transition: slide-left
lineNumbers: true
tags:
  - 拉格朗日插值
---

<SlidevPageRedirector />
<MovingWatermark />
<!-- <AutoSlide :timeList="[0, 0]" /> -->

<div class="bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
  <h1 class="title-stroke !text-[#059669] !mb-1 font-black tracking-tighter text-center">
    高考结束，来几道
  </h1>

  <div class="flex flex-col justify-center items-center gap-3 mb-2">
    <h2 class="flex justify-center items-center font-black text-center !text-[#059669] !text-2xl md:!text-3xl">
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">找规律</span>
      </div>
      <span class="subtitle-stroke">题，放松一下~</span>
    </h2>
  </div>

  <div class="mb-2 bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-2xl text-[#059669] font-serif">

`2, 3, 7, 16, 65, 321, ?`

`7, 7, 9, 17, 43, ?`

`3, 2, 11, 14, ?, 34`
  </div>

  <p class="text-[#059669] text-2xl md:text-3xl !my-2 text-center">
    来源：09、10国考行测
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

<div class="flex justify-center">
<div class="mb-2 bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-2xl text-[#059669] font-serif">

`2, 3, 7, 16, 65, 321, ?`

`7, 7, 9, 17, 43, ?`

`3, 2, 11, 14, ?, 34`
</div>
</div>

<style>
.bordered-box p {
  margin: 0;
}
</style>

---

## 那么问题来了：怎么批量产出这些梗图呢？

提示词传送门：`lagrange-interpolation-114514`项目的`docs\拉格朗日插值多项式114514梗图生成器.md`

---

## 2，3，7，16，65，321，（  ）

<div class="flex gap-5">

A. 4542

B. 4544

C. 4546

D. 4548
</div>

## 法1

单增数列优先考虑**做差**：`1,4,9,49,256,?`，都是平方数，写出它们的平方根：`1,2,3,7,16,?`。再次做差`1,1,4,9,?`，再次做差`0,3,5,?`，没发现啥规律了。

那就用下4个选项吧！`4548-321=4227`。盲猜它的平方根接近65，验算`65*65=4225`，果然！所以答案是`4225+321=4546`，选C。

## 法2

考虑**递推数列**。注意~~不~~到`7 - 3 = 2 ^ 2, 16 - 7 = 3 ^ 2, 65 - 16 = 7 ^ 2, 321 - 65 = 16 ^ 2`，平方根刚好再次出现题目中的数列`2,3,7,16`。所以规律是`a[n] = a[n - 1] + a[n - 2] ^ 2`。

答案就是`321 + 65^2`。这个不需要算，它的尾数是65，只有C选项符合。

---

## 7，7，9，17，43，（  ）

<div class="flex gap-5">

A. 119

B. 117

C. 123

D. 121
</div>

单增数列优先考虑**做差**：`0,2,8,26,80/78/76/74`。没看出啥规律，但数组依旧单增，再次做差：`2,6,18,54/52/50/48`。

<MyBlock type="success" title="我们发现">

如果选择54，那么`2,6,18,54`构成公比为3的等比数列
</MyBlock>

所以答案是选项里最大的，就是123

---

## 3，2，11，14，（  ），34

<div class="flex gap-5">

A. 18

B. 21

C. 24

D. 27
</div>

做差无果。但注意~~不~~到平方数`1,4,9,16,25,36`似乎可以拿来**拟合**这个数列。

<MyBlock type="success" title="差值分别是">

`2,-2,2,-2,?,-2`，有明显规律
</MyBlock>

所以问号应该填2，25+2=27，选D。

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
