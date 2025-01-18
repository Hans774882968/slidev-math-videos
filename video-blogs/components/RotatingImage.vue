<template>
  <EnhancedSlot />
</template>

<script setup>
import { useSlots, cloneVNode } from 'vue'

const slots = useSlots()

const EnhancedSlot = () => {
  const slotContent = slots.default?.()
  if (!slotContent || slotContent.length !== 1) {
    console.warn('只能传入一个<img>标签！')
    return slotContent
  }

  const vnode = slotContent[0]
  if (vnode.type !== 'img') {
    console.warn('只支持传入<img>标签！')
    return vnode
  }

  return cloneVNode(vnode, {
    class: [vnode.props?.class || '', 'rotating-image']
  })
}
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
