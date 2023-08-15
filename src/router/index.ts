import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: import('../views/home.vue'),
    redirect: "/index",
    children: [
      {
        path: '/index',
        name: 'index',
        component: import('../views/index.vue'),
      },
      {
        path: '/notFound',
        name: 'not-found',
        component: import('../views/error/404.vue'),
      },
      // 添加通配符路由

      {
        path: '/:catchAll(.*)',
        redirect: '/notFound' // 跳转到404组件
      },
    ]
  },

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
