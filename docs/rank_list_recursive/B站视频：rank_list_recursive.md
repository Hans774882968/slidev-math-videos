### 为什么本次需求没选择用LLM生成代码

1. manim可视化需求共性：LLM没能力一步到位，所以代码需要改。但想要的效果往往很细节，一些情况下，写出描述这些细节的提示词的时间，和自己改好manim代码的时间都差不多了！
2. 本次需求的特殊性：生成背景的代码、元素运动到特定位置的代码都有参考，而且这些代码本来就是调整LLM生成的代码得到的，复制粘贴并手改的效率比写提示词还高

为了缩短讲解视频的时间，这段话不放在视频，只放在评论区了。

## 旁白

```powershell
edge-tts --voice zh-CN-XiaoxiaoNeural --rate=+30% --file 'docs\rank_list_recursive\rank_list_recursive-讲解文字稿.md' --write-media media\260109\讲解文字稿.mp3 --write-subtitles media\260109\讲解文字稿.srt
```

## B站发布：标题、标签、简介…

标题：《如何用manim实现锐评锐评锐评锐评前后端技术栈技术含量从夯到拉从夯到拉从夯到拉从夯到拉》

标签： 宝藏知识UP跃迁计划, Python, manim, 从夯到拉, 经验分享, 技术分享, 递归, 前端开发, 后端开发

```
今天带来的是用manim最基础的图形、动画能力做带有递归的从夯到拉锐评视频的教程。如果能够理解我前两期教学视频的所有内容，那么写出这期视频的代码将会很轻松~
注：成品是5层递归，但为了让视频标题不过长，只写了4层
manim 源码传送门：
1. 成品： https://github.com/Hans774882968/manim-hw/blob/main/rank_list_recursive/rank_list_recursive.py
2. 有突变过程的代码传送门： https://github.com/Hans774882968/manim-hw/blob/main/rank_list_recursive/bg_overlap.py
3. 无突变过程的代码传送门： https://github.com/Hans774882968/manim-hw/blob/main/rank_list_recursive/bg_overlap_correct.py
slidev PPT 传送门： https://hans774882968.github.io/slidev-math-videos/260109
文字稿： https://github.com/Hans774882968/slidev-math-videos/blob/main/video-blogs/%E3%80%90slidev%E3%80%91%E9%94%90%E8%AF%84%E9%94%90%E8%AF%84%E5%89%8D%E5%90%8E%E7%AB%AF%E6%8A%80%E6%9C%AF%E6%A0%88%E6%8A%80%E6%9C%AF%E5%90%AB%E9%87%8F%E4%BB%8E%E5%A4%AF%E5%88%B0%E6%8B%89%E4%BB%8E%E5%A4%AF%E5%88%B0%E6%8B%89.md
旁白模型：edge-tts 的 zh-CN-XiaoxiaoNeural
```

B站仅P2有章节：

```
00:00 片头&标题语句结构分析
01:08 生成多个背景
02:04 从夯到拉评价过程
03:27 素材移到排行榜正确位置
04:13 manim画面层级机制
05:01 递归评价背景本身
05:57 知识点总结
06:11 后记
```

互动引导加在末尾

P1加投票弹幕：00:15

喜欢我大前端吗

- 热爱可抵岁长
- 誓要转成后端
- 小前端闹麻了
- 前端是啥

P1加评分弹幕： 浅薄与魔怔程度 00:30

P1的互动引导加在01:36

P2加投票弹幕：00:25

你对manim可视化感兴趣吗

- 不关心
- 一般般
- 感兴趣

P2关联视频： 00:13 程序员失业出路

P2加评分弹幕： 本期教学怎么样呀 03:00

封面：

```powershell
magick 260109-封面.png -resize 960x1280! 260109-封面-4x3.png
magick 260109-封面.png -resize 1440x1080! 260109-封面-3x4.png
magick 260109-封面.png -resize 1080x1080! 260109-封面-1x1.png
```

## 抖音

标题：《锐评锐评前后端技术栈技术含量从夯到拉从夯到拉（manim教程》

挑战：无

话题： Python, manim, 从夯到拉, 技术分享, 递归

简介diff：无

章节diff：

```
00:00 成品
01:47 片头&标题语句结构分析
02:55 生成多个背景
03:51 从夯到拉评价过程
05:14 素材移到排行榜正确位置
06:00 manim画面层级机制
06:48 递归评价背景本身
07:44 知识点总结
07:58 后记
```

TODO: 抖音遭遇“不适宜公开”，暂时不知道怎么申诉

## 小红书

标题：《【manim】带递归的从夯到拉视频制作教程》（20字真难）

标签： Python, manim, 从夯到拉, 经验分享, 技术分享, 递归

简介只保留链接以上部分

章节diff：无
