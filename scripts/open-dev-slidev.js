import { spawn } from 'node:child_process';

const PPT_MAP = {
  '251020': 'video-blogs/【slidev】排列组合：插空法、隔板法、捆绑法综合练习1.md',
  '251021': 'video-blogs/测试.md',
  '251022': 'video-blogs/【slidev】双曲换元？欧拉公式！这道数列题不需要注意力.md',
  '251114': 'video-blogs/【slidev】《高中数学竞赛培优教程》好题：函数性质+组合数定义.md',
  '251117': 'video-blogs/【slidev】f(f(n))=3n，超越原题，求通项公式，保姆级教程！.md',
  '251124': 'video-blogs/【slidev】深圳26届高三第一次模拟联测解三角形.md',
  '251126': 'video-blogs/【slidev】深圳26届高三第一次模拟联测导数题.md',
  '251128': 'video-blogs/【slidev】深圳26届高三第一次模拟联测压轴题命题背景揭晓.md',
  '251204': 'video-blogs/【slidev】大题造火箭！长郡二十校26届高三12月联考三角导数压轴.md',
  '251209': 'video-blogs/【slidev】湖南师大附中26届高三第4次月考数论题和一道类似的竞赛题串讲.md',
  '251210': 'video-blogs/【slidev】纳西妲遇到两道涉及数论的数列题，哥哥姐姐们可以帮帮她吗.md',
  '251219': 'video-blogs/【slidev】如何用edge-tts为manim动画添加旁白.md',
  '251222': 'video-blogs/【slidev】26考研数学数一第21题和25年数三第21题串讲.md',
  '251226': 'video-blogs/【slidev】26成都一诊组合数学压轴.md',
  '251230': 'video-blogs/【slidev】2023四省联考经典好题T16：布尔代数+高斯消元.md',
  '260105': 'video-blogs/【slidev】一起用CTF Crypto技能包破解这道高中钓鱼题.md',
  '260109': 'video-blogs/【slidev】锐评锐评前后端技术栈技术含量从夯到拉从夯到拉.md',
  '260111_t': 'video-blogs/【slidev】模板.md',
  '260115': 'video-blogs/【slidev】够赞旋转1分钟.md',
  '260120': 'video-blogs/【slidev】广东光大联考单选压轴.md',
  '260126': 'video-blogs/【slidev】再次回头看2021北大强基三元对称式的题.md',
  '260202': 'video-blogs/橘雪莉科普男生超级扣分的几点.md',
  '260204': 'video-blogs/【slidev】麻省理工学院2026积分大赛-弓箭积分.md',
  '260206': 'video-blogs/【slidev】复合根式化简第2期-Grobner基，启动.md',
  '260213': 'video-blogs/【slidev】复合根式化简第1期-复习初中知识.md',
  '260215': 'video-blogs/【slidev】只属于2026的数学题.md',
  '260305': 'video-blogs/【slidev】欧拉分解公式竟能用单位根完全展开！.md',
  '260309': 'video-blogs/【slidev】突然发现学RSA是入门数论的好办法.md',
  '260316': 'video-blogs/【slidev】武汉二调组合数学压轴一题三解.md',
  '260319_t': 'video-blogs/【slidev】封面风格260319.md',
  '260319_t_2': 'video-blogs/【slidev】封面风格260319_2.md',
  '260320': 'video-blogs/【slidev】赣州一模压轴题-概率dp.md',
  '260327': 'video-blogs/【slidev】26广东一模二维dp压轴.md',
  '260406_t': 'video-blogs/【slidev】scholarly主题示例.md',
  '260410': 'video-blogs/【slidev】26成都二诊三角换元压轴.md',
  '260426': 'video-blogs/【slidev】26汕头高三期末T14.md',
};

const id = process.argv[2];

if (!id) {
  console.error('❌ 请传入 PPT ID，例如：bun run scripts/open-dev-slidev.js 251020');
  console.log(`💡 已注册的 ID: ${Object.keys(PPT_MAP).join(', ')}`);
  process.exit(1);
}

const filePath = PPT_MAP[id];
if (!filePath) {
  console.error(`❌ 未找到 ID "${id}" 对应的配置文件 qwq`);
  console.log(`💡 已注册的 ID: ${Object.keys(PPT_MAP).join(', ')}`);
  process.exit(1);
}

console.log(`🚀 正在启动 Slidev (ID: ${id})...`);
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
  process.exit(1);
});

slidev_process.on('close', (code) => {
  process.exit(code ?? 0);
});
