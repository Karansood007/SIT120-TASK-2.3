import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home-page.vue';
import About from './components/about-page.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about-page', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // Export the router as the default export
