## 生成多段旁白音频场景下，如何对齐字幕

用Subtitle Edit实现就行

## 生成旁白

```powershell
edge-tts --voice zh-CN-XiaoxiaoNeural --rate=+20% --file docs\如何用edge-tts为manim动画添加旁白\如何用edge-tts为manim动画添加旁白-文字稿1.md --write-media media\251219\旁白1.mp3 --write-subtitles media\251219\旁白1.srt
```

## B站发布：标题、标签、简介…

标题：《》

标签： 宝藏知识UP跃迁计划, slidev, 经验分享

```

slidev PPT 传送门： https://hans774882968.github.io/slidev-math-videos/251219
文字稿： https://github.com/Hans774882968/slidev-math-videos/blob/main/video-blogs/
GPT-SoVITS开发者：@花儿不哭
模型训练者：@红血球AE3803 & @白菜工厂1145号员工
推理特化包适配 & 在线推理：@AI-Hobbyist
```

章节：

```
00:00 题干
00:44 
05:24 后记
```

互动引导加在末尾

投票弹幕：00:25

你觉得这两题难度如何

- 太水了
- 一般般
- 踮踮脚能够到
- 踮脚也够不着

评分弹幕

- 00:40 纳西妲卡哇伊

封面：

```powershell
magick 251219-封面.png -resize 960x1280! 251219-封面-4x3.png
magick 251219-封面.png -resize 1440x1080! 251219-封面-3x4.png
```

