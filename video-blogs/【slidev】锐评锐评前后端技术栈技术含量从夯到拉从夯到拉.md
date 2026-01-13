---
theme: dracula
mdc: true
transition: slide-left
---

<SlidevPageRedirector />
<MovingWatermark />
<AutoSlide :timeList="[0, 75, 58, 84.5, 47, 50, 57, 16]" />

留空

---

## 标题语句分析（如果你不熟悉递归）

```js
let f = (x) => `锐评${x}从夯到拉`;
let f0 = '某某';
let f1 = f(f0);
let f2 = f(f1);
let f3 = f(f(f(f0))); // 递归
```

运行方式：在浏览器中按下F12，打开开发者工具。切到Console栏，粘贴代码，按回车

运行结果：f1是“锐评**某某**从夯到拉”，f2是“锐评**锐评某某从夯到拉**从夯到拉”，f3是“锐评**锐评锐评某某从夯到拉从夯到拉**从夯到拉”。

规律：下标是几，“锐评”和“从夯到拉”就各出现几次。比如，`f3`中“锐评”“从夯到拉”各出现3次。

另一种语序：`let f = (x) => '从夯到拉锐评${x}';`，这种是类似的，但它也可以看成是循环生成的，递归味不那么重。

### 作业

语句分析：给给视频评夯评拉完了给到NPC

---

## 生成多个背景

生成多少个背景？找规律确定：实现`f2`（“锐评**锐评某某从夯到拉**从夯到拉”）需要准备2个背景；实现`f3`（“锐评**锐评锐评某某从夯到拉从夯到拉**从夯到拉”）需要准备3个背景。规律：实现`f_n`需要准备`n`个背景

