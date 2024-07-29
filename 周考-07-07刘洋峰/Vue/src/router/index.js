import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import Commodity from '../pages/home/commodity/Commodity.vue'
import Infos from '../pages/home/commodity/infos/Infos.vue'
import Remark from '../pages/home/remark/Remark.vue'
import Merchant from '../pages/home/merchant/Merchant.vue'
import Notfound from '../pages/404/404.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{title:'主页'},
      redirect:'/commodity',
      children:[
        {
          path: '/commodity',
          name: 'commodity',
          component:  Commodity,
          meta:{title:'商品'},
        
        },
        {
          path: '/remark',
          name: 'remark',
          component:  Remark,
          meta:{title:'评论'},
    
        },
        {
          path: '/merchant',
          name: 'merchant',
          component: Merchant,
          meta:{title:'商家'},
    
        },
      ]
    },
    {
      path: '/commodity/infos',
      name: 'infos',
      component:  Infos,
      meta:{title:'详情页'},
    },
    
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: Notfound
    }
  ]
})

export default router
