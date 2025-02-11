<template>
  <div class="state-statistics">
    <div class="state-title">
      <div class="left-title chart-title">总有功功率</div>
    </div>

    <div v-if="lineData.length" class="card-content">
      <EchartsLineChart
        :data="lineData"
        :smooth="false"
        :y-axis-name="'n/s'"
        :is-linear-gradient="false"
        :line-color="'#405DF9'"
        :xAxisColor="'#fff'"
        :yAxisColor="'#fff'"
        :showSymbol="true"
        :symbolType="'circle'"
        :symbolSize="4"
        :symbolTransparent="true"
        :split-line-style="{
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.2)',
        }"
      />
    </div>
  </div>
</template>
<script>
import EchartsLineChart from '@/components/EchartsLineChart';

export default {
  components: {
    EchartsLineChart,
  },
  data() {
    return {
      lineData: [
        ['1时', 15],
        ['4时', 5],
        ['8时', 14],
        ['12时', 19],
        ['16时', 17],
        ['20时', 24],
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.state-statistics {
  display: flex;
  flex-direction: column;
  height: 100%;

  .card-content {
    flex: 1;
    padding: 8px 10px;
  }
}
</style>
