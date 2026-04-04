## 旁白

```powershell
edge-tts --voice zh-CN-XiaoxiaoNeural --rate=+30% --file 'docs\从两个记忆小窍门聊起\文字稿1.md' --write-media media\260301\旁白1.mp3 --write-subtitles media\260301\旁白1.srt
```

## 让DeepSeek帮我写简介

大佬，我根据我们刚刚谈话的内容做了一期视频。请你帮我写一篇足够简洁的视频内容简介。

## B站发布：标题、标签、简介…

标题：《从两个记忆小窍门聊起：代码与生命哲学视角》

标签： 宝藏知识UP跃迁计划, 生命哲学, 经验分享, 背书方法, 校园学习, 元记忆, 学习心得

```
记忆是脑力工作者的基础能力。在LLM时代，仅靠博闻强记已不足以立足。但我仍然认为记忆这件事非常值得深挖！
今天我将分享两个我中学时就在用的记忆小窍门。它们虽不起眼，背后却藏着关于大脑结构、元记忆和生命哲学的硬核知识。希望能给同学们带来一些启发。
PPT 传送门： https://github.com/Hans774882968/slidev-math-videos/blob/main/docs/%E4%BB%8E%E4%B8%A4%E4%B8%AA%E8%AE%B0%E5%BF%86%E5%B0%8F%E7%AA%8D%E9%97%A8%E8%81%8A%E8%B5%B7/%E4%BB%8E%E4%B8%A4%E4%B8%AA%E8%AE%B0%E5%BF%86%E5%B0%8F%E7%AA%8D%E9%97%A8%E8%81%8A%E8%B5%B7-v2.html
文字稿： https://github.com/Hans774882968/slidev-math-videos/blob/main/docs/%E4%BB%8E%E4%B8%A4%E4%B8%AA%E8%AE%B0%E5%BF%86%E5%B0%8F%E7%AA%8D%E9%97%A8%E8%81%8A%E8%B5%B7/%E6%96%87%E5%AD%97%E7%A8%BF2.md
旁白模型：edge-tts 的 zh-CN-XiaoxiaoNeural
```

章节：

```
00:00 引言
00:21 窍门1：自行为文本赋予意义
01:32 为什么故事更长，却更好记
01:56 我们不断创造着意义
02:43 窍门2：背诵时顺便数句子个数
03:19 记句子个数对元记忆的好处
04:14 在AI时代回望记忆这件小事
05:57 附录
```

互动引导加在末尾

投票弹幕：00:10

你背诵课文时

- 常常会背错
- 偶尔会背错
- 总能准确背诵
- 我有其他想法

评分弹幕：

- 01:10 给这期视频打打分

封面：

```powershell
magick 260301-封面.png -resize 960x1280! 260301-封面-4x3.png
magick 260301-封面.png -resize 1440x1080! 260301-封面-3x4.png
```
