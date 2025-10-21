<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  timeList: {
    type: Array,
    default: () => [],
  },
});
const timeList = props.timeList;

function autoSlide(timeList, page) {
  if (page > timeList.length) {
    return;
  }

  setTimeout(() => {
    $nav.value.go(page + 1);
    autoSlide(timeList, page + 1);
  }, timeList[page - 1] * 1000);
}

onMounted(() => autoSlide(timeList, 1));
</script>

<template>
  <div />
</template>
