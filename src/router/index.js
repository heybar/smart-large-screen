import Vue from 'vue'
import VueRouter from 'vue-router'
import ScreenPage from '@/views/ScreenPage'
import Index from '@/views/Index'
import EnergyCount from '@/views/EnergyCount'
import StatsAnalysis from '@/views/StatsAnalysis/Index'
import PointData from '@/views/StatsAnalysis/PointData'
import PredictData from '@/views/StatsAnalysis/PredictData'
import SchedulingData from '@/views/StatsAnalysis/SchedulingData'
import SchedulingAnalysis from '@/views/StatsAnalysis/SchedulingAnalysis'

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
      },
      {
        path: '/StatsAnalysis',
        redirect: '/StatsAnalysis/PointData',
        component: StatsAnalysis,
        children: [
          {
            path: '/StatsAnalysis/PointData',
            component: PointData,
          },
          {
            path: '/StatsAnalysis/PredictData',
            component: PredictData,
            name: 'PredictData'
          },
          {
            path: '/StatsAnalysis/SchedulingData',
            component: SchedulingData,
            name: "SchedulingData"
          },
          {
            path: '/StatsAnalysis/SchedulingAnalysis',
            component: SchedulingAnalysis,
            name: "SchedulingAnalysis"
          }
        ]
      },

    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
