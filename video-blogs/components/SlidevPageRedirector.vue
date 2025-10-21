<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

onMounted(() => {
  const route = useRoute();
  const router = useRouter();

  const pageParam = route.query.page;
  if (!pageParam) return;

  const pageStr = Array.isArray(pageParam) ? pageParam[0] : pageParam;
  const page = Number(pageStr);

  if (!Number.isInteger(page) || page <= 0) {
    // TODO: 升级为 toast 提示
    console.error('页码不合法，请输入正整数');
    return;
  }

  $nav.value.go(page);
});
</script>

<template>
  <div />
</template>
