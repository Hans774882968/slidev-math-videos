import { execSync } from 'child_process';
import PPT_MAP from './ppt-map';

const DIST_BASE = '../dist';
const DEPLOY_BASE = '/slidev-math-videos';

const targetIds = process.argv.slice(2);

const idsToBuild = targetIds.length > 0 ? targetIds : Object.keys(PPT_MAP);

const invalidIds = idsToBuild.filter(id => !(id in PPT_MAP));
if (invalidIds.length > 0) {
  console.error(`❌ 无效的 PPT ID: ${invalidIds.join(', ')}`);
  console.error(`💡 已注册的 ID: ${Object.keys(PPT_MAP).join(', ')}`);
  process.exit(114514);
}

console.log(`🚀 准备构建 ${idsToBuild.length} 个 PPT...\n`);

for (const id of idsToBuild) {
  const input = PPT_MAP[id];
  const base = `${DEPLOY_BASE}/${id}/`;
  const out = `${DIST_BASE}/${id}`;

  console.log(`📦 正在构建 [${id}] → ${out}`);

  const cmd = `slidev build "${input}" --base "${base}" --out "${out}"`;
  console.log(`📝 执行命令: ${cmd}`);

  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`✅ [${id}] 构建成功\n`);
  } catch (error) {
    console.error(`❌ [${id}] 构建失败qwq，流水线已中断`, error);
    process.exit(114514);
  }
}

console.log(`🎉 ${idsToBuild.length} 个 PPT 已构建完成！`);
