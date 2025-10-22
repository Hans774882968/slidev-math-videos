import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import { getWebsiteBasePath } from './lib/routeUtils';
import NotFound from './NotFound.vue';

const basePath = getWebsiteBasePath();

export default createRouter({
  history: createWebHistory(basePath),
  routes: [
    { path: '/', component: Home },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404',
    },
  ],
});
