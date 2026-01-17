---
theme: dracula
mdc: true
transition: slide-left
---

<SlidevPageRedirector />
<MovingWatermark />
<!-- <AutoSlide :timeList="[0, 0]" /> -->

留空

<RotatingImage src="./assets/260115/纳西妲-疑问-100x100.png" />

---
layout: two-cols
---

<style>
.slidev-layout.two-columns {
  gap: 1rem;
}
</style>

## 第一版代码

DeepSeek生成第一版能跑的代码：

> 大佬，你是一名专家Python工程师，精通manim。请问manim如何实现加载一张`foo.png`，并让它不断原地旋转，且旋转速度越来越快

读代码总结知识点：

1. `.add_updater`传入的回调函数类型：`(mob: Mobject, dt)`。`dt`是两次更新动画的时间差
2. `mob.rotate`实现一次旋转。旋转角度`new_speed * dt`，旋转中心`mob.get_center()`
3. `time_tracker_2d = ValueTracker(0)`记录总时间

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

运行命令：`uv run manim -pqh rotate_img_with_acceleration\rotate_img_with_acceleration.py`

使用`add_updater`后，编译发现，缓存功能基本失效：几乎只有完全相同的代码才能命中缓存。

---

## 支持从外向里旋转

提示词：

> 大佬，我现在的代码如下。它已经能正常旋转。现在我想新增一个img3，路径'D:\\视频制作素材\\够赞头像.jpg'，用和现有代码一样的旋转方式，但它是以图片的竖直对称轴为旋转轴，从外向里旋转。

<div class="flex gap-4">

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

```python
# 通义千问认为 ImageMobject 不支持3维旋转
# 所以想把它作为纹理贴到 Square 上
# not even wrong 逆天幻觉，无语了…
plane1 = Square(
  side_length=3, fill_opacity=1, stroke_width=0
)
plane1.add(raw_img1)
all_objs = Group(plane1, plane2, plane3)
plane1.add_updater(update_rot_z)
self.add(all_objs)
```
</div>

DeepSeek生成的版本就是直接照抄上一版代码的updater，但发现能正常跑。

实际上，因为三维空间包含二维平面，把manim实现成不需要继承`ThreeDScene`也能正常运行的样子是应该的。

---

## 继承`Scene`和`ThreeDScene`的效果对比

通义千问坚称需要继承`ThreeDScene`才能实现3D旋转。虽然事实证明它错了，但我们不妨看看继承`Scene`和`ThreeDScene`的效果差异。

修改方式：

```python
class Rotate3dDemo(ThreeDScene):
    def construct(self):
        self.set_camera_orientation(theta=-90 * DEGREES)
```

### manim的3维坐标系

<div class="flex gap-4 pt-4">

```python
RIGHT: Vector3D = np.array((1.0, 0.0, 0.0))
X_AXIS: Vector3D = np.array((1.0, 0.0, 0.0))
UP: Vector3D = np.array((0.0, 1.0, 0.0))
Y_AXIS: Vector3D = np.array((0.0, 1.0, 0.0))
OUT: Vector3D = np.array((0.0, 0.0, 1.0))
Z_AXIS: Vector3D = np.array((0.0, 0.0, 1.0))
# 所以
RIGHT == X_AXIS, UP == Y_AXIS, OUT == Z_AXIS
```

<img src="./assets/260115/manim坐标轴.png" class="w-70" alt="manim坐标轴.png" />
</div>

运行效果：继承`Scene`的无抖动，继承`ThreeDScene`的有抖动感。

---

## 题外话：DeepSeek生成的“更有戏剧性”的效果

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

实测这玩意跑起来效果是：顺时针转90度，然后就卡在那不动了。问它：“大佬，你的update_rotation_3d使用了mob.become方法。这里你是怎么实现3维旋转的”才知道，它想要通过3维**旋转矩阵**进行旋转。但这并不酷，因为只是重新发明了`.rotate`轮子

---

顺时针旋转 $\theta$ 度的旋转矩阵：

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

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了一键三连喔</span>

谢谢观看~
