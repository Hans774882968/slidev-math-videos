import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { getWebsiteBasePath } from './src/lib/routeUtils';

export default defineConfig(() => {
  const basePath = getWebsiteBasePath();

  console.log(`[smv] Base path: ${basePath}`);

  return {
    base: basePath,
    plugins: [
      vue(),
      tailwindcss(),
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: false,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5226,
    },
  };
});
