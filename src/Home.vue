<script setup lang="ts">
import { onMounted } from 'vue';
import { cn } from '@/lib/utils';
import { getWebsiteBasePath, redirectToDestination } from '@/lib/routeUtils';
import { ppts } from '@/lib/ppts';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => redirectToDestination(router));

const basePath = getWebsiteBasePath();

const staggerDelay = 100;
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-(--background) text-(--comment)"
  >
    <header class="py-16 px-6 text-center bg-gradient-to-br from-(--purple)/10 via-transparent to-(--purple)/15">
      <h1
        v-motion
        class="text-5xl md:text-7xl font-bold mb-6"
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="400"
      >
        数学 PPT 展示站
      </h1>
      <p
        v-motion
        class="text-lg md:text-xl text-(--comment) max-w-2xl mx-auto"
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="400"
      >
        一起探索数学之美，为做题人的精神世界添砖加瓦~
      </p>
    </header>

    <main class="flex-1 p-6">
      <div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="(p, index) in ppts"
            :key="p.id"
            v-motion
            :href="`${basePath}${p.id}/`"
            :class="cn(
              'block p-6 space-y-2 rounded-lg shadow',
              'bg-(--current-line)',
              'border border-(--purple)/20',
              'transition-all duration-300',
              'hover:border-(--purple) hover:shadow-xl hover:shadow-[hsl(265,89%,78%,0.2)] hover:-translate-y-1'
            )"
            :initial="{ opacity: 0, scale: 0 }"
            :enter="{
              opacity: 1,
              scale: 1,
              transition: {
                delay: index * staggerDelay,
                duration: 400,
              }
            }"
          >
            <h2 class="text-xl font-bold">
              {{ p.title }}
            </h2>
            <p class="text-(--comment)">
              {{ p.date }}
            </p>
            <p
              v-if="p.intro"
              class="text-(--foreground)"
            >
              {{ p.intro }}
            </p>
          </a>
        </div>
      </div>
    </main>

    <footer class="py-6 px-6 text-(--comment) border-t border-(--current-line)">
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0 }"
          :duration="400"
        >
          <h3 class="text-lg font-semibold mb-4">
            关于平台
          </h3>
          <p class="text-(--comment) leading-relaxed">
            精选 Slidev 实现的数学问题演示文稿，通过可视化交互，助你深入理解各个方向的数学问题~
          </p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0 }"
          :duration="400"
        >
          <h3 class="text-lg font-semibold mb-4">
            技术栈
          </h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 text-xs rounded-full bg-(--current-line) text-(--purple)">
              Vue3
            </span>
            <span class="px-3 py-1 text-xs rounded-full bg-(--current-line) text-(--pink)">
              Vite
            </span>
            <span class="px-3 py-1 text-xs rounded-full bg-(--current-line) text-(--purple)">
              Slidev
            </span>
            <span class="px-3 py-1 text-xs rounded-full bg-(--current-line) text-(--pink)">
              Tailwind CSS
            </span>
          </div>
        </div>
          
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0 }"
          :duration="400"
        >
          <h3 class="text-lg font-semibold mb-4">
            联系方式
          </h3>
          <div>
            <p class="text-(--comment)">
              邮箱: hans7@example.com
            </p>
            <p class="text-(--comment)">
              GitHub: Hans774882968
            </p>
          </div>
        </div>
      </div>

      <div
        v-motion
        class="mt-6 pt-6 border-t border-(--current-line) text-center space-y-2"
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="400"
      >
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
