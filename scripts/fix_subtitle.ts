import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

function fixSubtitle(inputPath: string, replacements: [string, string][]): void {
  if (!existsSync(inputPath)) {
    console.log(`❌ 文件不存在: ${inputPath}`);
    return;
  }

  const originalContent = readFileSync(inputPath, 'utf-8');
  let content = originalContent;

  for (const [oldStr, newStr] of replacements) {
    content = content.replaceAll(oldStr, newStr);
  }

  if (content !== originalContent) {
    writeFileSync(inputPath, content, 'utf-8');
    console.log(`√ 已完成替换并保存到: ${inputPath}`);
  } else {
    console.log('ℹ️ 未发现需要替换的内容，文件未修改~');
  }
}

function loadConfig(configPath: string): { srtFile: string; replacements: [string, string][] } {
  if (!existsSync(configPath)) {
    throw new Error(`配置文件不存在: ${configPath}`);
  }

  const raw = readFileSync(configPath, 'utf-8');
  let config: unknown;
  try {
    config = JSON.parse(raw);
  } catch {
    throw new Error(`${configPath} 不是有效的 JSON 文件`);
  }

  if (typeof config !== 'object' || config === null) {
    throw new Error(`${configPath} 必须是 JSON 对象`);
  }

  const conf = config as Record<string, unknown>;

  if (!('srt_file' in conf)) {
    throw new Error(`${configPath} 缺少 'srt_file' 字段`);
  }
  if (!('replacements' in conf)) {
    throw new Error(`${configPath} 配置文件缺少 'replacements' 字段`);
  }

  const srtFile = conf.srt_file;
  const replacements = conf.replacements;

  if (typeof srtFile !== 'string') {
    throw new Error('\'srt_file\' 必须是字符串');
  }

  if (!Array.isArray(replacements)) {
    throw new Error('\'replacements\' 必须是列表');
  }

  for (let i = 0; i < replacements.length; i++) {
    const item = replacements[i];
    if (!Array.isArray(item) || item.length !== 2) {
      throw new Error(`每个替换规则必须是长度为2的列表 [old, new]（错误位置: ${i}）`);
    }
    if (typeof item[0] !== 'string' || typeof item[1] !== 'string') {
      throw new Error(`替换规则的每一项必须是字符串（错误位置: ${i}）`);
    }
  }

  return {
    srtFile,
    replacements: replacements as [string, string][],
  };
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
    const { srtFile, replacements } = loadConfig(absoluteConfigPath);
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
