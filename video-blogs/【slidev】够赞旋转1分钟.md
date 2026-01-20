---
theme: dracula
mdc: true
transition: slide-left
---

<SlidevPageRedirector />
<MovingWatermark />
<AutoSlide :timeList="[0, 66, 10, 10, 24, 16, 27, 16, 29, 18, 5.5, 20, 36.5]" />

留空

<teleport to="#slide-content">
  <!-- teleport 让 position: fixed 能够重新生效 -->
  <div class="rotating-image-container fixed top-0 right-0 p-6 rounded-full overflow-hidden select-none">
    <RotatingImage>
      <img src="./assets/260115/纳西妲-疑问-100x100.png" />
    </RotatingImage>
  </div>
</teleport>

---
layout: two-cols
---

<style>
.slidev-layout.two-columns {
  gap: 1rem;
}
</style>

## 第一版代码

不会**编程**，没有**双手**也能做：打开[DeepSeek](https://chat.deepseek.com/)，生成第一版能跑的代码：

> 大佬，你是一名专家Python工程师，精通manim。请问manim如何实现加载一张`foo.png`，并让它不断原地旋转，且旋转速度越来越快

读代码总结知识点：

1. `.add_updater`传入的**回调函数**类型：`(mob: Mobject, dt)`。`dt`是两次更新动画的时间差
2. `mob.rotate`实现一次旋转。旋转角度`new_speed * dt`，旋转中心`mob.get_center()`，旋转轴为**Z轴**
3. `time_tracker_2d = ValueTracker(0)`累加，记录动画进行的总时间
4. 加速公式： $v_1=v_0+a*dt$

::right::

```python {*}{maxHeight:'472px'}
from manim import *


class RotateImgWithAcceleration(Scene):
    def construct(self):
        img1 = ImageMobject('D:\\视频制作素材\\够赞头像.jpg')
        img2 = ImageMobject('D:\\视频制作素材\\够赞头像AI扩图后.jpg')

        img1.scale_to_fit_width(3)
        img2.scale_to_fit_width(3)

        img2.next_to(img1, RIGHT, buff=1.6)

        all_imgs = Group(img1, img2)
        all_imgs.center()

        INITIAL_SPEED = 2
        ACCELERATION = 0.15
        time_tracker_2d = ValueTracker(0)

        def update_rotation_2d(mob: Mobject, dt):
            time_tracker_2d.increment_value(dt)
            new_speed = INITIAL_SPEED + ACCELERATION * time_tracker_2d.get_value()
            mob.rotate(
                new_speed * dt,
                about_point=mob.get_center()
            )

        img1.add_updater(update_rotation_2d)
        img2.add_updater(update_rotation_2d)

        self.add(all_imgs)
        self.wait(60)
```

---

## 运行现象观察

运行命令：

```bash
uv run manim -pqh rotate_img_with_acceleration\rotate_img_with_acceleration.py
```

使用`add_updater`后，编译发现，缓存功能基本失效：几乎只有完全相同的代码才能命中缓存。

---

## 支持从外向里旋转

> 大佬，我现在的代码如下。它已经能正常旋转。现在我想新增一个img3，路径'D:\\视频制作素材\\够赞头像.jpg'，用和现有代码一样的旋转方式，但它是以图片的竖直对称轴为旋转轴，从外向里旋转。

<div class="flex gap-4">
<div>

DeepSeek版：

```python
def update_rotation_3d(mob, dt):
    time_tracker_3d.increment_value(dt)
    new_speed = INITIAL_SPEED + ACCELERATION *
      time_tracker_3d.get_value()
    angular_speed_3d.set_value(new_speed)  # DS 生成的无用变量
    mob.rotate(
        new_speed * dt,
        axis=UP,  # UP = Y_AXIS
        about_point=mob.get_center()
    )
```
</div>
<div>

通义千问版：

```python
# 通义千问认为 ImageMobject 不支持3维旋转
# 所以想把它作为纹理贴到 Square 上
plane1 = Square(
  side_length=3, fill_opacity=1, stroke_width=0
)
plane1.add(raw_img1)
all_objs = Group(plane1, plane2, plane3)
plane1.add_updater(update_rot_z)
self.add(all_objs)
```
</div>
</div>

<div class="h-30 flex justify-center items-center text-5xl text-orange">
无奖竞猜：选哪位老师的？
</div>

---

## 支持从外向里旋转（续）

1. DeepSeek生成的版本就是直接照抄上一版代码的updater，把旋转轴改为**Y轴**，但发现能正常跑。
2. 通义千问认为`ImageMobject`不支持3维旋转，所以想把它作为纹理贴到`Square`上。 not even wrong 的逆天幻觉，无语了…

个人认为，因为三维空间包含二维平面，把manim实现成不需要继承`ThreeDScene`也能正常运行的样子是应该的。

---

## 为什么旋转轴改为Y轴就能从外向里转？

### manim的3维坐标系

<div class="flex gap-4">
<div>

`.venv\Lib\site-packages\manim\constants.py`：

```python
RIGHT: Vector3D = np.array((1.0, 0.0, 0.0))
X_AXIS: Vector3D = np.array((1.0, 0.0, 0.0))
UP: Vector3D = np.array((0.0, 1.0, 0.0))
Y_AXIS: Vector3D = np.array((0.0, 1.0, 0.0))
OUT: Vector3D = np.array((0.0, 0.0, 1.0))
Z_AXIS: Vector3D = np.array((0.0, 0.0, 1.0))
```
</div>
<img src="./assets/260115/manim坐标轴.png" class="w-70" alt="manim坐标轴.png" />
</div>

所以：`RIGHT == X_AXIS, UP == Y_AXIS, OUT == Z_AXIS`

---

## 为什么旋转轴改为Y轴就能从外向里转？

### `mob.rotate(axis=Y_AXIS)`的实现原理

<div class="flex gap-4 pt-4">

一句话说清：左乘**旋转矩阵**

<img src="./assets/260115/manim坐标轴.png" class="w-60" alt="manim坐标轴.png" />
</div>

$$
R_x(\theta) = 
\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos\theta & -\sin\theta \\
0 & \sin\theta & \cos\theta
\end{bmatrix},\ R_y(\theta) = 
\begin{bmatrix}
\cos\theta & 0 & \sin\theta \\
0 & 1 & 0 \\
-\sin\theta & 0 & \cos\theta
\end{bmatrix},\ R_z(\theta) = 
\begin{bmatrix}
\cos\theta & -\sin\theta & 0 \\
\sin\theta & \cos\theta & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

这三个旋转矩阵均采用**右手定则**（right-hand rule）定义旋转方向：

- **绕 $x$ 轴**：拇指指向 $+x$ 方向，其余四指弯曲方向为**从 $y$ 轴转向 $z$ 轴**的正旋转方向
- **绕 $y$ 轴**：拇指指向 $+y$ 方向，其余四指弯曲方向为**从 $z$ 轴转向 $x$ 轴**的正旋转方向
- **绕 $z$ 轴**：拇指指向 $+z$ 方向，其余四指弯曲方向为**从 $x$ 轴转向 $y$ 轴**的正旋转方向

---

## 继承`Scene`和`ThreeDScene`的效果对比

通义千问坚称需要继承`ThreeDScene`才能实现3D旋转。虽然事实证明它错了，但我们不妨看看继承`Scene`和`ThreeDScene`的效果差异。

继承`ThreeDScene`后，需要增加的配套修改：

```python
class Rotate3dDemo(ThreeDScene):
    def construct(self):
        self.set_camera_orientation(theta=-90 * DEGREES)
```

运行效果：继承`Scene`的无抖动，继承`ThreeDScene`的有抖动感。

---

## 题外话：DeepSeek想要生成的“更有戏剧性”的效果

```python
def update_rotation_3d(mob, dt):
    time_tracker_3d.increment_value(dt)
    current_speed = INITIAL_SPEED + ACCELERATION * time_tracker_3d.get_value()
    new_angle = rotation_angle.get_value() + current_speed * dt
    rotation_angle.set_value(new_angle)
    # 应用3D变换：绕Y轴旋转，但限制在0-90度之间循环。这样看起来就像在翻页
    effective_angle = new_angle % (PI/2)  # 每90度循环一次
    mob.become(
        mob.copy().apply_function(
            lambda p: np.array([
                p[0] * np.cos(effective_angle),  # X坐标随角度变化
                p[1],                            # Y坐标不变
                p[0] * np.sin(effective_angle)  # Z坐标变化，产生3D效果
            ])
        )
    )
```

实测这玩意跑起来效果是：顺时针转90度，然后就卡在那不动了。

问它：“大佬，你的update_rotation_3d使用了mob.become方法。这里你是怎么实现3维旋转的”

才知道，它想要通过3维**旋转矩阵**实现旋转。但这并不酷，因为只是重新发明了`.rotate`轮子

---

## 点睛之笔：实现申鹤快乐计时器

> 大佬，请在我下面给你的代码的基础上，添加计时功能。初始时间00:00，每一秒时间加1。文字颜色使用`TEXT_PRIMARY = '#e6067a'`

LLM给的代码思路是对的，但实现得很烂。我手动把它调整为最简洁的版本了。原理仍然是用`add_updater`

```python
def format_time(seconds):
    '''将秒数格式化为 MM:SS 字符串'''
    total_seconds = int(seconds)
    mins = total_seconds // 60
    secs = total_seconds % 60
    return f'{mins:02d}:{secs:02d}'

time_text = Text('00:00', font="Consolas", color=TEXT_PRIMARY)
time_text.shift(TIME_TEXT_POSITION)
clock_time = ValueTracker(0)

def update_clock(mob: Mobject, dt):
    current_time = clock_time.get_value()
    clock_time.increment_value(dt)
    # 这里除文本外的所有属性，必须和定义时完全一致
    new_time_text = Text(format_time(current_time), font="Consolas", color=TEXT_PRIMARY)
    new_time_text.shift(TIME_TEXT_POSITION)
    mob.become(new_time_text)
time_text.add_updater(update_clock)
```

---

## 附录：完整代码

1. 继承`Scene`版（视频P2）： https://github.com/Hans774882968/manim-hw/blob/main/rotate_img_with_acceleration/rotate_img_with_acceleration.py
2. 继承`ThreeDScene`版（视频P1）： https://github.com/Hans774882968/manim-hw/blob/main/rotate_img_with_acceleration/rotate_3d_demo.py
3. DeepSeek想要实现的“更有戏剧性”的效果。我修好它的代码后也不过是普通的3D旋转： https://github.com/Hans774882968/manim-hw/blob/main/rotate_img_with_acceleration/rotate_3d_become_demo.py
4. 使用`Rotating`类实现（效果不好，仅供参考）： https://github.com/Hans774882968/manim-hw/blob/main/rotate_img_with_acceleration/rotating_demo.py

---

<div class="flex items-center gap-2">

## 附录：如何实现旋转的

<RotatingImage>
  <img src="./assets/260115/纳西妲-疑问-100x100.png" alt="纳西妲-疑问-100x100.png" class="w-12" />
</RotatingImage>
</div>

> 大佬，请实现一个Vue组件，支持传入图片路径，用CSS3实现图片的匀速旋转，1.5s转一圈。技术栈：Vue3、Tailwind CSS

<div class="flex gap-4">
<div>

已废弃的旧方案（LLM生成）：

```vue {*}{maxHeight:'360px'}
<template>
  <img
    :src="src"
    :alt="alt"
    :class="[
      'rotating-image',
      imgClass,
    ]"
  >
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Rotating image'
  },
  imgClass: {
    type: String,
    default: ''
  },
})
</script>

<style scoped>
.rotating-image {
  animation: rotateLinear 6s linear infinite;
}

@keyframes rotateLinear {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
```
</div>
<div>

现行方案：

```vue {*}{maxHeight:'360px'}
<template>
  <EnhancedSlot />
</template>

<script setup>
import { useSlots, cloneVNode } from 'vue'

const slots = useSlots()

const EnhancedSlot = () => {
  const slotContent = slots.default?.()
  if (!slotContent || slotContent.length !== 1) {
    console.warn('只能传入一个<img>标签！')
    return slotContent
  }

  const vnode = slotContent[0]
  if (vnode.type !== 'img') {
    console.warn('只支持传入<img>标签！')
    return vnode
  }

  return cloneVNode(vnode, {
    class: [vnode.props?.class || '', 'rotating-image']
  })
}
</script>

<style scoped>
.rotating-image {
  animation: rotateLinear 6s linear infinite;
}

@keyframes rotateLinear {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
```
</div>
</div>

---

<div class="flex items-center">

## 附录：如何实现旋转的

<RotatingImage>
  <img src="./assets/260115/纳西妲-疑问-100x100.png" alt="纳西妲-疑问-100x100.png" class="w-12" />
</RotatingImage>

## （续）
</div>

虽然LLM有能力实现，但适配slidev需要额外的努力。我们发现，给组件传入图片路径，没法像`![]()`或`<img src="..." />`那样被slidev（底层是Vite）自动转换。Vite除了转换路径，还会给图片加哈希值，我们在应用层难以模拟Vite内置的动作。所以上一页PPT左侧的代码被废弃了。

于是我转变思路，传入图片**插槽**，然后组件给传入的图片加一些属性，这样图片就能正常享受slidev的打包处理了。这就得到了上一页PPT右侧的代码。提示词：

> 大佬，请帮我把下面给你的`video-blogs\components\RotatingImage.vue`代码改成传入img元素作为插槽（示例：`<RotatingImage><img src="xxx"></RotatingImage>`）然后组件加入现有代码给img加上的属性

另外，在slidev中，为了让图片出现在浏览器窗口的右上角，我们给图片多包一层绝对定位的`div`：

```vue
<teleport to="#slide-content">
  <!-- teleport 让 position: fixed 能够重新生效 -->
  <div class="rotating-image-container fixed top-0 right-0 p-6 rounded-full overflow-hidden select-none">
    <RotatingImage>
      <img src="./assets/260115/纳西妲-疑问-100x100.png" />
    </RotatingImage>
  </div>
</teleport>
```

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了一键三连喔</span>

谢谢观看~
