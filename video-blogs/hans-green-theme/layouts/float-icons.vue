<template>
  <div class="absolute inset-0 pointer-events-none z-0">
    <div
      v-for="(sl, i) in slotLayouts"
      :key="i"
      class="absolute animate-float-breathe transform-gpu w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
      :class="[sl.pos, sl.color]"
    >
      <component
        :is="iconComponentMap[randomIcons[i]]"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
/**
 * 这里需要显式导入所有可能用到的图标（ 的 ~icons 路径）才不会报错
 * unplugin-icons 的路径是 `~icons`
 */
import MdiMusicNoteSixteenthDotted from '~icons/mdi/music-note-sixteenth-dotted'
import MdiMusicClefTreble from '~icons/mdi/music-clef-treble'
import MdiAirplane from '~icons/mdi/airplane'
import MdiLightbulbOn from '~icons/mdi/lightbulb-on'
import MdiRocketLaunch from '~icons/mdi/rocket-launch'
import MdiStarShooting from '~icons/mdi/star-shooting'
import MdiCodeTags from '~icons/mdi/code-tags'
import MdiMathCompass from '~icons/mdi/math-compass'
import MdiFlask from '~icons/mdi/flask'
import MdiAtom from '~icons/mdi/atom'
import MdiWeatherLightning from '~icons/mdi/weather-lightning'

const iconComponentMap = {
  'mdi-music-note-sixteenth-dotted': MdiMusicNoteSixteenthDotted,
  'mdi-music-clef-treble': MdiMusicClefTreble,
  'mdi-airplane': MdiAirplane,
  'mdi-lightbulb-on': MdiLightbulbOn,
  'mdi-rocket-launch': MdiRocketLaunch,
  'mdi-star-shooting': MdiStarShooting,
  'mdi-code-tags': MdiCodeTags,
  'mdi-math-compass': MdiMathCompass,
  'mdi-flask': MdiFlask,
  'mdi-atom': MdiAtom,
  'mdi-weather-lightning': MdiWeatherLightning,
}

const slotLayouts = [
  { pos: 'top-[12%] right-[1.5%]', color: 'text-[#16a34a]' },
  { pos: 'top-[63%] right-[1.5%]', color: 'text-[#16a34a]' },
  { pos: 'top-[35%] left-[0.8%]',  color: 'text-[#16a34a]' },
  { pos: 'bottom-[22%] left-[1%]', color: 'text-[#2d644b]' },
  { pos: 'top-[1.5%] left-[30%]',  color: 'text-[#2d644b]' },
  { pos: 'top-[2%] left-[66%]',    color: 'text-[#16a34a]' },
]

const iconPool = [
  'mdi-music-note-sixteenth-dotted', 'mdi-music-clef-treble', 'mdi-airplane',
  'mdi-lightbulb-on', 'mdi-rocket-launch', 'mdi-star-shooting',
  'mdi-code-tags', 'mdi-math-compass', 'mdi-flask', 'mdi-atom', 'mdi-weather-lightning',
]

const getRandomUniqueIcons = (pool, count) => {
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count)
}

const randomIcons = ref(getRandomUniqueIcons(iconPool, slotLayouts.length))
</script>

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
