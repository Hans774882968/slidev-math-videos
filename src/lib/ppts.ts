interface Ppt {
  id: string;
  title: string;
  date: string;
  intro?: string;
}

export const ppts: Array<Ppt> = [
  { id: '251020', title: '【slidev】排列组合：插空法、隔板法、捆绑法综合练习1', date: '2025-10-20' },
  { id: '251021', title: '测试', date: '2025-10-21' },
  { id: '251022', title: '【slidev】双曲换元？欧拉公式！这道数列题不需要注意力', date: '2025-10-22' },
  { id: '251114', title: '【slidev】《高中数学竞赛培优教程》好题：函数性质+组合数定义', date: '2025-11-14' },
  { id: '251117', title: '【slidev】f(f(n))=3n，求这道优雅数列题的通项公式，保姆级教程！', date: '2025-11-17' },
  { id: '251124', title: '【slidev】这道解三角形向量做法太需要注意力？保姆级拆解，一题3解，让你从容面对！', date: '2025-11-24' },
  { id: '251126', title: '【slidev】深圳第一次模拟联测这道极值点偏移不简单！保姆级讲解，学渣也能听懂~', date: '2025-11-26' },
  { id: '251128', title: '【slidev】上期视频极值点偏移问题的命题背景揭晓！给各位出道导数压轴题~', date: '2025-11-28' },
  { id: '251204', title: '【slidev】大题造火箭！长郡二十校26届高三12月联考三角导数压轴', date: '2025-12-04' },
  { id: '251209', title: '【slidev】纳西妲讲解湖南师大附中26届高三第4次月考数论题和一道类似的竞赛题~', date: '2025-12-09' },
  { id: '251210', title: '【slidev】纳西妲遇到两道涉及数论的数列题，哥哥姐姐们可以帮帮她吗', date: '2025-12-10' },
  { id: '251219', title: '【slidev】【技术分享】如何用听感更顺耳的edge-tts为manim动画添加旁白', date: '2025-12-19' },
  { id: '251222', title: '【slidev】两道基础而不失小清新的考研线代真题串讲-26年数一第21题和25年数三第21题', date: '2025-12-22' },
  { id: '251226', title: '【slidev】26成都一诊组合数学压轴-一起揭晓这道经典好题的概率论背景~', date: '2025-12-26' },
  { id: '251230', title: '【slidev】2023四省联考经典好题T16：布尔代数+高斯消元', date: '2025-12-30', intro: '竟然能对一道高考模拟题写图论可视化代码和布尔环上的高斯消元代码。 WIP' },
  { id: '260105', title: '【slidev】【邪修】一起用CTF Crypto技能包破解这道高中钓鱼题', date: '2026-01-05', intro: '博客版传送门： https://www.52pojie.cn/thread-2085192-1-1.html' },
  { id: '260111_t', title: '【slidev】模板', date: '2026-01-11', intro: '数学题解模板' },
  { id: '260111', title: '【slidev】锐评锐评锐评锐评前后端技术栈技术含量从夯到拉从夯到拉从夯到拉从夯到拉', date: '2026-01-11' },
];

export function hasPpt(id: string) {
  return ppts.some((ppt) => ppt.id === id);
}
