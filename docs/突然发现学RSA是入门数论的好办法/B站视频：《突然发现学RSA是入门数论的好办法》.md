## 旁白

```powershell
edge-tts --voice zh-CN-XiaoxiaoNeural --rate=+30% --file 'docs\突然发现学RSA是入门数论的好办法\文字稿1.md' --write-media media\260309\文字稿1.mp3 --write-subtitles media\260309\文字稿1.srt
```

## 新增评论：提供RSA流程图、RSA+CRT流程图、辅助代码

在B站发的是：这里分别是RSA流程图，d_p、d_q加速RSA解密流程图，d_p、d_q加速RSA解密的演示脚本~

后面改成：这里分别是RSA流程图，d_p、d_q加速RSA解密流程图，d_p、d_q加速RSA解密的演示代码~

## B站发布：标题、标签、简介…

标题：《【CTF Crypto】突然发现，学RSA是入门数论的好办法~》

标签： 新学期多点新知识, 学渣逆袭, 高中生必看, CTF, 密码学, Python, 中国剩余定理, 欧拉定理, 裴蜀定理, RSA

```
突然发现，学RSA是入门数论的好办法！这期视频选择了几道简单的RSA题，来和同学们一起在写代码的过程中，更好地掌握一些入门级的数论知识。
代码运行环境：Python 3.10.2。安装pycryptodome、gmpy2、libnum
slidev PPT 传送门： https://hans774882968.github.io/slidev-math-videos/260309
文字稿： https://github.com/Hans774882968/slidev-math-videos/blob/main/video-blogs/%E3%80%90slidev%E3%80%91%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%AD%A6RSA%E6%98%AF%E5%85%A5%E9%97%A8%E6%95%B0%E8%AE%BA%E7%9A%84%E5%A5%BD%E5%8A%9E%E6%B3%95.md
```

章节：

```
00:00 引言
00:40 数论知识简介&代码运行环境配置
02:05 RSA加解密全流程介绍
03:36 RSA正确性证明
04:35 buu rsarsa
05:05 buu RSAROLL
05:22 青岑CTF-初识RSA
06:03 buu RSA1-Garner公式
07:44 buu RSA3-共模攻击模板
08:49 附录&后记
```

互动引导加在末尾

投票弹幕：00:10

你觉得这5道题的难度如何

- 太水了
- 一般般
- 踮踮脚能够到
- 踮脚也够不着

评分弹幕：

- 03:20 这张流程图怎么样

封面：

```powershell
magick 260309-封面.png -resize 960x1280! 260309-封面-4x3.png
magick 260309-封面.png -resize 1440x1080! 260309-封面-3x4.png
```

## 抖音

标题：《【CTF Crypto】突然发现学RSA是入门数论的好办法~》（30字真难）

话题： CTF, 密码学, 中国剩余定理, 裴蜀定理, RSA

简介只保留链接以上部分

章节diff：

- 00:40 数论知识&代码环境配置

## 小红书

标题：《【CTF】突然发现学RSA是入门数论的好办法~》（20字真难）

标签： 学渣逆袭, 高中生必看, CTF, 密码学, Python, 中国剩余定理, 欧拉定理, 裴蜀定理, RSA

简介只保留链接以上部分

章节diff：

- 00:40 数论知识&代码运行环境配置
- 06:03 RSA1-Garner公式
- 07:44 buuRSA3-共模攻击模板
