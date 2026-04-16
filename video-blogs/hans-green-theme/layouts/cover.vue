<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { handleBackground } from '../layoutHelper';
import figlet from 'figlet';
import standard from 'figlet/fonts/Standard';
import { getWebsiteBasePath } from './lib/routeUtils';

function printLogo() {
  const text = figlet.textSync('hans-green-theme', { font: 'Standard' });
  console.log(text);
  console.log('🌟🌟 本PPT原作者：%cHans码数理哲', 'color: #16a34a; font-weight: bold; font-size: 30px;', '🌟🌟');
}

const props = defineProps({
  background: {
    default: '',
  },
});

const style = computed(() => handleBackground(props.background, true));

const basePath = getWebsiteBasePath();
// live2d_path 参数建议使用绝对路径
// const live2d_path = 'https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0-rc.3/dist/';
const live2dPath = `${basePath}live2d/`;

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;

    if (type === 'css') {
      tag = document.createElement('link');
      tag.rel = 'stylesheet';
      tag.href = url;
    }
    else if (type === 'js') {
      tag = document.createElement('script');
      tag.type = 'module';
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

/**
 * TODO:
 * 1. sagiri 大小是 2048，无法适配
 * 2. 偶发 bug (fixed by patching oh-my-live2d) index.js:16595 Uncaught TypeError: Right-hand side of 'instanceof' is not an object at Ab.updateWebGLContext (index.js:16595:32)
 * 3. https://v1.hitokoto.cn/ 给我 403 。看了源码，用了作者自己的 tianjie 包，不好加上 try catch ，暂时不 patch ，下个 commit 再说~
 */
// 如果担心手机上显示效果不佳，可以通过 `if (screen.width >= 768)` 来判断是否加载
async function loadLive2dResource() {
  // 避免图片资源跨域问题
  const OriginalImage = window.Image;
  window.Image = function (...args) {
    const img = new OriginalImage(...args);
    img.crossOrigin = "anonymous";
    return img;
  };
  window.Image.prototype = OriginalImage.prototype;
  try {
    // 加载 waifu.css waifu-tips.js
    await Promise.all([
      loadExternalResource(`${live2dPath}waifu.css`, 'css'),
      loadExternalResource(`${live2dPath}waifu-tips.js`, 'js')
    ]);
  } catch(e) {
    console.error('加载 waifu.css 和 waifu-tips.js 失败', e);
  }
  // 配置选项的具体用法见 README.md
  initWidget({
    // 不用 cdnPath 指向 model_list.json 的做法了，因为衣服加载不出。用 waifu-tips.json 指向本地路径的做法，完美解决
    // cdnPath: 'https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/',
    // cdnPath: live2dPath,
    waifuPath: `${live2dPath}waifu-tips.json`,
    cubism2Path: `${live2dPath}live2d.min.js`,
    cubism5Path: `${live2dPath}cubism5/live2dcubismcore.js`,
    tools: ['hitokoto', 'asteroids', 'switch-model', 'switch-texture', 'photo', 'info', 'quit'],
    logLevel: 'warn',
    drag: true
  });
}

onMounted(() => {
  figlet.parseFont('Standard', standard);
  printLogo();

  loadLive2dResource();

  console.log(`\n%cLive2D%cWidget%c\n`, 'padding: 8px; background: #cd3e45; font-weight: bold; font-size: large; color: white;', 'padding: 8px; background: #ff5450; font-size: large; color: #eee;', '');
  console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
          ＼ ', !-─‐-i  /  /´
          ／｀ｰ'       L/／｀ヽ､
        /   ／,   /|   ,   ,       ',
      ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
            .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
  `);
});
</script>

<template>
  <div
    class="slidev-layout cover"
    :style="style"
  >
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
