import { existsSync, readFileSync, writeFileSync } from 'fs';
import { getReplacedContent, loadSubtitleConfig } from './subtitle_utils';
import { join } from 'path';

function getTranscriptReplacedContent(transcriptPath, subtitleConfigPath) {
  if (!existsSync(transcriptPath)) {
    err(`文字稿文件不存在: ${transcriptPath}`);
    return;
  }
  const { replacements } = subtitleConfigPath ? loadSubtitleConfig(subtitleConfigPath) : { replacements: [] };

  const originalContent = readFileSync(transcriptPath, 'utf-8');
  const replacedContent = getReplacedContent(originalContent, replacements);
  return replacedContent;
}

/** 计算字符串编辑距离（Levenshtein） */
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}

/** 计算归一化相似度 (0~1)，忽略标点/空格/大小写 */
function similarity(a, b) {
  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length);
  return maxLen === 0 ? 1 : 1 - dist / maxLen;
}

/** 文本标准化：仅保留中英文数字，转小写 */
function normalize(str) {
  return str.replace(/[^\w\u4e00-\u9fa5]/g, '').toLowerCase();
}

/** 解析 SRT 时间戳为秒数 */
function parseTime(t) {
  const [h, m, s] = t.replace(',', '.').split(':').map(Number);
  return h * 3600 + m * 60 + s;
}

/** 鲁棒性 SRT 解析器（按空块分割，兼容不同换行符） */
function parseSRT(content) {
  return content.trim().split(/\r?\n\s*\r?\n/).map(block => {
    const lines = block.trim().split(/\r?\n/);
    if (lines.length < 3) return null;
    const times = lines[1].split('-->').map(t => parseTime(t.trim()));
    return {
      id: parseInt(lines[0]),
      start: times[0],
      end: times[1],
      text: lines.slice(2).join('\n').trim(),
    };
  }).filter(Boolean);
}

/** up 函数：延迟 [2.5, 3.0)，结果必为 0.5 的倍数 */
function up(duration) {
  const d = Math.max(0, duration);
  return Math.ceil((d + 2.5) * 2) / 2;
}

function err(msg) {
  console.error(`❌ Error: ${msg}`);
  process.exit(114514);
}

function main() {
  const args = Bun.argv.slice(2);
  const opts = { sub: null, transcript: null, index: null, print: false, replace: null, subtitle_config: null };

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (['-s', '--subtitle'].includes(a)) opts.sub = args[++i];
    else if (['-t', '--transcript'].includes(a)) opts.transcript = args[++i];
    else if (['-i', '--index'].includes(a)) opts.index = args[++i];
    else if (['-p', '--print'].includes(a)) opts.print = true;
    else if (['-r', '--replace'].includes(a)) opts.replace = args[++i];
    else if (['-sc', '--subtitle_config'].includes(a)) opts.subtitle_config = join(process.cwd(), args[++i]);
  }

  if (!opts.sub) err('Missing required: -s / --subtitle <subtitle.srt>');
  if (opts.transcript && opts.index) err('Conflict: Choose either -t / --transcript OR -i / --index');
  if (!opts.transcript && !opts.index) err('Missing: Require either -t / --transcript OR -i / --index');
  if (opts.print && opts.replace) err('Conflict: Choose either -p / --print OR -r / --replace');
  if (!opts.print && !opts.replace) err('Missing output mode: Require either -p / --print OR -r / --replace');

  try {
    const cues = parseSRT(readFileSync(opts.sub, 'utf-8'));
    if (cues.length === 0) err('SRT file is empty or invalid format.');

    const starts = [];
    const ends = [];

    if (opts.transcript) {
      // 模式 A：文字稿解析
      const transcriptContent = getTranscriptReplacedContent(opts.transcript, opts.subtitle_config);
      const paragraphs = transcriptContent.trim().split(/\n\s*\n/);
      let currentIdx = 0; // 指针优化：利用顺序一致性避免全量扫描

      for (let i = 0; i < paragraphs.length; i++) {
        const lines = paragraphs[i].trim().split(/\n/);
        const firstNorm = normalize(lines[0]);
        const lastNorm = normalize(lines[lines.length - 1]);

        // 找段落起始句
        let startFound = false;
        for (let j = currentIdx; j < cues.length; j++) {
          if (similarity(firstNorm, normalize(cues[j].text)) >= 0.85) {
            starts.push(cues[j].start);
            currentIdx = j;
            startFound = true;
            break;
          }
        }
        if (!startFound) err(`Paragraph ${i + 1} start sentence not matched in SRT: ${firstNorm}`);

        // 找段落结束句
        let endFound = false;
        for (let j = currentIdx; j < cues.length; j++) {
          if (similarity(lastNorm, normalize(cues[j].text)) >= 0.85) {
            ends.push(cues[j].end);
            currentIdx = j + 1;
            endFound = true;
            break;
          }
        }
        if (!endFound) err(`Paragraph ${i + 1} end sentence not matched in SRT.`);
      }
    } else {
      // 模式 B：索引文件解析 (1-based)
      const indices = readFileSync(opts.index, 'utf-8').trim().split(/\s+/).map(Number);
      for (let i = 0; i < indices.length; i++) {
        const idx = indices[i] - 1; // 转 0-based
        if (idx < 0 || idx >= cues.length) err(`Index ${indices[i]} out of bounds (SRT has ${cues.length} cues).`);
        starts.push(cues[idx].start);

        // 推断结束时间：非最后一段用下一段起始时间
        if (i < indices.length - 1) {
          const nextIdx = indices[i + 1] - 1;
          ends.push(cues[nextIdx] ? cues[nextIdx].start : cues.at(-1).end);
        } else {
          ends.push(cues.at(-1).end);
        }
      }
    }

    // 计算各段落持续时间并应用 up 函数
    const durations = [];
    for (let i = 0; i < starts.length; i++) {
      let dur;
      if (i < starts.length - 1) {
        dur = starts[i + 1] - starts[i];
      } else {
        // 推断结束时间：最后一段用 SRT 最后一句结束时间
        dur = ends[i] - starts[i];
      }
      durations.push(up(dur));
    }

    const timeList = [0, ...durations];
    const resultStr = `<AutoSlide :timeList="[${timeList.join(', ')}]" />`;

    if (opts.print) {
      console.log(resultStr);
      // 如果有 文字稿1.md ，可以用这一行输出
      const alternativeResultStr = `<AutoSlide :timeList="[0, 114514, ${durations.join(', ')}]" />`;
      console.log(`如果有 文字稿1.md ：${alternativeResultStr}`);
    } else {
      const target = '<!-- <AutoSlide :timeList="[0, 0]" /> -->';
      let content = readFileSync(opts.replace, 'utf-8');
      if (!content.includes(target)) err(`Target string not found in ${opts.replace}`);
      content = content.replace(target, resultStr);
      writeFileSync(opts.replace, content, 'utf-8');
      console.log(`✅ Successfully replaced in ${opts.replace}`);
    }
  } catch (e) {
    if (e.message.startsWith('❌ Error')) throw e;
    err(e.message);
  }
}

main();
