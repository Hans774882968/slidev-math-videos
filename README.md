[TOC]

## 引言

专为制作我的B站数学/代码类视频而生的纯前端项目。仅包含一系列自动播放的数学/代码类PPT。

技术栈：

- slidev
- 用vite+vue3实现首页
- 部署到GitHub Pages

TODO

## 配置slidev

创建slidev项目：`bun create slidev`。填写完毕后会自动安装依赖+启动项目。但我遇到个小坑：只支持node 20及以上。这个好解决，nvm切换一下node版本就行。

slidev只支持单个PPT，这就有点难受，因为我想要的是：

1. 首页展示PPT列表
2. 点击某个卡片，进入对应PPT页面
3. 在PPT页面，可以点击某个元素返回首页

kimi k2给我的办法是：

1. 首页可以用简单的HTML实现，也可以做一个完整的前端项目，vite什么的全都引进来都OK（slidev项目虽然基于vite+vue3，但并不会在我们的项目根目录生成`vite.config.ts`）。但不用vue或react的路由系统，而是直接用原生a标签
2. 修改ppt文档打包命令

```json
"build": "bun run build:index && bun run build:slidev",
"build:index": "bunx --bun vite build",
"build:slidev": "bun run build:251020 && bun run build:251021",
"build:251020": "slidev build video-blogs/【slidev】排列组合：插空法、隔板法、捆绑法综合练习1.md --base /slidev-math-videos/251020/ --out ../dist/251020",
"build:251021": "slidev build video-blogs/测试.md --base /slidev-math-videos/251021/ --out ../dist/251021",
```

3. 本地用vite预览：

```json
"preview": "bunx --bun vite preview",
```

### 回到首页按钮

