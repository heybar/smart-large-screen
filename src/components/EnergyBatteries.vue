<!-- 储能电池 -->
<template>
  <div>
    <div class="chart-title right-title">储能电池</div>
    <div class="table-content">
      <div class="left">
        <Battery></Battery>
      </div>
      <div class="line-chart" ref="lineChart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import Battery from './Battery/Battery.vue'

export default {
  data() {
    return {
      chartInstance: null,
      chartOption: {}
    }
  },
  components: {
    Battery
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      let that = this
      this.chartInstance = echarts.init(this.$refs["lineChart"])
      this.chartOption = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '5%',
          data: ['充电量', '发电量'],
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG'],
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            name: '充电量',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '发电量',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },

        ]
      };
      this.chartInstance.setOption(this.chartOption)
      window.addEventListener('resize', () => {
        that.chartInstance.resize(this.chartOption)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.chart-title {
  font-size: 25px;
  height: 50px;
  margin-left: 40px;
  margin-top: 10px;
}

.table-content {
  height: 250px;
  display: flex;
  padding-left: 30px;
  justify-content: space-around;
  align-items: center;

  .left {
    padding: 20px;
  }

  .line-chart {
    width: 460px;
    height: 230px;
  }

}
</style>