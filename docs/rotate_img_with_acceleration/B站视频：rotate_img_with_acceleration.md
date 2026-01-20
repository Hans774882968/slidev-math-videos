## 用即梦对够赞头像进行AI扩图

请对参考图片进行扩图，扩图后比例仍为1：1。希望图片人物的衣服上有欧拉公式e^{i\pi}+1=0

## 实现一个Vue组件，旋转'纳西妲-疑问-100x100.png'

大佬，请实现一个Vue组件，支持传入图片路径，用CSS3实现图片的匀速旋转，1.5s转一圈。技术栈：Vue3、Tailwind CSS。

## 新增评论：省流

省流：你说得对，但是《Slidev》是Anthony Fu自主研发的一款全新开源演示文稿框架。它诞生于一个被称作「前端娱乐圈」的幻想世界。在这里，被Vue3+Vite选中的人将被授予slidev命令行工具，导引Markdown之力。你将扮演一位名为「演讲者」的神秘角色，在自由的创作中邂逅风格各异、狂拽炫酷的前端特效们，和它们一起击败PowerPoint的垄断，找回失散的前端工程师岗位——同时，逐步发掘「前端已4」的真相…

## 旁白

```powershell
edge-tts --voice zh-CN-XiaoxiaoNeural --rate=+30% --file 'docs\rotate_img_with_acceleration\rotate_img_with_acceleration-文字稿.md' --write-media media\260115\rotate_img_with_acceleration-文字稿.mp3 --write-subtitles media\260115\rotate_img_with_acceleration-文字稿.srt
```

## B站发布：标题、标签、简介…

标题：《【manim】够赞旋转1分钟（附制作教程》

标签： 宝藏知识UP跃迁计划, Python, manim, 旋转一分钟, funkytown, 经验分享, 技术分享, 旋转矩阵, 旋转, slidev

```
今天带来的是用manim最基础的图形、动画能力做够赞旋转1分钟视频的教程。P1、P2分别是三维旋转加速效果和二维旋转加速效果。由于这段时间工作繁忙，这期视频的讲解会更为魔怔和跳跃。不知道大佬们觉得这种风格的旁白如何。
manim 源码传送门：
1. 继承`Scene`版（视频P2）： https://github.com/Hans774882968/manim-hw/blob/main/rotate_img_with_acceleration/rotate_img_with_acceleration.py
2. 继承`ThreeDScene`版（视频P1）： https://github.com/Hans774882968/manim-hw/blob/main/rotate_img_with_acceleration/rotate_3d_demo.py
3. DeepSeek想要实现的“更有戏剧性”的效果。我修好它的代码后也不过是普通的3D旋转： https://github.com/Hans774882968/manim-hw/blob/main/rotate_img_with_acceleration/rotate_3d_become_demo.py
4. 使用`Rotating`类实现（效果不好，仅供参考）： https://github.com/Hans774882968/manim-hw/blob/main/rotate_img_with_acceleration/rotating_demo.py
slidev PPT 传送门： https://hans774882968.github.io/slidev-math-videos/260115
文字稿： https://github.com/Hans774882968/slidev-math-videos/blob/main/video-blogs/%E3%80%90slidev%E3%80%91%E5%A4%9F%E8%B5%9E%E6%97%8B%E8%BD%AC1%E5%88%86%E9%92%9F.md
旁白模型：edge-tts 的 zh-CN-XiaoxiaoNeural
```

章节：

```
00:00 片头、二维旋转加速效果
00:57 运行现象观察
01:09 三维旋转加速效果
01:38 manim三维旋转实现原理
02:18 Scene和ThreeDScene效果对比
02:31 “更有戏剧性”的效果
02:58 点睛之笔：实现申鹤快乐计时器
03:13 附录：完整代码
03:18 在slidev中实现旋转图像组件
04:10 后记
```

互动引导加在末尾

P1、P2投票弹幕：00:10

你对manim可视化感兴趣吗

- 不关心
- 一般般
- 感兴趣

P3投票弹幕：03:40

喜欢我大前端吗

- 热爱可抵岁长
- 誓要转成后端
- 小前端闹麻了
- 前端是啥

评分弹幕：无

封面：

```powershell
magick 260115-封面.png -resize 960x1280! 260115-封面-4x3.png
magick 260115-封面.png -resize 1440x1080! 260115-封面-3x4.png
```
