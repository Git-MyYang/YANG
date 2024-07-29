import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/infonav/left1'

    },
    {
      path: '/infonav',
      name: 'infonav',
      meta:{title: '主页列表'},
      redirect: '/infonav/left1',
      component: () => import('@/pages/infonav/infonav.vue'),
      children:[
        {
          path: '/infonav/left1',
          name: 'left1',
          meta:{title: '主页列表1'},
          component: () => import('@/pages/infonav/left1/left1.vue')
    
        },
        {
          path: '/infonav/left2',
          name: 'left2',
          meta:{title: '主页列表2'},
          component: () => import('@/pages/infonav/left2/left2.vue')
    
        },
        {
          path: '/infonav/left3',
          name: 'left3',
          meta:{title: '主页列表3'},
          component: () => import('@/pages/infonav/left3/left3.vue')
    
        },
      ]

    },
    
  ]
})

export default router
