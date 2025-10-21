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
"build:251020": "slidev build video-blogs/【slidev】插空法、隔板法、捆绑法综合练习1.md --base /slidev-math-videos/251020/ --out ../dist/251020",
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
