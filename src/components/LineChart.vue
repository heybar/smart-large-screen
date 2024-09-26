<!-- 发电统计 -->
<template>
  <div class='line-container'>
    <div class='line-chart' ref='lineChart'></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {
      chartInstance: null,
      chartOption: {}
    }
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
          data: ['火', '火A', '火B', '风电'],
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
          data: ['0时', '4时', '8时', '12时', '16时', '20时', '24时'],
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
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '火',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '火A',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '火B',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '风电',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
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
<style lang='less' scoped>
.line-container {
  width: 100%;
  height: 280px;
}

.line-chart {
  width: 570px;
  height: 280px;
}
</style>
