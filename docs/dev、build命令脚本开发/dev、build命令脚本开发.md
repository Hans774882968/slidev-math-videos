背景：本来懒得处理这个的，但是我在做live2d的`txt-bundle-for-dev.json`时，LLM生成了一个`predev`命令，所以我想借此机会，把目前积攒的所有dev和build命令收束进一个脚本。

## dev PPT 命令收束进脚本

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

## build PPT 命令收束进脚本

新开一个通义千问窗口：

大佬，你是一名专家前端工程师，精通前端工程化。我的slidev项目目前有以下命令：

```json
"build:slidev": "bun run build:251020 && bun run build:251021 && bun run build:251022 && ...",
"build:251020": "slidev build video-blogs/【slidev】排列组合：插空法、隔板法、捆绑法综合练习1.md --base /slidev-math-videos/251020/ --out ../dist/251020",
"build:251021": "slidev build video-blogs/测试.md --base /slidev-math-videos/251021/ --out ../dist/251021",
"build:251022": "slidev build video-blogs/【slidev】双曲换元？欧拉公式！这道数列题不需要注意力.md --base /slidev-math-videos/251022/ --out ../dist/251022",
```

使用`bun run build:slidev`就能构建这个项目里所有的slidev PPT。这些命令明显有重复模式，我希望你帮我写一个js脚本，它支持两种模式：

1. 默认构建所有PPT
2. 传入一组参数。比如：传入`251020`，只构建`251020`对应的PPT；传入`251020 251021`，只构建`251020`和`251021`对应的PPT

PPT文件路径在你写的js脚本硬编码。

---

它的实现用了JS对象`const PPT_CONFIGS = [{ id: '251020', input: 'video-blogs/【slidev】排列组合：插空法、隔板法、捆绑法综合练习1.md', out: '../dist/251020', base: '/slidev-math-videos/251020/' }, /* ... */]`，这里提醒下它：

大佬，`out`和`base`的前缀都是一样的，只需要传入id就能求出。因此可以直接使用下面的配置：

```js
const PPT_MAP = {
  '251020': 'video-blogs/【slidev】排列组合：插空法、隔板法、捆绑法综合练习1.md',
  '251021': 'video-blogs/测试.md',
  '251022': 'video-blogs/【slidev】双曲换元？欧拉公式！这道数列题不需要注意力.md',
  // ...
}
```

请重新实现！

---

这次OK了~
