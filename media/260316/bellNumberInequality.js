const n = 10;
const bell = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

function calcBellNumbersAndVerifyInequality(n) {
  bell[0][0] = 1;
  for (let i = 1; i <= n; ++i) {
    bell[i][0] = bell[i - 1][i - 1];
    for (let j = 1; j <= i; ++j)
      bell[i][j] = bell[i - 1][j - 1] + bell[i][j - 1];
  }
  for (let v = 0; v < n; ++v) {
    const lhs = bell[v + 1][0];
    const rhs = v * bell[v][0] + 1;
    const delta = lhs - rhs;
    console.assert(delta <= 0);
    console.log(`B[${v + 1}] = ${lhs}, B[${v}] = ${bell[v][0]}, rhs = ${rhs}, delta = ${delta}`);
  }
}

calcBellNumbersAndVerifyInequality(n);
