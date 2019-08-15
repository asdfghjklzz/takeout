import Vue from 'vue'
import Router from 'vue-router'
import FooterGuide from '@/components/FooterGuide/FooterGuide'
import Msite from '@/pages/Msite/Msite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'

Vue.use(Router)

export default new Router({
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
      component: Profile
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
