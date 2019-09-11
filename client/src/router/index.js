import Vue from 'vue'
import Router from 'vue-router'
import FooterGuide from '@/components/FooterGuide/FooterGuide'
import Msite from '@/pages/Msite/Msite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/Msite',
      name: 'Msite',
      component: Msite
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
      	console.log("beforeEnter");
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})

//全局钩子
router.beforeEach((to, from, next) => {
   //会在任意路由跳转前执行，next一定要记着执行，不然路由不能跳转了 
   console.log('beforeEach----'+to+'----'+from+'----'+next);
   next()
})

router.afterEach((to, from) => {
  //会在任意路由跳转后执行
  console.log('afterEach----'+to+'----'+from);
})

export default router