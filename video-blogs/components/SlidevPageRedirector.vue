<script setup lang="ts">
import { onMounted } from 'vue';
import { LocationQueryValue, useRoute } from 'vue-router';

function getNumberFromArray(arr: LocationQueryValue | LocationQueryValue[]) {
  const vStr = Array.isArray(arr) ? arr[0] : arr;
  const v = Number(vStr);
  return v
}

onMounted(() => {
  const route = useRoute();

  const pageParam = route.query.page;
  if (!pageParam) return;
  const clicksParam = route.query.clicks;

  const page = getNumberFromArray(pageParam);
  const clicks = getNumberFromArray(clicksParam);

  if (!Number.isInteger(page) || page <= 0) {
    // TODO: 升级为 toast 提示
    console.error('页码不合法，请输入正整数');
    return;
  }

  $nav.value.go(page);

  if(!Number.isInteger(clicks) || clicks < 0) return;
  console.warn('拿到 clicks 参数：', clicks, '，但我暂未找到正确跳转到相应点击次数的方法qwq');
  // nextTick(() => {
  //   for (let i = 0; i < clicks; i++) {
  //     $nav.value.next();
  //   }
  // });
});
</script>

<template>
  <div />
</template>
