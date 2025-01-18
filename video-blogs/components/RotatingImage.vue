<template>
  <img
    :src="src"
    :alt="alt"
    :class="[
      'rotating-image',
      imgClass,
    ]"
  >
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
  },
  imgClass: {
    type: String,
    default: ''
  },
})
</script>

<style scoped>
.rotating-image {
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