查看[官方文档](https://cn.sli.dev/features/global-layers)可知，我们在`custom-nav-controls.vue`中添加按钮就行。但官方文档没说实现同款按钮的最佳实践，我这里就说下。

1. 它要和文档放在同一个目录下，即`video-blogs\custom-nav-controls.vue`
2. 检查元素可知，包裹svg的盒子需要用类名`slidev-icon-btn`
3. 查看[官方文档](https://cn.sli.dev/features/icons#%E5%9B%BE%E6%A0%87)可知，slidev支持很多图标库，比如我在代码中选择的是`carbon`图标集的`home`图标，就写成`carbon:home`。但检查元素发现，这个图标默认大小是`1.2em`，而slidev导航栏的其他图标大小是`1em`，需要手动调一下

### 实现 slidev PPT 自动翻页

[相关组件：`video-blogs\components\AutoSlide.vue`](https://github.com/Hans774882968/slidev-math-videos/blob/main/video-blogs/components/AutoSlide.vue)。代码比较长，就不贴出来了。只简单说些注意点。

1. 用`async/await`来实现阻塞，并且需要实现一个`sleep`函数
2. 我这里用了递归来实现，因为挺符合直觉的。用二重循环实现也OK的

## 配置用于打包首页的项目

我们先用vite脚手架创建一个vue项目：

```powershell
bun create vite foo-bar
```

然后把相关代码整合进这个项目。参考脚手架的项目，我们需要复制3个`tsconfig.xx.json`，以及装依赖

```powershell
bun add -D @types/node @vitejs/plugin-vue @vue/tsconfig typescript
```

### 配置tailwind css

和vite+react项目完全一样。略

### 配置eslint

```powershell
bun add -D eslint eslint-plugin-vue vue-eslint-parser globals @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

然后写`eslint.config.js`。参考kimi k2的输出，我们配置

```ts
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';

...vuePlugin.configs['flat/recommended'],
{
  files: ['**/*.vue'],
  languageOptions: { parser: vuePlugin.parser },
},
{
  files: ['**/*.{js,jsx,ts}'],
  extends: [
    js.configs.recommended,
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ...globals.node,
      ...globals.browser,
    },
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      ecmaFeatures: { jsx: true },
      sourceType: 'module',
    },
  },
  plugins: { '@typescript-eslint': tsPlugin },
  rules: {
    ...tsPlugin.configs.recommended.rules,
    // ...
  }
}
```

### 配置动画库`@vueuse/motion`

问LLM得到的回答并不靠谱。亲测发现，只需要先`bun add @vueuse/motion`，然后

```ts
import { MotionPlugin } from '@vueuse/motion';

createApp(App)
  .use(router)
  .use(MotionPlugin)
  .mount('#app');
```

就能用了。

## 部署到GitHub Pages

还是参考我之前[博客的《【常规】部署到 GitHub Pages》](https://www.52pojie.cn/thread-2048343-1-1.html)一节来操作的。我之前的[tpm](https://github.com/Hans774882968/teaching-plan-analytic-geometry)和[wasm-re-hw](https://github.com/Hans774882968/wasm-re-hw)项目的workflow都比较特殊，需要一些定制，但这个项目的workflow没有任何特殊之处，可以算是最简单的前端项目部署模板了。[传送门](https://github.com/Hans774882968/slidev-math-videos/blob/main/.github/workflows/main.yml)

注意到slidev会为每个PPT都生成一个`404.html`，但实测这个不会发挥作用。在没有给GitHub Pages配置自定义全局`404.html`的情况下，在浏览器地址栏输入各种URL，测试结果如下：

- 访问`/slidev-math-videos`或`/slidev-math-videos/`，正常进入首页
- 访问`/slidev-math-videos/251020`或`/slidev-math-videos/251020/`，可以自动重定向到`slidev-math-videos/251020/1`，即第一页PPT，符合预期
- 访问`/slidev-math-videos/251020/1`，或者2、3等，都会返回GitHub Pages默认的404页面
- 访问不存在的PPT，比如`slidev-math-videos/114514`或`slidev-math-videos/114514/`，也都返回GitHub Pages默认的404页面

综上，我们只需要和其他前端项目一样，参考我上面的博客去配置`404.html`就行。

> 在`404.html`写JS，转到首页，并带上一个query参数，让首页能够拿到目标网址

但我发现，在本地`bun preview`时，直接在浏览器地址栏输入`/slidev-math-videos/251020/`，只能跳转到首页，而首页的打包产物无法处理这个路由。这个我认为无伤大雅，不理它了。

### 251021更新：`404.html`做跳转的标准方案需要魔改才适用于这个项目

我发现按之前两个项目的标准跳转方案，我无法顺利到达对应的PPT页码，而且还会陷入`404.html` → 首页跳转的死循环。因此我需要在原来方案的基础上修改：

1. `404.html`的跳转代码不变
2. 首页仅负责跳转到对应的PPT，但要加入一个query参数`page=<str>`
3. PPT页面拿到`page`参数，尝试解析为数字，如果成功，则跳转到对应页码；否则toast提示

相关提示词：

```markdown
大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。我有一个vite+vue3项目，用于实现首页。相关代码如下：

`src\App.vue`：

onMounted(redirectToDestination);

`src\lib\routeUtils.ts`：

export function redirectToDestination() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirectPath = urlParams.get('redirect');
  if (!redirectPath) {
    return;
  }
  // 移除重定向参数
  const cleanPath = window.location.pathname + window.location.search.replace(/\?redirect=.*/, '');
  window.history.replaceState(null, '', cleanPath);
  window.location.href = redirectPath;
}

现在我希望把以上代码升级为：

1. 首页判断`const isGitHubPages = import.meta.env.VITE_DEPLOY_TARGET === 'github-pages';`如果为true，则获取 cleanPath 的第2、3个斜杠之间的内容，否则取第1、2个斜杠之间的内容，记为 pptPath 。我们截取 cleanPath 中 pptPath 及之前的内容，作为以上代码 redirectPath ， pptPath 之后是斜杠，记斜杠下一个字符到结尾的内容，作为我们要跳转的PPT的页码，一般情况下这个页码是一个数字（检验页码的逻辑放到后一部分），把它放进 redirectPath 的 query 参数里，参数名为 page
2. 在我的项目里，如果 redirectPath 合法，就一定是跳转到对应的PPT里。PPT是用 slidev 实现的，所以请你帮我实现一个vue组件，组件里读取url的上述 page 参数。如果页码不是一个正整数，就展示一个toast消息提示页码不合法。否则就跳转到对应的页码

