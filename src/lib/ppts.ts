export const ppts = [
  { id: '251020', title: '【slidev】排列组合：插空法、隔板法、捆绑法综合练习1', date: '2025-10-20' },
  { id: '251021', title: '测试', date: '2025-10-21' },
  { id: '251022', title: '【slidev】双曲换元？欧拉公式！这道数列题不需要注意力', date: '2025-10-22' },
];

export function hasPpt(id: string) {
  return ppts.some((ppt) => ppt.id === id);
}
