int P;
__int64 current_sum;         // 记录当前前缀和 S[idx]
vector<int> perm;            // 当前构造的序列
vector<bool> used;           // 标记数字是否已使用
__int64 solution_count = 0;  // 合法排列计数

void dfs(int idx) {
  if (idx == P) {
    solution_count++;
    // 输出答案
    return;
  }

  for (int cand : factors[current_sum]) {
    if (used[cand]) continue;
    used[cand] = true;
    perm[idx] = cand;
    current_sum += cand;
    dfs(idx + 1);
    current_sum -= cand;
    used[cand] = false;
  }
}