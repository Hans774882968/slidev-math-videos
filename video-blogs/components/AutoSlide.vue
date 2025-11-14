<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  timeList: {
    type: Array,
    default: () => [],
  },
  debug: {
    type: Boolean,
    default: false,
  }
});
const timeList = props.timeList;
const dbg = props.debug;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * 自动调用 $nav.value.next
 * @param clickTimeList 每次点击前的等待时长
 * @param clkCount 点击了几次
 */
async function autoClick(clickTimeList, clkCount) {
  if (clkCount >= clickTimeList.length) {
    return;
  }

  await sleep(clickTimeList[clkCount] * 1000);
  if (dbg) {
    console.log(`第${clkCount + 1}次点击，等待时长`, clickTimeList[clkCount], clickTimeList, clkCount);
  }
  $nav.value.next();
  autoClick(clickTimeList, clkCount + 1);
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
      if (dbg) {
        console.log('翻到页码', page + 1, '等待时长', turnWaitTime, timeList, page - 1, turnWaitTime, clickWaitTime);
      }
      $nav.value.go(page + 1);
      await autoClick(clickWaitTime, 0);
      await autoSlide(timeList, page + 1);
    }
    return;
  }

  await sleep(timeList[page - 1] * 1000);
  if (dbg) {
    console.log('翻到页码', page + 1, '等待时长', timeList[page - 1]);
  }
  $nav.value.go(page + 1);
  autoSlide(timeList, page + 1);
}

onMounted(() => autoSlide(timeList, 1).catch(console.error));
</script>

<template>
  <div />
</template>