一些有用的信息：

1. 这个项目的URL目前有：首页`/slidev-math-videos/`，slidev PPT：`/slidev-math-videos/251020/`，slidev PPT：`/slidev-math-videos/251021/`。有页码的例子：`/slidev-math-videos/251020/3`

最佳实践：

1. 遵循DRY原则，3次及以上重复出现的代码应抽象为函数、子组件等
2. 使用early return、early break、early continue，减少代码嵌套层级
```

提示词写得很用心，但确实描述得挺模糊的，通义千问生成的代码基本上是胡说八道，最后改它代码的时间可能都够自己实现一遍了。PS：我告诉它它写的PPT翻页的代码不对，它再次思考的成果是：“然而，Slidev 暴露了全局的 nav 对象用于导航！✅ 正确方案：使用 Slidev 内置的 `nav.go()` API”额…实测正确的写法是`$nav.value.go(page + 1)`。我怀疑最近各大模型都降智了（可能是因为我用得多，杀熟），没以前那种良好的开发体验了。

产出：

1. 修改后的`src\lib\routeUtils.ts`的`redirectToDestination`方法
2. `video-blogs\components\SlidevPageRedirector.vue`。注意，组件相对于PPT文档的路径必须是`components/xxx`

因为GitHub Pages太过鸡肋，我们在此竟然设置了3层跳板…流程如下：

1. https://hans774882968.github.io/slidev-math-videos/251021/3 返回`404.html`
2. https://hans774882968.github.io/slidev-math-videos/?redirect=%2Fslidev-math-videos%2F251021%2F3
3. 请求进入 PPT 的第一页，但带有`page`参数 https://hans774882968.github.io/slidev-math-videos/251021/?page=3
4. 进入正确的页码 https://hans774882968.github.io/slidev-math-videos/251021/3?page=3

## 我如何用`slidev`制作PPT类数学视频

个人的方案是：

1. 写好文案和PPT
2. `edge-tts`生成AI旁白，获得音频和字幕文件
3. 根据字幕文件确定slidev PPT自动播放的时间间隔，一般每个PPT的停留时间会多给2s，而一开始的PPT会多给十几秒，因为我们点击开始录屏是需要时间的
4. 用slidev提供的录屏功能录屏。实测拿到的mp4文件没有时长信息，需要用`ffmpeg`处理一下，并且分辨率是1920*968、30帧。这里也可以考虑用OBS录屏，但OBS录屏用起来有点难受
5. 用`kdenlive`剪辑

### Chrome原生“分享标签页”录屏所得mp4没有时长信息

根据kimi k2的说法，执行下面的命令就能加上

```powershell
ffmpeg -i 双曲换元？欧拉公式！.mp4 -c copy 双曲换元？欧拉公式！-o.mp4
```

亲测可行

## 静态资源踩坑记录

搜索引擎、官方文档都没有找到怎样有效地引用图片等静态资源。亲测以下方案有效：

1. 图片路径`video-blogs\public\251124\img.png`，引用`![](/public/251124/img.png)`或`![](./public/251124/img.png)`。这两个引用的效果一样，但后者能让VSCode显示图片，前者不能。看打包产物，它会同时被打包到`dist\251124\251124\img.png`和`dist\251124\assets\img-[hash].png`
2. 图片路径`video-blogs\assets\251124\img.png`，引用`![](./assets/251124/img.png)`。有效，而且VSCode能显示图片。看打包产物，它只会打包到`dist\251124\assets\img-[hash].png`

我们进一步探究“2”，把文件夹名从`assets`改成`fooBar`，并引用`![](./fooBar/251124/img.png)`。发现在开发和生产环境都有效，而且VSCode能显示图片。看打包产物，它仍然是被打包到`dist\251124\assets\img-[hash].png`
