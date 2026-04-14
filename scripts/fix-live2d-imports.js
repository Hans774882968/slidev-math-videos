import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.resolve(__dirname, '../public/live2d/cubism5');

// 匹配 import/export ... from '...' 或 "..."
// 排除: 已经带 .js/.json/.wasm 的，以及以 ./ 或 ../ 开头的相对路径（确保只处理相对导入）
const importRegex = /(from\s+['"]|\s*import\s+['"])(\.[^'"]+?)(['"])/g;

function fixFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  if (!importRegex.test(content)) return false;

  const newContent = content.replace(importRegex, (match, prefix, pathStr, suffix) => {
    // 如果路径已经包含扩展名，或者不是相对路径（如裸模块），则跳过
    if (/\.(js|json|wasm|css)$/.test(pathStr) || !pathStr.startsWith('.')) {
      return match;
    }
    // 否则添加 .js 后缀
    console.log(`  [Fix] ${filePath}: ${pathStr} -> ${pathStr}.js`);
    return `${prefix}${pathStr}.js${suffix}`;
  });

  fs.writeFileSync(filePath, newContent, 'utf-8');
  return true;
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.js')) {
      fixFile(fullPath);
    }
  }
}

console.log('🔧 Fixing Live2D Cubism5 imports...');
walk(targetDir);
console.log('✅ Done.');
