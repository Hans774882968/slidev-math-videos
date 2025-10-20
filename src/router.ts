import { createRouter, createWebHistory } from 'vue-router';
import Home from './App.vue';
import { getWebsiteBasePath } from './lib/routeUtils';

const basePath = getWebsiteBasePath();

export default createRouter({
  history: createWebHistory(basePath),
  routes: [
    { path: '/', component: Home },
  ],
});
