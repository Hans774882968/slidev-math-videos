## 旁白

```powershell
edge-tts --voice zh-CN-XiaoxiaoNeural --rate=+30% --file 'docs\260608\文字稿1.md' --write-media media\260608\文字稿1.mp3 --write-subtitles media\260608\文字稿1.srt
```

## autoslide

```powershell
bun autoslide -s media\260608\文字稿2.srt -t docs\260608\文字稿2.md -sc video-blogs\subtitle_cfg\根号四舍五入求和的有趣规律.json -r video-blogs\【slidev】根号四舍五入求和的有趣规律.md
```

## B站发布：标题、标签、简介…

标题：《根号四舍五入求和的有趣规律》

标签： 万物研究所, 学渣逆袭, 初中生必看, 成都一诊, 生成函数, 指数生成函数, 组合数学, 幂级数, 调和级数

```
Hans去年讲解了26成都一诊的压轴题，当时主要讲的是“期望的尾概率公式+容斥原理”方法，对注意力涣散的同学（包括Hans）并不友好。前两天我偶然发现，这题用生成函数和指数生成函数都不难推，难度仅仅相当于两道微积分习题！所以我马不停蹄地做了这期视频，和同学们分享这两种非常美好的方法。一起来领略组合数学的魅力吧！
PS：结尾有洗耳朵环节~
slidev PPT 传送门： https://hans774882968.github.io/slidev-math-videos/260608
文字稿： https://github.com/Hans774882968/slidev-math-videos/blob/main/video-blogs/
```

章节：

```
00:00 引言&题干
00:32 引入生成函数
07:30 总结OGF和EGF做法的异同
08:29 洗耳朵环节~
```

互动引导加在末尾

投票弹幕：00:20

你觉得这题难度如何

- 太水了
- 一般般
- 踮踮脚能够到
- 踮脚也够不着

评分弹幕：

- 02:20 Hans讲得怎么样

关联视频 无

封面：

```powershell
magick 260608-封面-3x4.png -resize 1161x1548! 260608-封面-4x3.png
```
