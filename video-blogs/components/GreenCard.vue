<template>
  <div
    class="green-card"
    :class="customClass"
  >
    <div class="accent-bar" />
    
    <div class="card-content">
      <h3
        v-if="title || $slots.title"
        class="card-title"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </h3>
      
      <p
        v-if="content"
        class="card-body"
      >
        <slot>{{ content }}</slot>
      </p>
      <div
        v-else-if="$slots.default"
        class="content-wrapper"
      >
        <slot>{{ content }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GreenCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.green-card {
  position: relative;
  background-color: #e6f6eb;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 16px 16px 16px 21px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  overflow: hidden;
}

.green-card:hover {
  box-shadow: 0 6px 20px rgba(45, 100, 75, 0.2);
  transform: translateY(-2px);
}

.accent-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background-color: #2d644b;
  border-radius: 2px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  /* color: #1f2937; 感觉沿用 slidev 传下来的墨绿色观感更好 */
  line-height: 1.4;
}

.card-body {
  margin: 0;
  font-size: 14px;
  color: #4b5563;
  line-height: 1.8;
}

.content-wrapper :deep(p) {
  margin: 0;
  font-size: 14px;
  color: #4b5563;
  line-height: 1.8;
}

@media (max-width: 640px) {
  .green-card {
    padding: 14px 14px 14px 19px;
  }
  .card-title {
    font-size: 18px;
  }
}
</style>