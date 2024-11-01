<!-- 发电统计 -->
<template>
  <div class='line-container'>
    <div class="button-group">
      <button class="skew-button w-100 skew-selected">
        <div>风电</div>
      </button>
      <button class="skew-button w-100 skew-selected">
        <div>光电</div>
      </button>
      <button class="skew-button w-100">
        <div>火电</div>
      </button>
      <button class="skew-button w-100">
        <div>供热</div>
      </button>
      <button class="skew-button w-100">
        <div>储能</div>
      </button>
    </div>
    <div class='line-chart' ref='lineChart'></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { getActivePowerLine } from '../api/home'
export default {
  data() {
    return {
      chartInstance: null,
      chartOption: {},
      activeType: '1'
    }
  },
  async mounted() {
    await this.getChartData()
    this.initChart()
  },
  watch: {
    chartOption: {
      handler: function (newVal) {
        this.updateChart(newVal);
      },
      deep: true
    }
  },
  methods: {
    async getChartData() {
      const { data } = await getActivePowerLine({ type: '1' })
      this.chartOption = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '5%',
          data: data.series.map(item => item.name),
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
          data: data.categories,
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
        series: data.series.map(item => {
          return {
            name: item.name,
            type: 'line',
            stack: 'Total',
            data: item.data
          }
        })
      };
    },
    initChart() {
      let that = this
      this.chartInstance = echarts.init(this.$refs["lineChart"])
      this.chartOption = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '5%',
          data: ['风', '光', '火', '供热', '储能'],
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
            name: '风',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '光',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '火',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '供热',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '储能',
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

    },
    updateChart() {
      const option = {}
      this.chartInstance.setOption(option)
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

.button-group {
  display: flex;
  justify-content: space-around;
  margin: 0, 20px;
}

.w-100 {
  width: 100px;
}
</style>
