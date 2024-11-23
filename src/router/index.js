import Vue from 'vue'
import VueRouter from 'vue-router'
import ScreenPage from '@/views/ScreenPage'
import Index from '@/views/Index'
import EnergyCount from '@/views/EnergyCount'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Index',
    component: Index,
    children: [
      {
        path: '/Index',
        component: ScreenPage,
      },
      {
        path: '/EnergyCount',
        component: EnergyCount,
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
