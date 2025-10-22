<script setup lang="ts">
/**
 * 输入URL http://hans774882968.github.io/slidev-math-videos/251011 发现仍然有无限加载 bug
 * 前两个项目没这个 bug 是因为`react-router-dom`把URL都拦下来了
 * 试加入路由的404页面，看能否解决这个 bug
 */
import { useRouter } from 'vue-router';
import { cn } from '@/lib/utils';

const router = useRouter();
const goToHome = () => {
  router.push('/');
};
</script>

<template>
  <div
    class="min-h-screen bg-(--background) text-(--foreground) flex flex-col"
  >
    <div
      class="flex flex-col justify-center items-center flex-1 text-center p-6"
    >
      <h1
        v-motion
        :initial="{ scale: 0.5, opacity: 0 }"
        :enter="{ scale: 1, opacity: 1 }"
        :delay="300"
        :duration="400"
        class="text-8xl md:text-9xl font-bold text-(--purple) mb-4"
      >
        404
      </h1>
      <h2
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="400"
        :duration="400"
        class="text-2xl md:text-3xl font-semibold mb-4"
      >
        你来到了没有知识的荒原
      </h2>
      <p
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="500"
        :duration="400"
        class="text-(--comment) mb-8 max-w-md"
      >
        可能是链接错误或页面已被移除
      </p>
      <button
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="700"
        :duration="400"
        :class="cn(
          'px-6 py-3 rounded-lg font-medium cursor-pointer transition-all duration-300',
          'bg-(--purple) text-(--background)',
          'hover:shadow-lg hover:shadow-[hsl(265,89%,78%,0.2)] hover:-translate-y-0.5'
        )"
        @click="goToHome"
      >
        回到首页
      </button>
    </div>

    <footer
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 700, duration: 400 } }"
      class="py-6 px-6 text-(--comment) border-t border-(--current-line)"
    >
      <div class="text-center space-y-2">
        <div class="flex justify-center items-center gap-2">
          <span>Made with</span>
          <div class="animate-heartbeat">
            ❤
          </div>
          <span>by Hans7</span>
        </div>
        <p>© {{ new Date().getFullYear() }} 数学 PPT 展示站</p>
      </div>
    </footer>
  </div>
</template>
