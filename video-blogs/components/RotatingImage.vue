<template>
  <!-- teleport 让 position: fixed 能够重新生效 -->
  <teleport to="#slide-content">
    <div class="rotating-image-container fixed top-0 right-0 p-6 rounded-full overflow-hidden select-none">
      <img
        :src="src"
        :alt="alt"
        class="w-full h-full object-cover"
      >
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Rotating image'
  }
})
</script>

<style scoped>
.rotating-image-container {
  animation: rotateLinear 6s linear infinite;
}

@keyframes rotateLinear {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
