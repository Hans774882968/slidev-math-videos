import { defineConfig, Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

const BUNDLE_FILE_NAME = 'txt-bundle-for-dev.json';
const TEXT_EXTS = new Set(['.js', '.mjs', '.map', '.json', '.css', '.txt', '.md', '.html']);

function getLive2dBundle() {
  const BUNDLE_PATH = path.resolve(__dirname, `../public/live2d/${BUNDLE_FILE_NAME}`);

  try {
    if (fs.existsSync(BUNDLE_PATH)) {
      const live2dBundle: Record<string, { content: string; contentType: string }> = JSON.parse(fs.readFileSync(BUNDLE_PATH, 'utf-8'));
      console.log(`[get-live2d-resource-plugin] ✅ Loaded ${Object.keys(live2dBundle).length} bundled files from .bundle.json`);
      return live2dBundle;
    }
  } catch (err) {
    console.warn('[get-live2d-resource-plugin] ⚠️ Failed to load .bundle.json, falling back to disk read:', err);
    return null;
  }
}

const live2dBundle = getLive2dBundle();

const getLive2dResourcePlugin = (): Plugin => ({
  name: 'get-live2d-resource-plugin',
  configureServer(server) {
    // 中间件：拦截 /live2d/* 请求，映射到 public/live2d/ 。优先级：放在最前面
    server.middlewares.use(async (req, res, next) => {
      const url = req.url;
      if (!url) return next();

      // 🔍 匹配两种情况：
      // 1. /live2d/xxx (无 base 时)
      // 2. /slidev-math-videos/live2d/xxx (有 base 时)
      const live2dMatch = url.match(/^(?:\/[^/]+)?\/live2d\/(.+)$/);

      if (live2dMatch) {
        const relativePath = live2dMatch[1]; // 获取 live2d/ 后面的部分
        // 这里 __dirname 是 'video-blogs' 目录，所以需要 '..' 回到根目录
        const filePath = path.resolve(__dirname, '..', 'public', 'live2d', relativePath);

        try {
          const urlKeyForCache = `/live2d/${relativePath}`;
          if (live2dBundle && urlKeyForCache in live2dBundle) {
            const { content, contentType } = live2dBundle[urlKeyForCache];
            res.setHeader('Content-Type', contentType);
            res.setHeader('Cache-Control', 'no-cache'); // 开发环境禁用缓存，方便调试
            res.end(content);
            return;
          }

          // 📁 Bundle 未命中 → 磁盘读取
          const ext = path.extname(filePath).toLowerCase();
          const mimeTypes: Record<string, string> = {
            '.json': 'application/json',
            '.js': 'text/javascript; charset=utf-8',
            '.mjs': 'text/javascript; charset=utf-8',
            '.css': 'text/css; charset=utf-8',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.wasm': 'application/wasm',
            '.model3.json': 'application/json',
          };
          const contentType = mimeTypes[ext] || 'application/octet-stream';

          // 🚫 简单处理：如果文件不存在，返回 404
          if (!fs.existsSync(filePath)) {
            console.warn(`[get-live2d-resource-plugin] 404: ${filePath}`);
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not Found');
            return;
          }

          res.setHeader('Content-Type', contentType);
          res.setHeader('Cache-Control', 'no-cache'); // 开发环境禁用缓存，方便调试

          if(TEXT_EXTS.has(ext)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            res.end(content);
          } else {
            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res);
          }
        } catch (err) {
          console.error(`[get-live2d-resource-plugin] Error serving ${filePath}:`, err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Internal Server Error');
        }
        return; // ✅ 拦截成功，不再调用 next()
      }

      // ❌ 不是 live2d 请求，交给下一个中间件
      next();
    });
  },
});

export default defineConfig({
  plugins: [
    getLive2dResourcePlugin(),
  ],
});
