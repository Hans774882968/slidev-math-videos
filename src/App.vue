<script setup lang="ts">
import { getWebsiteBasePath } from './lib/routeUtils';

const basePath = getWebsiteBasePath();

const ppts = [
  { id: '251020', title: '【slidev】插空法、隔板法、捆绑法综合练习1', date: '2025-10-20' },
  { id: '251021', title: '测试', date: '2025-10-21' }
]
</script>

<template>
  <div class="p-10 grid gap-6 md:grid-cols-2">
    <a
      v-for="p in ppts"
      :key="p.id"
      :href="`${basePath}${p.id}/`"
      class="block p-6 bg-white rounded shadow hover:shadow-lg"
    >
      <h2 class="text-xl font-bold">
        {{ p.title }}
      </h2>
      <p class="text-gray-600">
        {{ p.date }}
      </p>
    </a>
  </div>
</template>
