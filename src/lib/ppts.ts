export const ppts = [
  { id: '251020', title: '【slidev】排列组合：插空法、隔板法、捆绑法综合练习1', date: '2025-10-20' },
  { id: '251021', title: '测试', date: '2025-10-21' },
  { id: '251022', title: '【slidev】双曲换元？欧拉公式！这道数列题不需要注意力', date: '2025-10-22' },
  { id: '251114', title: '【slidev】《高中数学竞赛培优教程》好题：函数性质+组合数定义', date: '2025-11-14' },
  { id: '251117', title: '【slidev】f(f(n))=3n，求这道优雅数列题的通项公式，保姆级教程！', date: '2025-11-17' },
  { id: '251124', title: '【slidev】这道解三角形向量做法太需要注意力？保姆级拆解，一题3解，让你从容面对！', date: '2025-11-24' },
];

export function hasPpt(id: string) {
  return ppts.some((ppt) => ppt.id === id);
}
