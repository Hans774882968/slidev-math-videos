## 旁白

```powershell
edge-tts --voice zh-CN-XiaoxiaoNeural --rate=+30% --file 'docs\广东光大联考单选压轴\文字稿1.md' --write-media media\260120\文字稿1.mp3 --write-subtitles media\260120\文字稿1.srt
```

## B站发布：标题、标签、简介…

标题：《全网都只提到这题的两种解法？这里有解法3！广东光大联考单选压轴深度解析~》

标签： bilibili期末季, 学渣逆袭, 高中生必看, SageMath, 代数几何, Grobner基, 拉格朗日乘数法, 三角换元, 完全平方公式

```
这期视频我在广东光大联考刚结束时就想做，但我非常想提供完全不需要注意力的解法3。解法3难度比较大，所以视频直到现在才发。
这题虽然不难，但同时涉及了：n项的完全平方公式，用复数技能包求sine、cosine等差数列的和，拉格朗日乘数法+Grobner基。而且体现了对称性之美。可以说是审美价值、训练价值都拉满~
这期视频涉及的高等数学工具：拉格朗日乘数法、Gröbner基。
SageMath是一款开源Python数学软件，在Python语法基础上增加了些语法糖。所以理解本期视频还需要一丢丢编程常识
slidev PPT 传送门： https://hans774882968.github.io/slidev-math-videos/260120
文字稿： https://github.com/Hans774882968/slidev-math-videos/blob/main/video-blogs/%E3%80%90slidev%E3%80%91%E5%B9%BF%E4%B8%9C%E5%85%89%E5%A4%A7%E8%81%94%E8%80%83%E5%8D%95%E9%80%89%E5%8E%8B%E8%BD%B4.md
旁白模型：edge-tts 的 zh-CN-XiaoxiaoNeural
```

章节：

```
00:00 引言&题干
00:31 考场速通技巧
00:58 法1：直接设点（需要注意力）
02:12 法2：三角换元
02:34 证明正n边形为所求
03:07 法3：代数几何黑科技
04:10 艰难的回代代码调试过程
05:44 再求一次Grobner基，拿到答案
06:30 后记
```

互动引导加在末尾

关联视频：

- 02:55 长郡“大题造火箭”三角压轴
- 03:32 SageMath破解高中钓鱼题

投票弹幕：00:20

你觉得这题难度如何

- 太水了
- 一般般
- 踮踮脚能够到
- 踮脚也够不着

评分弹幕：

- 03:20 打acm打的

封面：

```powershell
magick 260120-封面.png -resize 960x1280! 260120-封面-4x3.png
magick 260120-封面.png -resize 1440x1080! 260120-封面-3x4.png
```
