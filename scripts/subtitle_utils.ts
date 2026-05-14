import { existsSync, readFileSync } from 'fs';

export function loadSubtitleConfig(configPath: string): { srtFile: string; replacements: [string, string][] } {
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

export function getReplacedContent(originalContent: string, replacements: [string, string][]) {
  let content = originalContent;

  for (const [oldStr, newStr] of replacements) {
    content = content.replaceAll(oldStr, newStr);
  }

  return content;
}