[之前的视频](https://www.bilibili.com/video/BV136CjBGE9q/)已经介绍过如何写代码生成从夯到拉的背景图。

<div class="flex">
<div class="flex-1">

背景图参考网站： https://conghangdaola.com/

画背景提示词：

> 大佬，你是一名数学科研工作者，精通manim。请叫我hans7。请帮我写一段manim代码，画出图片里的效果。
</div>
<div class="flex-1">

```python
class RankListDemo(Scene):
    def setup(self):
        # 其他省略
        RANK_LABELS = ["夯", "顶级", "人上人", "NPC", "拉"]
        self.RANK_LIST_BG_CFG = {
            # 在此定义一系列和背景有关的常量。其他属性省略。
            "colors": COLORS, "rank_labels": RANK_LABELS,
        }
    def draw_rank_list_bg(self):
        '''相关逻辑和上期从夯到拉视频一样，省略。`RankListBg`仅仅是个数据类型'''
        rank_list_rows, label_rect_list, content_rect_list = VGroup(), [], []
        self.add(rank_list_rows)
        return RankListBg(rank_list_rows, label_rect_list, content_rect_list)
    def construct(self):
        bg1, bg2 = self.draw_rank_list_bg(), self.draw_rank_list_bg()
```
</div>
</div>

---

## 和上期视频一样的从夯到拉评价过程

图标资源获取： https://github.com/devicons/devicon 。都是svg格式

踩坑：`Vite`的图标含有渐变色，加载到manim里无法正常显示颜色。解决方案：Chrome打开svg图标并截图

在manim里用`ImageMobject`加载图片（继承`Mobject`），用`SVGMobject`加载svg（继承`VMobject`）

<div class="flex gap-4">
<div>

图标群初始布局代码示例：

```python
initial_height_large = 1.5 * self.RANK_LIST_BG_CFG['row_height']
initial_height_small = 0.3 * self.RANK_LIST_BG_CFG['row_height']
react_svg_mo.scale_to_fit_height(initial_height_large)
react_svg_mo.move_to(ORIGIN + 2 * UL) # 把图标群放到看着顺眼的位置
tailwind_svg_mo.scale_to_fit_height(initial_height_small)
tailwind_svg_mo.next_to(react_svg_mo, RIGHT)
ts_svg_mo.scale_to_fit_height(initial_height_large)
ts_svg_mo.next_to(react_svg_mo, DOWN)
vite_png_mo.scale_to_fit_height(initial_height_large)
vite_png_mo.next_to(ts_svg_mo, RIGHT)
vue_svg_mo.scale_to_fit_height(initial_height_large)
vue_svg_mo.next_to(vite_png_mo, RIGHT)
```
</div>
<div>

多个图标排队入场：

```python
self.play(
    LaggedStart(
        FadeIn(angular_svg_mo),
        FadeIn(redux_svg_mo),
        lag_ratio=0.3,
        run_time=2
    )
)
```

如果希望图标群居中：

```python
Group(vite_png_mo, redux_svg_mo)
  .move_to(ORIGIN)
```
</div>
</div>

---

## 和上期视频一样的从夯到拉评价过程（续）

让素材一边缩小到一行矩形的高度，一边移动到排行榜的正确位置：

```python
self.play(
    angular_svg_mo.animate.scale_to_fit_height(img_final_height).next_to(
      bg5.label_rect_list[4], RIGHT, buff=self.RANK_LIST_BG_CFG['content_left_buff']),
    run_time=0.4
)
self.play(
    redux_svg_mo.animate.scale_to_fit_height(img_final_height).next_to(
      angular_svg_mo, RIGHT, buff=self.RANK_LIST_BG_CFG['svg_final_gap']),
    run_time=0.4
)
frontend_svg_la = VGroup(angular_svg_mo, redux_svg_mo) # 预先打包，为后续对当前背景进行排名做准备
```

1. `bg5`是当前处于**画面最上层**的背景，`bg5.label_rect_list[4]`表示把当前图标排到“拉完了”
2. `img_final_height`是一行矩形的高度
3. `frontend_svg_la`预先打包，为后续对当前背景进行排名做准备
4. Q：怎么没和前面一样用`LaggedStart`实现排队入场？A：不排第一的元素的目标位置都不好确定

---

## manim的层级机制

```python
bg1 = self.draw_rank_list_bg()
bg2 = self.draw_rank_list_bg()
```

请问`bg1`和`bg2`谁在上面？

manim layers: https://docs.devtaoism.com/docs/html/contents/_4_layers.html

答案：根据官方文档，`Mobject`的默认`z-index`都为0。`z-index`不同时，按`z-index`排；`z-index`相同时，后调用`self.add / self.play`的在上面（和CSS`z-index`类似）。

彩蛋：我之前写代码时，用的是错误的`bg1`而非`bg5`，但效果看着完全没问题。原因如下：

1. 在执行缩小动画时，原本被上层背景完全覆盖的背景突然被manim拉上来了
2. 5层背景长相完全一样

这就导致缩小动画的突变过程看着就像我们期望的渐变过程。写代码探究这个现象：

- [有突变过程的代码传送门](https://github.com/Hans774882968/manim-hw/blob/main/rank_list_recursive/bg_overlap.py)
- [无突变过程的代码传送门](https://github.com/Hans774882968/manim-hw/blob/main/rank_list_recursive/bg_overlap_correct.py)

---

## 对背景进行排名

```python
def bg_insert_into_rank(self, to_shrink: Group, next_bg: RankListBg,
    label_index: int, img_final_height, pre_wait=0, move_run_time=1):
    self.play(to_shrink.animate.scale(0.8))
    if pre_wait:
        self.wait(pre_wait)
    self.play(
        to_shrink.animate.scale_to_fit_height(img_final_height).next_to(
            next_bg.label_rect_list[label_index], RIGHT, buff=self.RANK_LIST_BG_CFG['content_left_buff']),
        run_time=move_run_time
    )

to_shrink5 = Group(bg5.rank_list_rows, frontend_svg_npc, frontend_svg_la, bun_svg_mo, wasm_svg_mo, backend_svg_hang, pandas_svg_mo)
self.bg_insert_into_rank(to_shrink5, bg4, 0, img_final_height, pre_wait=2) # 本期视频评为夯
```

需要缩小的元素：当前背景、一切在当前背景上面的元素

用递归写法囊括一切在当前背景上面的元素：

```python
to_shrink4 = Group(bg4.rank_list_rows, to_shrink5)
to_shrink3 = Group(bg3.rank_list_rows, to_shrink4)
npc_hang_video = self.draw_label_rect_list(['NPC', '夯', '原视频']) # 普通的矩形元素，不是重点
to_shrink2 = Group(bg2.rank_list_rows, npc_hang_video, to_shrink3)
self.bg_insert_into_rank(to_shrink2, bg1, 0, img_final_height, pre_wait=3, move_run_time=1.5)
```

---

### 附录

- 完整代码传送门： https://github.com/Hans774882968/manim-hw/blob/main/rank_list_recursive/rank_list_recursive.py
- [有突变过程的代码传送门](https://github.com/Hans774882968/manim-hw/blob/main/rank_list_recursive/bg_overlap.py)
- [无突变过程的代码传送门](https://github.com/Hans774882968/manim-hw/blob/main/rank_list_recursive/bg_overlap_correct.py)

### takeaways

1. “锐评**锐评某某从夯到拉**从夯到拉”语句的递归结构
2. 开源项目devicon轻松获取各技术栈图标资源
3. `LaggedStart`实现多个元素排队入场
4. manim的层级机制：`z-index`相同时，谁在画面最上层？

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了一键三连喔</span>

谢谢观看~
