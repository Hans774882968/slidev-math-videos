---
theme: dracula
mdc: true
transition: slide-left
class: text-center
tags:
  - 正弦定理
  - 余弦定理
  - 相似三角形
  - 平面向量
---

<SlidevPageRedirector />
<MovingWatermark />
<AutoSlide :timeList="[13, 29, 44, 66, 47.5, 57, 31, 27]" />

## 这道解三角形向量做法太需要注意力？保姆级拆解，一题3解，让你从容面对！

题源：深圳2026届高三年级第一次模拟联测第18题

作者： **hans7**

**我们必须想象，做题人是幸福的**

文字稿传送门：见视频简介

---

## 题干

在△ABC中，角A、B、C对边分别为a、b、c，且 $\sqrt{ 3 }b=2a\sin(C+\frac{\pi}{3})$

（1）求∠A

（2）D为BC上一点， $2\vec{BD}=\vec{DC}$

- 若 $\angle CAD=\frac{\pi}{4}$ ，求 $\frac{b}{c}$
- 若 $AD=2$ ，求△ABC面积最大值

<div class="h-40 flex justify-center items-center text-5xl text-orange">
保姆级拆解，一题3解，让你从容面对！
</div>

---

## （1）求∠A

既然是求角，那肯定先把约束方程变成角的关系： **$\sqrt{ 3 }\sin B=2\sin A\sin(C+\frac{\pi}{3})$**

此时我们有两个选择：

1. 把B换成 $\pi-A-C$
2. 把C换成只和A、B有关的式子。比如变形成  $\frac{1}{2}\sin C+\frac{\sqrt{ 3 }}{2}\cos C$ 再拆分

显然选1更简单。

$$
\sqrt{ 3 }\sin(A+C)=\sqrt{ 3 }(\sin A\cos C+\cos A\sin C)=\sin A\sin C+\sqrt{ 3 }\sin A\cos C
$$

$$
\textcolor{orange}{
\boldsymbol{
\sqrt{ 3 }\cos A\sin C=\sin A\sin C \Rightarrow \sin C(\sin A-\sqrt{ 3 }\cos A)=0
}
}
$$

$C \in (0,\pi)$ 故 $\sin C \neq 0$ ，故只能是 $\tan A=\sqrt{ 3 }$ 。由 $A \in (0,\pi)$ 得 $A=\frac{\pi}{3}$

---
layout: two-cols-header
---

## 2.1 $A=\frac{\pi}{3},2\vec{BD}=\vec{DC},\angle CAD=\frac{\pi}{4}$ ，求 $\frac{b}{c}$

::left::

不失一般性（考试别这样写），设 $|BD|=1,|DC|=2$ ，对△ABD、△ADC分别用正弦定理：

$$
\frac{1}{\sin \frac{\pi}{12}}=\frac{c}{x},\ \frac{2}{\sin \frac{\pi}{4}}=\frac{b}{x}
$$

右边除以左边有

$$
\frac{b}{c}=\frac{\frac{2}{\sin \frac{\pi}{4}}}{\frac{1}{\sin \frac{\pi}{12}}}=2\sqrt{ 2 }\sin \frac{\pi}{12}
$$

那么问题来了， $\sin \frac{\pi}{12}$ 是多少？初中生可以画直角三角形，再构造等腰来做，高中生可以直接用**和角公式** $\sin(\frac{\pi}{4}-\frac{\pi}{6})$ 算。总之 $\sin \frac{\pi}{12}=\frac{\sqrt{ 6 }-\sqrt{ 2 }}{4}$ 。所以 $\frac{b}{c}=\sqrt{ 2 }\frac{\sqrt{ 6 }-\sqrt{ 2 }}{2}=\sqrt{ 3 }-1$

::right::

<div class="flex justify-center h-full pt-4">
  <img src="./assets/251124/深圳26届高三第一次模拟联测解三角形-3.png" class="w-80 h-80" alt="深圳26届高三第一次模拟联测解三角形-3.png">
</div>

---

## 2.2 $A=\frac{\pi}{3},2\vec{BD}=\vec{DC},AD=2$ ，求△ABC面积最大值

### 怎么表达 $S_{\triangle ABC}$ ？

1. $S_{\triangle ABC}=\frac{1}{2}bc\sin A=\frac{\sqrt{ 3 }}{4}bc$
2. $S_{\triangle ABC}=3\frac{1}{2}|AB||AD|\sin \angle BAD=3c\sin \angle BAD$
3. $S_{\triangle ABC}=\frac{3}{2}\frac{1}{2}|AC||AD|\sin \angle CAD=\frac{3}{2}b\sin \angle CAD$

