<template>
  <div class="slidev-layout center h-full grid place-content-center">
    <FloatIcons />

    <LetterToLlm />

    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<script setup>
import FloatIcons from './float-icons.vue';
import LetterToLlm from './letter-to-llm.vue';
</script>
