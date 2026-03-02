## 旁白

```powershell
edge-tts --voice zh-CN-XiaoxiaoNeural --rate=+30% --file 'docs\从两个记忆小窍门聊起\文字稿1.md' --write-media media\260301\旁白1.mp3 --write-subtitles media\260301\旁白1.srt
```

## B站发布：标题、标签、简介…

标题：《从两个记忆小窍门聊起：代码与生命哲学视角》

标签： 宝藏知识UP跃迁计划, 学渣逆袭, 高中生必看, slidev

```

slidev PPT 传送门： https://hans774882968.github.io/slidev-math-videos/260301
文字稿： https://github.com/Hans774882968/slidev-math-videos/blob/main/docs/%E4%BB%8E%E4%B8%A4%E4%B8%AA%E8%AE%B0%E5%BF%86%E5%B0%8F%E7%AA%8D%E9%97%A8%E8%81%8A%E8%B5%B7/%E6%96%87%E5%AD%97%E7%A8%BF2.md
旁白模型：edge-tts 的 zh-CN-XiaoxiaoNeural
```

章节：

```
00:00 题干&枚举求解
02:18 附录1和附录2
02:34 给大家的新年祝福~
```

互动引导加在末尾

投票弹幕：00:15

你觉得这题难度如何

- 太水了
- 一般般
- 踮踮脚能够到
- 踮脚也够不着

评分弹幕：

- 01:10 给我的讲解打打分

封面：

```powershell
magick 260301-封面.png -resize 960x1280! 260301-封面-4x3.png
magick 260301-封面.png -resize 1440x1080! 260301-封面-3x4.png
```
