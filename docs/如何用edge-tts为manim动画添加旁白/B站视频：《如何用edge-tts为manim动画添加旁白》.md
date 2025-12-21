## 生成多段旁白音频场景下，如何对齐字幕

用Subtitle Edit实现就行

## 生成旁白

```powershell
edge-tts --voice zh-CN-XiaoxiaoNeural --rate=+20% --file docs\如何用edge-tts为manim动画添加旁白\如何用edge-tts为manim动画添加旁白-文字稿1.md --write-media media\251219\旁白1.mp3 --write-subtitles media\251219\旁白1.srt
```

## 视频发布后复盘

原本以为这期视频会成为播放数据断崖式最低，没想到周六中午到周日半夜，还是积累了324播放，12个赞。

这期视频不只是为了回答那位提问的同学，也是在为下期视频做准备。这种类型的视频的制作流程如下：

1. 每录一次屏（多一个素材），都把它拖进剪辑工程，推进一点点剪辑进度
2. 为录屏剪辑的过程中，可以逐步确定视频的时间轴，于是旁白的编写进度也可以推进
3. 我是用PPT来填充没有录屏素材的那些时间（PPT占时间大头）的。所以需要先把旁白写得差不多才能逐步写好PPT。PPT录屏作为最后一个素材拖进剪辑工程。只有PPT做到只占第一条视频轨道，才能做到第二条视频轨道放动态背景

总结：录屏、文案先行，PPT进度最靠后

## B站发布：标题、标签、简介…

标题：《【技术分享】如何用听感更顺耳的edge-tts为manim动画添加旁白》

标签： 宝藏知识UP跃迁计划, slidev, 技术分享, 经验分享, manim, Python, TTS, edge-tts, kdenlive, 开源

```
最近有小伙伴问我怎么用edge-tts为manim动画添加旁白。我想可能会有其他小伙伴也受够了某些常用剪辑软件的默认旁白
想试试听起来更顺耳的edge-tts，所以我临时加更了这期视频，跟小伙伴们分享我个人的经验~
到目前为止我制作的所有视频所采用的解决方案都比较“程序员”。没有技术背景的小伙伴感觉这样的解决方案选型怎么样呢？
本期视频主要内容（省流）：
1. edge-tts的安装、使用和踩坑经验分享
2. 如何用edge-tts为manim动画添加旁白
3. edge-tts生成的字幕文件有莫名其妙的空隙，怎么办？
4. 我的纯前端开源项目的预告
slidev PPT 传送门： https://hans774882968.github.io/slidev-math-videos/251219
文字稿： https://github.com/Hans774882968/slidev-math-videos/blob/main/video-blogs/%E3%80%90slidev%E3%80%91%E5%A6%82%E4%BD%95%E7%94%A8edge-tts%E4%B8%BAmanim%E5%8A%A8%E7%94%BB%E6%B7%BB%E5%8A%A0%E6%97%81%E7%99%BD.md
GPT-SoVITS开发者：@花儿不哭
模型训练者：@红血球AE3803 & @白菜工厂1145号员工
推理特化包适配 & 在线推理：@AI-Hobbyist
```

章节：

```
00:00 引言
00:18 edge-tts安装、踩坑经验
01:09 edge-tts的使用
02:03 edge-tts和manim动画配合
02:57 字幕文件有预期外空隙咋办
03:25 我的纯前端开源项目预告
```

互动引导加在03:25

投票弹幕：02:05

你觉得这套方案如何

- 不得行
- 一般般
- 还可以
- 我有其他想法

评分弹幕

- 03:40 纳西妲卡哇伊

封面：

```powershell
magick 251219-封面.png -resize 960x1280! 251219-封面-4x3.png
magick 251219-封面.png -resize 1440x1080! 251219-封面-3x4.png
```
