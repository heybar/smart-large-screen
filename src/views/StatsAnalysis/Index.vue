<template>
  <div class="stats-analysis">
    <SubTitle :routerList="routerList"></SubTitle>
    <router-view></router-view>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle'
export default {
  components: {
    SubTitle
  },
  data() {
    return {
      routerList: [
        { title: '测点数据', path: '/StatsAnalysis/PointData' },
        { title: '预测数据', path: '/StatsAnalysis/PredictData' },
        { title: '调度数据', path: '/StatsAnalysis/SchedulingData' },
        { title: '调度分析', path: '/StatsAnalysis/SchedulingAnalysis' }
      ]
    }
  }

}
</script>

<style lang="less"></style>
