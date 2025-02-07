import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/components/home/Home.vue";
import Index from "@/components/server-state/index.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/server-state',
      name: 'server-state',
      component: Index,
    },
  ],
})

export default router
