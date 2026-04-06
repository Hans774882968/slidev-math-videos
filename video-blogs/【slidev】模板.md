---
theme: ./hans-green-theme
mdc: true
transition: slide-left
lineNumbers: true
tags:
  - 数学模板
---

<SlidevPageRedirector />
<MovingWatermark />
<!-- <AutoSlide :timeList="[0, 0]" /> -->

<MySteps :steps="[
  { title: '步骤 1', description: '第一步说明' },
  { title: '步骤 2', description: '第二步说明' },
]" :activeStep="1" />

<MyBlock type="success" title="关键发现">

We identified **127 new species** of arthropods in previously unsampled canopy microhabitats.
</MyBlock>

这是一段<MyHighlight type="success">表示强调</MyHighlight>的文字

<MyTheorem type="corollary" title="推论1">

$c^2=a^2+b^2$
</MyTheorem>

<MyKeywords :keywords="['生态系统', 'Biodiversity', 'Conservation', 'Tropics']" color="green" />

---

## 题干

无

<div class="h-30 flex justify-center items-center text-5xl text-orange">
宣传语
</div>

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
