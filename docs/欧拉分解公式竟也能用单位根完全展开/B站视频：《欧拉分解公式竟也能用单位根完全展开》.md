## 旁白

```powershell
edge-tts --voice zh-CN-XiaoxiaoNeural --rate=+30% --file 'docs\欧拉分解公式竟也能用单位根完全展开\文字稿1.md' --write-media media\260305\文字稿1.mp3 --write-subtitles media\260305\文字稿1.srt
```

## 新增评论

设

$$
A = \begin{pmatrix}
1 & b & b & b \\
b & 1 & b & b \\
b & b & 1 & b \\
b & b & b & 1
\end{pmatrix}
$$

其中 $b \neq 0$ ，求A的特征值和特征向量

解：多项式为 $1+bx+bx^2+bx^3$ ，单位根为 $1, i, -1, -i$ ，所以特征值为 $3b+1,\ 1-b,\ 1-b,\ 1-b$ ，特征向量为（ $v_1$ 对应特征值 $3b+1$ ）

$$
\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \\ 1 \end{pmatrix}, \quad \mathbf{v}_2 = \begin{pmatrix} 1 \\ i \\ -1 \\ -i \end{pmatrix}, \quad
\mathbf{v}_3 = \begin{pmatrix} 1 \\ -1 \\ 1 \\ -1 \end{pmatrix}, \quad
\mathbf{v}_4 = \begin{pmatrix} 1 \\ -i \\ -1 \\ i \end{pmatrix}
$$

不过因为这个矩阵比较特殊，所以还有纯实数的基：

$$
\mathbf{u}_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \\ 1 \end{pmatrix}, \quad
\mathbf{u}_2 = \begin{pmatrix} 1 \\ -1 \\ 0 \\ 0 \end{pmatrix}, \quad
\mathbf{u}_3 = \begin{pmatrix} 0 \\ 1 \\ -1 \\ 0 \end{pmatrix}, \quad
\mathbf{u}_4 = \begin{pmatrix} 0 \\ 0 \\ 1 \\ -1 \end{pmatrix}
$$

这里 $\mathbf{u}_2 = \frac{\mathbf{v}_2 + \mathbf{v}_4}{2}$

## 新增评论2

### $n=2$ 导出的恒等式

$det\begin{pmatrix} a & b \\ b & a \end{pmatrix} = a^2-b^2 = (a+b)(a+wb)=(a+b)(a-b)$

### $n=4$ 导出的恒等式

必不可能手算的！给通义千问的提示词：

```
大佬，你是一名数学科研工作者，精通代数方向。我们知道矩阵
a b c
c a b
b c a
的行列式可以导出欧拉分解公式在复数域下的完全分解：a^3+b^3+c^3-3abc=(a+b+c)(a+wb+w^2c)(a+w^2b+wc)。现在请帮我根据4阶循环矩阵导出一个恒等式
```

```
大佬，请展示一下det(C4)的具体计算过程
```

于是拿到代码：

```python
import sympy as sp

a, b, c, d = sp.symbols('a b c d')

C4 = sp.Matrix([
    [a, b, c, d],
    [d, a, b, c],
    [c, d, a, b],
    [b, c, d, a]
])

det_C4 = C4.det()
print('行列式的展开形式：')
sp.pprint(det_C4)
print('\n' + '=' * 60 + '\n')

factored = sp.factor(det_C4)
print('因式分解形式：')
sp.pprint(factored)
print('\n' + '=' * 60 + '\n')

print(sp.latex(det_C4))
print(sp.latex(factored))
```

等式的左边（按字典序排列）：

$a^{4} - 4 a^{2} b d - 2 a^{2} c^{2} + 4 a b^{2} c + 4 a c d^{2} - b^{4} + 2 b^{2} d^{2} - 4 b c^{2} d + c^{4} - d^{4}$

在实数域上的因式分解：

$$
\begin{align}
\left(a - b + c - d\right) \left(a + b + c + d\right) \left(a^{2} - 2 a c + b^{2} - 2 b d + c^{2} + d^{2}\right) \\
= (a+b+c+d)(a-b+c-d)((a-c)^2+(b-d)^2)
\end{align}
$$

等式的右边（在复数域上的完全分解，其中 $w=i$ ）：

$$
\begin{aligned}
(a+b+c+d)(a+wb+w^2c+w^3d)(a+w^2b+w^4c+w^6d)(a+w^3b+w^6c+w^9d) \\
= (a+b+c+d)(a+wb+w^2c+w^3d)(a+w^2b+c+w^2d)(a+w^3b+w^2c+wd) \\
= (a+b+c+d)(a+ib-c-id)(a-b+c-d)(a-ib-c+id)
\end{aligned}
$$

其中 $a+ib-c-id,\ a-ib-c+id$ 是共轭复数

## 曾有发表想法但砍掉的评论

本来想让LLM写mermaid代码画个这期视频的证明思路的算法流程图，但懒得了~

## B站发布：标题、标签、简介…

标题：《欧拉分解公式竟能在复数域完全展开！高中生也能听懂的证明~》

标签： 新学期多点新知识, 学渣逆袭, 高中生必看, 线性代数, 数值分析, 复数, 单位根, 欧拉分解公式, 循环矩阵, 特征值

```
以本科水平的数学知识重新回望中学数学，往往会有意想不到的惊喜！这期视频讲的是欧拉分解公式如何在复数域上完全展开，但我发现现有中文资料的痛点：
1. 需要高等代数知识，对非数学系学生不友好
2. LLM对这个问题的证明质量差，很多跳步、伪证
于是有了这期视频。我牺牲了一点严谨性，成功把所有对高等代数知识的依赖都去掉了。相信我的讲解能够让高中生也轻松理解！
slidev PPT 传送门： https://hans774882968.github.io/slidev-math-videos/260305
文字稿： https://github.com/Hans774882968/slidev-math-videos/blob/main/video-blogs/%E3%80%90slidev%E3%80%91%E6%AC%A7%E6%8B%89%E5%88%86%E8%A7%A3%E5%85%AC%E5%BC%8F%E7%AB%9F%E8%83%BD%E7%94%A8%E5%8D%95%E4%BD%8D%E6%A0%B9%E5%AE%8C%E5%85%A8%E5%B1%95%E5%BC%80%EF%BC%81.md
```

章节：

```
00:00 引言&题干
00:27 引入n阶循环矩阵
00:46 用基础循环阵研究一般循环阵
01:15 左乘基础循环阵的作用
01:38 基础循环阵的特征值、特征向量
02:14 一般循环矩阵的多项式表示
02:38 谱映射定理的多项式情形
02:54 给证明收尾
03:21 后记
```

互动引导加在末尾

投票弹幕：00:05

你觉得这题的证明难度如何

- 太水了
- 一般般
- 踮踮脚能够到
- 踮脚也够不着

评分弹幕：

- 03:00 给我的讲解打打分

封面：

```powershell
magick 260305-封面.png -resize 960x1280! 260305-封面-4x3.png
magick 260305-封面.png -resize 1440x1080! 260305-封面-3x4.png
```
