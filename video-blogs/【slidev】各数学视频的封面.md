---
theme: ./hans-green-theme
mdc: true
transition: slide-left
lineNumbers: true
fonts:
  sans: 'jing-nan-bo-bo-hei-bold'
  local: 'jing-nan-bo-bo-hei-bold'
tags:
  - 数学视频封面
---

<SlidevPageRedirector />
<MovingWatermark />

<div class="bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
  <h1 class="title-stroke !text-[#059669] !mb-1 font-black tracking-tighter text-center">
    二次曲线的条件极值问题
  </h1>

  <div class="flex flex-col justify-center items-center gap-3 mb-2">
    <h2 class="flex justify-center items-center font-black text-center !text-[#059669] !text-2xl md:!text-3xl">
      <span class="subtitle-stroke">竟能用</span>
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">二次型</span>
      </div>
      <span class="subtitle-stroke">和</span>
      <div class="mx-2 bg-[#10b98126] px-4 py-1.5 rounded-xl">
        <span class="!text-2xl md:!text-3xl text-[#059669]">齐次线性方程组</span>
      </div>
      <span class="subtitle-stroke">巧解~</span>
    </h2>
  </div>

  <div class="mb-2 bordered-box p-4 border-4 border-[#059669] bg-gradient-to-br from-[#c8e6c9] to-[#dcf1dd] px-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg md:text-xl text-[#059669] font-serif">

已知 $x^2-2xy-y^2=1$ ，求 $x^2+2y^2$ 最小值
  </div>

  <p class="text-[#059669] text-2xl md:text-3xl !my-2 text-center">
    感受高阶数学工具的威力~
  </p>
</div>

<style>
@font-face {
  font-family: 'jing-nan-bo-bo-hei-bold';
  src: url('/fonts/jing-nan-bo-bo-hei-bold.ttf') format('truetype');
}
.title-stroke {
  -webkit-text-stroke: 10px #10b98126;
  paint-order: stroke fill;
}

.subtitle-stroke {
  -webkit-text-stroke: 8px #10b98126;
  paint-order: stroke fill;
}

.bordered-box p {
  margin: 0;
}

@media (max-width: 768px) {
  .subtitle-stroke {
    -webkit-text-stroke: 6px #10b98126;
  }
}
</style>
