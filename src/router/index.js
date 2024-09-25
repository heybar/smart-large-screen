import Vue from 'vue'
import VueRouter from 'vue-router'
import ScreenPage from '@/views/ScreenPage'
import Index from '@/views/Index'
import SubPage from '@/views/SubPage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ScreenPage',
    component: Index,
    children: [
      {
        path: '/ScreenPage',
        component: ScreenPage
      },
      {
        path: '/SubPage',
        component: SubPage
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
