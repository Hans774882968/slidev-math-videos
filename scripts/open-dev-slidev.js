import { spawn } from 'node:child_process';
import PPT_MAP from './ppt-map';

const id = process.argv[2];

if (!id) {
  console.error('❌ 请传入 PPT ID，例如：bun run scripts/open-dev-slidev.js 251020');
  console.log(`💡 已注册的 ID: ${Object.keys(PPT_MAP).join(', ')}`);
  process.exit(114514);
}

const filePath = PPT_MAP[id];
if (!filePath) {
  console.error(`❌ 未找到 ID "${id}" 对应的文件 qwq`);
  console.log(`💡 已注册的 ID: ${Object.keys(PPT_MAP).join(', ')}`);
  process.exit(114514);
}

console.log(`🚀 正在启动 Slidev PPT (ID: ${id})...`);
console.log(`📄 目标文件: ${filePath}`);
console.log(`🌐 Base 路径: /${id}/  | 端口: 5225`);

// 使用 spawn 启动子进程，实时透传 stdout/stderr，支持 Ctrl+C 正确退出
const slidev_process = spawn(
  'slidev',
  [filePath, '--base', `/${id}/`, '--open', '-p', '5225'],
  { stdio: 'inherit', shell: true }
);

slidev_process.on('error', (err) => {
  console.error('❌ 启动失败:', err.message);
  process.exit(114514);
});

slidev_process.on('close', (code) => {
  process.exit(code ?? 0);
});
