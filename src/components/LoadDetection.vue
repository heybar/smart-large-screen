<!-- 发电统计 -->
<template>
  <div class='pi-container'>
    <div class="chart-title right-title">发电统计</div>
    <div class='pi-chart' ref='piChart'></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { getGeneStatisticsPie } from '../api/home'

export default {
  data() {
    return {
      chartInstance: null,
      chartOption: {},
      colorList: ['#F94F74', '#766BEE', '#42B2FE']
    }
  },
  async mounted() {
    await this.getChartData()
    this.initChart()
    this.$bus.$on('update', () => {
      this.getChartData()
      this.updateChart()
    })
  },
  // watch: {
  //   chartData: {
  //     handler: function (newVal) {
  //       this.updateChart(newVal);
  //     },
  //     deep: true
  //   }
  // },
  methods: {
    async getChartData() {
      const { data } = await getGeneStatisticsPie()
      this.chartOption = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'center',
          top: '5%',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            type: 'pie',
            top: '30%',
            radius: '80%',
            data: data.seriesData.map((item, index) => {
              return {
                value: item.value,
                name: item.name,
                itemStyle: {
                  color: this.colorList[index]
                }
              }
            }),
            label: {
              formatter: '{b} (MWh) :   {c}',
              color: '#fff'
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
    },
    initChart() {
      let that = this
      this.chartInstance = echarts.init(this.$refs["piChart"])
      // this.chartOption = {
      //   tooltip: {
      //     trigger: 'item'
      //   },
      //   legend: {
      //     orient: 'horizontal',
      //     left: 'center',
      //     top: '5%',
      //     textStyle: {
      //       color: '#fff'
      //     }
      //   },
      //   series: [
      //     {
      //       type: 'pie',
      //       top: '10%',
      //       radius: '70%',
      //       data: [
      //         { value: 30, name: '火电', itemStyle: { color: '#F94F74' } },
      //         { value: 40, name: '风电', itemStyle: { color: '#766BEE' } },
      //         { value: 30, name: '水电', itemStyle: { color: '#42B2FE' } },
      //       ],
      //       label: {
      //         formatter: '{b} :   {c}',
      //         color: '#fff'
      //       },
      //       emphasis: {
      //         itemStyle: {
      //           shadowBlur: 10,
      //           shadowOffsetX: 0,
      //           shadowColor: 'rgba(0, 0, 0, 0.5)'
      //         }
      //       }
      //     }
      //   ]
      // };
      this.chartInstance.setOption(this.chartOption)
      window.addEventListener('resize', () => {
        that.chartInstance.resize(this.chartOption)
      })

    },
    updateChart() {
      this.chartInstance.setOption(this.chartOption)
    }
  }
}
</script>
<style lang='less' scoped>
.pi-container {
  width: 100%;
  height: 280px;

  .chart-title {
    font-size: 25px;
    height: 50px;
    margin-left: 40px;
    margin-top: 10px;
  }

  .pi-chart {
    width: 570px;
    height: 230px;
  }

}
</style>
