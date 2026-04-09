<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { handleBackground } from '../layoutHelper';
import figlet from 'figlet';
import standard from 'figlet/fonts/Standard';

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

onMounted(() => {
  figlet.parseFont('Standard', standard);
  printLogo();
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