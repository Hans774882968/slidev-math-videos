import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getReplacedContent, loadSubtitleConfig } from './subtitle_utils';

function fixSubtitle(inputPath: string, replacements: [string, string][]): void {
  if (!existsSync(inputPath)) {
    console.log(`❌ 文件不存在: ${inputPath}`);
    return;
  }

  const originalContent = readFileSync(inputPath, 'utf-8');
  const replacedContent = getReplacedContent(originalContent, replacements);

  if (replacedContent !== originalContent) {
    writeFileSync(inputPath, replacedContent, 'utf-8');
    console.log(`√ 已完成替换并保存到: ${inputPath}`);
  } else {
    console.log('ℹ️ 未发现需要替换的内容，文件未修改~');
  }
}

function parseArgs(): { config: string } {
  const args = process.argv.slice(2);
  let config = 'subtitle_config.json';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--config' || args[i] === '-c') {
      if (i + 1 >= args.length) {
        console.error('❌ --config 需要指定一个文件路径');
        process.exit(1);
      }
      config = args[i + 1];
      break;
    }
  }

  return { config };
}

function main(): void {
  const { config: configPath } = parseArgs();

  try {
    const absoluteConfigPath = join(process.cwd(), configPath);
    const { srtFile, replacements } = loadSubtitleConfig(absoluteConfigPath);
    const absoluteSrtPath = join(process.cwd(), srtFile);
    fixSubtitle(absoluteSrtPath, replacements);
  } catch (e) {
    console.log(`❌ 错误: ${e instanceof Error ? e.message : String(e)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
