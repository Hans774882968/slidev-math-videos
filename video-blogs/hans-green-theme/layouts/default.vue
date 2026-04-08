<template>
  <div class="slidev-layout relative w-full h-full overflow-hidden">
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute animate-float-breathe transform-gpu top-[12%] right-[1.5%] text-[#16a34a] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
        <mdi-star-four-points class="w-full h-full" />
      </div>
      <div class="absolute animate-float-breathe transform-gpu top-[63%] right-[1.5%] text-[#16a34a] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
        <mdi-square-rounded class="w-full h-full" />
      </div>
      <div class="absolute animate-float-breathe transform-gpu top-[35%] left-[0.8%] text-[#16a34a] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
        <mdi-circle class="w-full h-full" />
      </div>
      <div class="absolute animate-float-breathe transform-gpu bottom-[22%] left-[1%] text-[#2d644b] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
        <mdi-star-four-points class="w-full h-full" />
      </div>
      <div class="absolute animate-float-breathe transform-gpu top-[1.5%] left-[30%] text-[#2d644b] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
        <mdi-square-rounded class="w-full h-full" />
      </div>
      <div class="absolute animate-float-breathe transform-gpu top-[2%] left-[66%] text-[#16a34a] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
        <mdi-star class="w-full h-full" />
      </div>
    </div>

    <slot />
  </div>
</template>

<style scoped>
@keyframes float-breathe {
  0%, 100% {
    transform: translateY(0) scale(1.2);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-8px) scale(1);
    opacity: 0.33;
  }
}

.animate-float-breathe {
  animation: float-breathe 8s ease-in-out infinite;
  will-change: transform, opacity;
}
</style>
