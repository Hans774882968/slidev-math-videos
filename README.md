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
