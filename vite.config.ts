import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { getWebsiteBasePath } from './src/lib/routeUtils';

export default defineConfig(() => {
  const basePath = getWebsiteBasePath();
  const isGitHubPages = import.meta.env.VITE_DEPLOY_TARGET === 'github-pages';
  const buildOptions = isGitHubPages ? {
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: 'index.html',
        '404': '404.html',
      },
    },
  } : {};

  console.log(`[smv] Base path: ${basePath}`);

  return {
    base: basePath,
    plugins: [
      vue(),
      tailwindcss(),
    ],
    build: buildOptions,
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
