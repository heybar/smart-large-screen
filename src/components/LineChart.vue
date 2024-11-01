<!-- 发电统计 -->
<template>
  <div class='line-container'>
    <div class="button-group">
      <button :class="{ 'btn': true, 'skew-button': true, 'w-100': true, 'skew-selected': this.activeType === '1' }"
        @click="getChartData('1')">
        <div>风电</div>
      </button>
      <button :class="{ 'btn': true, 'skew-button': true, 'w-100': true, 'skew-selected': this.activeType === '2' }"
        @click="getChartData('2')">
        <div>光电</div>
      </button>
      <button :class="{ 'btn': true, 'skew-button': true, 'w-100': true, 'skew-selected': this.activeType === '3' }"
        @click="getChartData('3')">
        <div>火电</div>
      </button>
      <button :class="{ 'btn': true, 'skew-button': true, 'w-100': true, 'skew-selected': this.activeType === '4' }"
        @click="getChartData('4')">
        <div>供热</div>
      </button>
      <button :class="{ 'btn': true, 'skew-button': true, 'w-100': true, 'skew-selected': this.activeType === '5' }"
        @click="getChartData('5')">
        <div>储能</div>
      </button>
    </div>
    <div class='power-line-chart' ref='lineChart'></div>
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
    await this.getChartData('1')
    this.initChart()
    this.$bus.$on('update', () => {
      this.getChartData()
      this.updateChart()
    })
  },
  // watch: {
  //   chartOption: {
  //     handler: function (newVal) {
  //       this.updateChart(newVal);
  //     },
  //     deep: true
  //   }
  // },
  methods: {
    async getChartData(type) {
      this.activeType = type
      const { data } = await getActivePowerLine({ type: this.activeType })
      this.chartOption = {
        tooltip: {
          trigger: 'axis'
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
          name: 'MW',
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
            data: item.data,
            smooth: true
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
          name: 'MW',
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
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true
          },
          {
            name: '光',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310],
            smooth: true
          },
          {
            name: '火',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410],
            smooth: true
          },
          {
            name: '供热',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320],
            smooth: true
          },
          {
            name: '储能',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320],
            smooth: true
          },
        ]
      };
      this.chartInstance.setOption(this.chartOption)
      window.addEventListener('resize', () => {
        that.chartInstance.resize(this.chartOption)
      })

    },
    updateChart() {
      this.chartInstance.setOption(this.chartOption)
    },
  }
}
</script>
<style lang='less' scoped>
.line-container {
  width: 100%;
  height: 360px;
}

.power-line-chart {
  width: 100%;
  height: 320px;
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
