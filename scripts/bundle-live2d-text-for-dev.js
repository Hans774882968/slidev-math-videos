import fs from 'fs';
import path from 'path';

const BUNDLE_FILE_NAME = 'txt-bundle-for-dev.json';
const LIVE2D_SRC = path.resolve(__dirname, '../public/live2d');
const OUTPUT_FILE = path.resolve(__dirname, `../public/live2d/${BUNDLE_FILE_NAME}`);
const TEXT_EXTS = new Set(['.js', '.mjs', '.map', '.json', '.css', '.txt', '.md', '.html']);

// 📦 MIME 类型映射（预存到 bundle，避免中间件重复计算）
const MIME_TYPES = {
  '.json': 'application/json',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
};

/**
 * 递归扫描目录，收集文本文件内容
 * @param {string} dir 当前扫描目录
 * @param {string} baseDir 根目录（用于计算相对路径）
 * @param {Object} result 结果对象（引用传递）
 */
function walk(dir, baseDir, result) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    const urlKey = `/live2d/${relativePath.replace(/\\/g, '/')}`;

    if (entry.isDirectory()) {
      walk(fullPath, baseDir, result);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      // 别忘了规避掉自己！
      if (entry.name === BUNDLE_FILE_NAME) continue;
      if (!TEXT_EXTS.has(ext)) continue;
      try {
        const content = fs.readFileSync(fullPath, 'utf-8');
        result[urlKey] = {
          content,
          contentType: MIME_TYPES[ext] || 'text/plain; charset=utf-8',
        };
      } catch (err) {
        console.warn(`  ✗ Failed to read ${urlKey}:`, err.message);
      }
    }
  }
}

function main() {
  console.log('📦 Bundling Live2D text files...');
  console.log(`SrcDir: ${LIVE2D_SRC}`);
  console.log(`Output: ${OUTPUT_FILE}\n`);

  const bundle = {};
  walk(LIVE2D_SRC, LIVE2D_SRC, bundle);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(bundle, null, 2) + '\n', 'utf-8');

  console.log(`✅ Done! Bundled ${Object.keys(bundle).length} files.`);
  console.log(`📊 Estimated size: ${(Buffer.byteLength(JSON.stringify(bundle), 'utf-8') / 1024).toFixed(2)} KB`);
}

main();
