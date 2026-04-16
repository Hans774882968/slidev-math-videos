谢谢大佬！我的slidev项目目前在开发环境请求live2d目录下的文件时，拿不到东西。接下来请帮我写代码，在开发环境，把发到live2d目录的请求匹配到对应的根目录/public/live2d目录下的文件。比如localhost:5226/live2d/foo.json返回public/live2d/foo.json

这里不太确定slidev是否能读取自己定义的`vite.config.ts`（后来查了官方文档发现是OK的），所以问：

---

大佬，你确定slidev项目支持自己创建vite.config.ts吗

可惜的是，LLM在此开始幻觉了。不过我已经在官方文档查到了相关信息，所以在`video_blogs`文件夹下创建了`vite.config.ts`

---

大佬，你的代码有TS报错：'configureServer' does not exist in type 'UserConfigExport'，且实测开发环境下没有成功进入configureServer函数。但实测这个vite.config.ts确实成功被slidev检测到了。请在我给你的代码的基础上修改：

LLM发现自己写的configureServer函数不应该放在defineConfig，而应该放在自定义插件里。于是成功运行。但是所有文件都404，这是因为`__dirname`是在`video_blogs`文件夹下（竟然不是项目根目录？我明明是在项目根目录执行的命令啊），于是把文件路径改成了：`const filePath = path.resolve(__dirname, '..', 'public', 'live2d', relativePath);`

---

现在已经能正常展示live2d模型，但每次进入页面都会卡一下，这是因为每次进入页面都会读取几十个文件。而每次切换live2d模型也需要读取15个文件。所以，我打算把live2d的所有文本文件打包进一个json。在启动开发服务器时读一次这个大json，后面就都从json读。为了方便，不做监听文件变化之类的高级操作，假设所有文本文件都不会改变。下面是提示词：

大佬，现在开发环境已经能正常展示live2d模型。但每次进入页面都会卡一下，这是因为每次进入页面都会读取几十个文件。我想做一个简单的优化，初步设想它分两步实现：

1. 写一个js脚本，读取live2d文件夹下的所有文本文件，把它们的内容合并进json。json的键为请求的URL，值为文件内容
2. 启动开发服务器时，读一次json文件，放进内存。后续所有请求都从内存读

请先和我一起头脑风暴，看看这个方案有什么问题，或者有没有更好的方案。确认好方案再更新代码。

下面是我现有的正常工作的`video-blogs\vite.config.ts`：

（`video-blogs\vite.config.ts`的内容

---

大佬，仍然采用我的方案：

1. 预合并 JSON 只考虑文本文件，不考虑二进制文件
2. 模型文件很少更改，因此“重新运行脚本生成 JSON 并重启开发服务器”是可以接受的。为了简便，我们不做文件变更检测等高级操作，JSON纯手工维护
3. 只考虑文本文件的情况下，预计JSON不会太大，约有100个文本文件，文本文件总大小约200kb。
4. JSON未命中（比如当前请求了一个二进制文件）时，按现有实现，从磁盘读取文件内容并返回

---

通义千问开发的脚本一次性OK，只不过代码质量不高，所以我自己修改了下。效果：已经能从内存拿数据并返回前端了，但仍然有卡顿现象。说明我之前猜测的瓶颈不对，可能就是请求个数一多就要卡。

然后为了能够每次预览PPT都能更新`txt-bundle-for-dev.json`，我顺便把dev PPT命令收束进了一个脚本。提示词详见：`docs\dev、build命令脚本开发\dev、build命令脚本开发.md`。涉及的小知识：npm支持pre钩子：如果设置了`predev`命令，那么在执行`bun dev`命令的情况下，会先执行`predev`的命令，再执行`dev`的命令。

顺便小决断：`txt-bundle-for-dev.json`有1.4 MB ，太大了，不传 GitHub 了
