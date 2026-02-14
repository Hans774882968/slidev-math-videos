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

记 $d(n)$ 为n的正因数个数（约数函数）。求所有正整数n，满足

$$
n-1=(d(n)-1)^2 \cdot d^2(n-1)
$$

来源：漫士沉思录

<div class="h-30 flex justify-center items-center text-5xl text-orange">
只属于2026的数论题
</div>

---

```python
for n in range(2, 1919810):
    if n - 1 == (number_of_divisors(n) - 1) ** 2 * number_of_divisors(n - 1) ** 2:
        print(n)
```

---

```python
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
    result_list = []
    for m in range(1, 114514):
        n = m ^ 2 + 1
        val1 = number_of_divisors(n)
        val2 = number_of_divisors(m ^ 2)
        res = (val1 - 1) * val2
        if res == m:
            print(m, n)
            result_list.append(n)

    for n in result_list:
        val1 = number_of_divisors(n)
        val2 = number_of_divisors(n - 1)
        m = (val1 - 1) * val2
        print(n, val1, val2)
        assert n - 1 == m ^ 2

    start_time = perf_counter()
    mn_re, mn_re_val = calc_min_relative_error()
    print(mn_re, mn_re_val)
    end_time = perf_counter()
    print(f'耗时：{end_time - start_time:.4f}s')

```

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了点赞、收藏、关注喔</span>

谢谢观看~
