<!-- copy from scholarly -->
<template>
  <span :class="['scholarly-highlight', `highlight-${resolvedType}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** Highlight type: primary (default), success, warning, danger, info */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  /** Legacy alias of `type` */
  color?: 'yellow' | 'green' | 'blue' | 'pink' | 'purple'
}

const props = withDefaults(defineProps<Props>(), {
  type: undefined,
  color: undefined
})

const resolvedType = computed(() => {
  if (props.type) return props.type
  switch (props.color) {
    case 'yellow':
      return 'warning'
    case 'green':
      return 'success'
    case 'blue':
      return 'info'
    case 'pink':
      return 'danger'
    case 'purple':
      return 'primary'
    default:
      return 'primary'
  }
})
</script>

<style scoped>
.scholarly-highlight {
  display: inline-block;
  padding: 0.2em 0.55em;
  border-radius: 0.4em;
  font-weight: 500;
  line-height: 1.25;
}

.highlight-primary {
  background-color: rgba(93, 131, 146, 0.2);
  color: #4a6b7a;
}

.highlight-success {
  background-color: rgba(16, 185, 129, 0.2);
  color: #059669;
}

.highlight-warning {
  background-color: rgba(245, 158, 11, 0.2);
  color: #d97706;
}

.highlight-danger {
  background-color: rgba(239, 68, 68, 0.2);
  color: #dc2626;
}

.highlight-info {
  background-color: rgba(6, 182, 212, 0.2);
  color: #0891b2;
}

/* Dark mode support */
:root.dark .highlight-primary {
  background-color: rgba(93, 131, 146, 0.3);
  color: #8fb3c2;
}

:root.dark .highlight-success {
  background-color: rgba(16, 185, 129, 0.3);
  /* color: #34d399; 这个太晃眼了，改成下面的 */
  color: #059669;
}

:root.dark .highlight-warning {
  background-color: rgba(245, 158, 11, 0.3);
  color: #fbbf24;
}

:root.dark .highlight-danger {
  background-color: rgba(239, 68, 68, 0.3);
  color: #f87171;
}

:root.dark .highlight-info {
  background-color: rgba(6, 182, 212, 0.3);
  color: #22d3ee;
}
</style>