<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex justify-between items-center w-full text-sm">
      <div class="font-semibold">
        步数: {{ stepCount }}
      </div>
      <button
        class="px-2 py-1 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
        @click="resetGrid"
      >
        重置
      </button>
    </div>

    <div
      :class="[
        'grid rounded-2xl shadow-xl bg-emerald-300',
        gridSizeClasses,
      ]"
      :style="{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }"
    >
      <div
        v-for="(row, rIdx) in grid"
        :key="rIdx"
        class="contents"
      >
        <div
          v-for="(val, cIdx) in row"
          :key="cIdx"
          :class="[
            'flex items-center justify-center text-2xl font-bold rounded-lg cursor-pointer transition-all duration-300 transform active:scale-90',
            cellSizeClasses,
            val === 1
              ? 'bg-green-600 text-white shadow-inner'
              : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
          ]"
          @click="toggleCells(rIdx, cIdx)"
        >
          {{ val }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    default: 3,
    validator: (value) => value >= 2 && value <= 100
  },
  cellSize: {
    type: String,
    default: 'w-8 h-8 sm:w-10 sm:h-10'
  }
});

const grid = ref([]);
const stepCount = ref(0);

const initGrid = () => {
  grid.value = Array.from({ length: props.size }, () =>
    Array.from({ length: props.size }, () => 0)
  );
};

// 初始化
initGrid();

// 监听 size 变化，重置游戏
watch(() => props.size, () => {
  resetGrid();
});

const isLargeCell = computed(() => {
  // 简单判断：如果包含 w-12、w-16、w-20 等较大尺寸，视为“大”
  return /w-(1[6-9]|[2-9]\d)/.test(props.cellSize);
});

const gridSizeClasses = computed(() => {
  return isLargeCell.value ? 'gap-4 p-4' : 'gap-2 p-2';
});

const cellSizeClasses = computed(() => props.cellSize);

// 目标状态：(0,0) 为 1，其余为 0
const checkWin = () => {
  for (let r = 0; r < props.size; r++) {
    for (let c = 0; c < props.size; c++) {
      if (r === 0 && c === 0) {
        if (grid.value[r][c] !== 1) return false;
      } else {
        if (grid.value[r][c] !== 0) return false;
      }
    }
  }
  return true;
};

const toggleCells = (r, c) => {
  const positions = [
    [0, 0],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  positions.forEach(([dr, dc]) => {
    const newR = r + dr;
    const newC = c + dc;
    if (newR >= 0 && newR < props.size && newC >= 0 && newC < props.size) {
      grid.value[newR][newC] = grid.value[newR][newC] === 0 ? 1 : 0;
    }
  });

  stepCount.value += 1;

  if (checkWin()) {
    setTimeout(() => {
      alert('恭喜成功！');
    }, 200);
  }
};

const resetGrid = () => {
  initGrid();
  stepCount.value = 0;
};
</script>
