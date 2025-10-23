<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  timeList: {
    type: Array,
    default: () => [],
  },
});
const timeList = props.timeList;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * 自动调用 $nav.value.next
 * @param timeList 每次点击前的等待时长
 * @param clkCount 点击了几次
 */
async function autoClick(timeList, clkCount) {
  if (clkCount >= timeList.length) {
    return;
  }

  await sleep(timeList[clkCount] * 1000);
  $nav.value.next();
  autoClick(timeList, clkCount + 1);
}

/**
 * 自动调用 $nav.value.go
 * @param timeList Array<number | number[]> ，前者：不需要点击，等待翻页的时间。后者：第一个元素是翻页前的等待时长，后面的是点击前的等待时长
 * @param page 当前在第几页，所以 timeList.length = PPT 总页数减1
 */
async function autoSlide(timeList, page) {
  if (page > timeList.length) {
    return;
  }

  if (Array.isArray(timeList[page - 1])) {
    const [turnWaitTime, ...clickWaitTime] = timeList[page - 1];
    // 宏任务是一瞬间推进去的，所以需要手动加上时间。试过让LLM实现，它实现不出来
    if (typeof turnWaitTime === 'number' && !isNaN(turnWaitTime)) {
      await sleep(turnWaitTime * 1000);
      $nav.value.go(page + 1);
      await autoClick(clickWaitTime, 0);
      await autoSlide(timeList, page + 1);
    }
    autoClick(clickWaitTime, 0);
    return;
  }

  await sleep(timeList[page - 1] * 1000);
  $nav.value.go(page + 1);
  autoSlide(timeList, page + 1);
}

onMounted(() => autoSlide(timeList, 1).catch(console.error));
</script>

<template>
  <div />
</template>
