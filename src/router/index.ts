import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/components/home/Home.vue";
import Index from "@/components/server-status/index.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/server-status',
      name: 'server-status',
      component: Index,
    },
  ],
})

export default router
