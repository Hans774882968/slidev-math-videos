<template>
  <teleport to="#slide-content">
    <div 
      ref="containerRef" 
      class="fixed inset-0 pointer-events-none overflow-hidden z-50"
    >
      <p
        ref="textRef"
        class="absolute text-gray-300 select-none !m-0 truncate"
        :style="{
          left: `${position.x}px`,
          top: `${position.y}px`,
          fontSize: '20px',
          opacity: 0.3,
          userSelect: 'none',
          pointerEvents: 'none'
        }"
      >
        {{ text }}
      </p>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Hans码数理哲'
  }
})

const containerRef = ref(null)
const textRef = ref(null)
const position = ref({ x: 0, y: 0 })
const velocity = ref({ x: 0, y: 0 })
const containerSize = ref({ width: 0, height: 0 })

const updateContainerSize = () => {
  if (!containerRef.value) {
    return;
  }
  const slideContent = document.getElementById('slide-content')
  let slideScale = 1

  if (slideContent) {
    const slideScaleValue = getComputedStyle(slideContent).getPropertyValue('--slidev-slide-scale')
    if (slideScaleValue) {
      slideScale = parseFloat(slideScaleValue) || 1
    }
  }

  const rect = containerRef.value.getBoundingClientRect()
  containerSize.value.width = rect.width / slideScale
  containerSize.value.height = rect.height / slideScale
}

const initializePositionAndVelocity = () => {
  if (containerSize.value.width === 0 || containerSize.value.height === 0) {
    updateContainerSize()
  }

  const textWidth = textRef.value?.offsetWidth || 60
  const textHeight = textRef.value?.offsetHeight || 20

  position.value = {
    x: Math.random() * (containerSize.value.width - textWidth) + textWidth / 2,
    y: Math.random() * (containerSize.value.height - textHeight) + textHeight / 2
  }

  const speed = 1.2 + Math.random() * 0.6
  const angle = (1 / 12 + Math.random() / 3) * Math.PI
  velocity.value = {
    x: Math.cos(angle) * speed,
    y: Math.sin(angle) * speed
  }
}

const moveAnimate = () => {
  const textWidth = textRef.value?.offsetWidth || 60
  const textHeight = textRef.value?.offsetHeight || 20

  position.value.x += velocity.value.x
  position.value.y += velocity.value.y

  if (position.value.x <= 0 || position.value.x >= containerSize.value.width - textWidth) {
    velocity.value.x = -velocity.value.x
    position.value.x = Math.max(0, Math.min(containerSize.value.width - textWidth, position.value.x))
  }

  if (position.value.y <= 0 || position.value.y >= containerSize.value.height - textHeight) {
    velocity.value.y = -velocity.value.y
    position.value.y = Math.max(0, Math.min(containerSize.value.height - textHeight, position.value.y))
  }

  requestAnimationFrame(moveAnimate)
}

onMounted(async () => {
  await nextTick()
  updateContainerSize()
  initializePositionAndVelocity()
  requestAnimationFrame(moveAnimate)

  window.addEventListener('resize', updateContainerSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateContainerSize)
})
</script>
