背景：本来懒得处理这个的，但是我在做live2d的`txt-bundle-for-dev.json`时，LLM生成了一个`predev`命令，所以我想借此机会，把目前积攒的所有dev和build命令收束进一个脚本。

## dev PPT命令收束进脚本

dev收束范围：仅考虑PPT的，不考虑`"dev:index": "bunx --bun vite",`这个。

先做dev，后续有时间再做build

新开一个通义千问窗口：

大佬，你是一名专家前端工程师，精通前端工程化。我的slidev项目目前有以下命令：

```json
"dev:251020": "slidev video-blogs/【slidev】排列组合：插空法、隔板法、捆绑法综合练习1.md --base /251020/ --open -p 5225",
"dev:251022": "slidev video-blogs/【slidev】双曲换元？欧拉公式！这道数列题不需要注意力.md --base /251022/ --open -p 5225",
"dev:251114": "slidev video-blogs/【slidev】《高中数学竞赛培优教程》好题：函数性质+组合数定义.md --base /251114/ --open -p 5225",
```

我会使用`bun dev:251020`之类的命令来启动开发服务器，查看某个slidev的PPT。这些命令明显有重复模式，我希望你帮我写一个js脚本，传入一个参数比如`251020`，自动执行对应的slidev命令。PPT文件路径在你写的js脚本硬编码。
