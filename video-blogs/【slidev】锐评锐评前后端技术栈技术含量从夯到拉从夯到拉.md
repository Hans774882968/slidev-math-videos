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

留空

---

## 标题语句分析

一段代码胜过千言万语：

```js
let f = (x) => `锐评${x}从夯到拉`;
let f0 = '某某';
let f1 = f(f0);
let f2 = f(f1);
let f3 = f(f(f(f0))); // 递归
```

运行结果：f1是“锐评**某某**从夯到拉”，f2是“锐评**锐评某某从夯到拉**从夯到拉”，f3是“锐评**锐评锐评某某从夯到拉从夯到拉**从夯到拉”。

规律：下标是几，“锐评”和“从夯到拉”就各出现几次。比如，`f3`中“锐评”“从夯到拉”各出现3次。

另一种语序：`let f = (x) => '从夯到拉锐评${x}';`，这种是类似的，但它也可以看成是循环生成的，递归味就不那么重了。

作业：语句分析：给给视频评夯评拉完了给到NPC

---

## 生成多个背景

首先我们需要生成多个背景，为做出递归效果做准备。找规律确定背景的个数：如果希望实现`f2`（“锐评**锐评某某从夯到拉**从夯到拉”），那么需要准备2个背景；实现`f3`（“锐评**锐评锐评某某从夯到拉从夯到拉**从夯到拉”）需要准备3个背景。规律：实现`f_n`需要准备`n`个背景

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了一键三连喔</span>

谢谢观看~