你会选哪个？我手玩了一下2和3，都比较困难。

对于1，我们希望用b、c表示出AD，即关于b、c的约束方程，从而得到**有条件极值问题**。由此衍生出3个解法~

---
layout: two-cols-header
---

## 2.2 $A=\frac{\pi}{3},2\vec{BD}=\vec{DC},AD=2$ ，求△ABC面积最大值

### 法1：我的建系做法

::left::

几何题都可以考虑建系做法。我们至少有3个选择：以A、B、C为原点。注意到角A固定，感觉**以A为原点，B在x轴上**（C在x轴上也行）建系最简单。于是 $B(c,0),\ C(\frac{b}{2},\frac{\sqrt{ 3 }}{2}b)$

由**定比分点公式**： $D=\frac{2B+C}{3}=(\frac{2x_{B}+x_{C}}{3},\frac{2y_{B}+y_{C}}{3})=(\frac{4c+b}{6},\frac{\sqrt{ 3 }}{6}b)$ 然后由 $|AD|^2=4$ 得

$$
\textcolor{orange}{
(4c+b)^2+3b^2=16c^2+8bc+4b^2=4*36 \Rightarrow 4c^2+2bc+b^2=36
}
$$

又 $S_{\triangle ABC}=\frac{1}{2}bc\sin A=\frac{\sqrt{ 3 }}{4}bc$ 。这下约束方程和目标函数都有了，一个有条件极值问题，**拉格朗日乘数法**、**均值不等式**都能做。我们用更简单的均值不等式：

$$
4c^2+2bc+b^2=36 \geq 2\sqrt{ 4c^2b^2 }+2bc=6bc \Rightarrow bc \leq 6
$$

所以答案 $\frac{\sqrt{ 3 }}{4}bc=\frac{3\sqrt{ 3 }}{2}$

::right::

<div class="flex justify-center h-full pt-4">
  <img src="./assets/251124/深圳26届高三第一次模拟联测解三角形-1.png" class="w-65 h-65" alt="深圳26届高三第一次模拟联测解三角形-1.png">
</div>

---
layout: two-cols-header
---

## 2.2 $A=\frac{\pi}{3},2\vec{BD}=\vec{DC},AD=2$ ，求△ABC面积最大值

### 法2：我的相似三角形做法

::left::

如图，我们作 $ED \parallel AC$ ，就得到相似三角形，于是 $AE=\frac{2}{3}c,\ ED=\frac{b}{3},\ \angle AED=\frac{2\pi}{3}$ 。△AED三条边长和一个定角都有了，那就扔个余弦定理：

$$
(\frac{2}{3}c)^2+\frac{b^2}{9}+\frac{2}{9}bc=4
$$

化简一下同样得到：

$$
4c^2+2bc+b^2=36
$$

后续过程同法1

::right::

<div class="flex justify-center h-full pt-4">
  <img src="./assets/251124/深圳26届高三第一次模拟联测解三角形-2.png" class="w-80 h-80" alt="深圳26届高三第一次模拟联测解三角形-2.png">
</div>

---
layout: two-cols-header
---

## 2.2 $A=\frac{\pi}{3},2\vec{BD}=\vec{DC},AD=2$ ，求△ABC面积最大值

### 法3：参考答案的向量做法

::left::

D在BC上，所以 $|AD|$ 可以由 $\vec{AB},\ \vec{AC}$ 表示出来。

$$
\vec{AD}=\vec{AB}+\vec{BD}=\vec{AB}+\frac{\vec{BC}}{3}=\vec{AB}+\frac{\vec{AC}-\vec{AB}}{3}=\frac{2\vec{AB}+\vec{AC}}{3}
$$

两边平方：

$$
4=|\vec{AD}|^2=\frac{4}{9}|\vec{AB}|^2+\frac{|\vec{AC}|^2}{9}+\frac{4}{9}\vec{AB}\cdot\vec{AC}
$$

然后 $\vec{AB}\cdot\vec{AC}=|\vec{AB}||\vec{AC}|\cos A=\frac{bc}{2}$ ，所以我们依旧得到

$$
4c^2+2bc+b^2=36
$$

后续过程同法1

::right::

<div class="flex justify-center h-full pt-4">
  <img src="./assets/251124/深圳26届高三第一次模拟联测解三角形-3.png" class="w-65 h-65" alt="深圳26届高三第一次模拟联测解三角形-3.png">
</div>

---
layout: center
class: text-center
---

# 后记

<span class="text-orange font-bold">为做题人的精神自留地添砖加瓦</span>

<span class="text-pink font-bold border border-pink px-2 py-1 rounded-lg">喜欢本期视频的话，别忘了一键三连喔</span>

谢谢观看~
