<!-- copy from scholarly -->
<template>
  <div :class="['scholarly-block', `block-${type}`, { 'block-compact': compact }]">
    <div v-if="title" class="block-header">
      <span class="block-title">{{ title }}</span>
    </div>
    <div class="block-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'example' | 'alert'
  title?: string
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'default',
  compact: false
})
</script>

<style scoped>
.scholarly-block {
  margin: 1rem 0;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.scholarly-block.block-compact {
  margin: 0.5rem 0;
}

.block-header {
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 1rem;
}

.block-content {
  padding: 0.75rem 1rem;
  line-height: 1.6;
}

.block-content :deep(p) {
  margin: 0.5rem 0;
}

.block-content :deep(p:first-child) {
  margin-top: 0;
}

.block-content :deep(p:last-child) {
  margin-bottom: 0;
}

.block-content :deep(ul),
.block-content :deep(ol) {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

/* Default (Beamer-like blue block) */
.block-default .block-header {
  background: linear-gradient(to right, #4a6b7a, #5d8392);
  color: white;
}

.block-default .block-content {
  background: rgba(93, 131, 146, 0.1);
  border: 1px solid rgba(93, 131, 146, 0.3);
  border-top: none;
}

/* Info (cyan/teal) */
.block-info .block-header {
  background: linear-gradient(to right, #0891b2, #06b6d4);
  color: white;
}

.block-info .block-content {
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-top: none;
}

/* Success (green) */
.block-success .block-header {
  background: linear-gradient(to right, #059669, #10b981);
  color: white;
}

.block-success .block-content {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-top: none;
}

/* Warning (amber/orange) */
.block-warning .block-header {
  background: linear-gradient(to right, #d97706, #f59e0b);
  color: white;
}

.block-warning .block-content {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-top: none;
}

/* Danger (red) */
.block-danger .block-header {
  background: linear-gradient(to right, #dc2626, #ef4444);
  color: white;
}

.block-danger .block-content {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-top: none;
}

/* Example (pink/purple) */
.block-example .block-header {
  background: linear-gradient(to right, #9333ea, #a855f7);
  color: white;
}

.block-example .block-content {
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-top: none;
}

/* Alert (Beamer alertblock style - red/brown) */
.block-alert .block-header {
  background: linear-gradient(to right, #be123c, #e11d48);
  color: white;
}

.block-alert .block-content {
  background: rgba(225, 29, 72, 0.1);
  border: 1px solid rgba(225, 29, 72, 0.3);
  border-top: none;
}

/* Without title - single colored block */
.scholarly-block:not(:has(.block-header)) .block-content {
  border-radius: 0.5rem;
  border-top: 1px solid;
}

.block-default:not(:has(.block-header)) .block-content {
  border-left: 4px solid #5d8392;
}

.block-info:not(:has(.block-header)) .block-content {
  border-left: 4px solid #06b6d4;
}

.block-success:not(:has(.block-header)) .block-content {
  border-left: 4px solid #10b981;
}

.block-warning:not(:has(.block-header)) .block-content {
  border-left: 4px solid #f59e0b;
}

.block-danger:not(:has(.block-header)) .block-content {
  border-left: 4px solid #ef4444;
}

.block-example:not(:has(.block-header)) .block-content {
  border-left: 4px solid #a855f7;
}

.block-alert:not(:has(.block-header)) .block-content {
  border-left: 4px solid #e11d48;
}
</style>