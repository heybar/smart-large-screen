<template>
  <div class='com-container'>
    <div class='charts-dom' ref='chartsDOM'></div>
  </div>
</template>

<script>
import axios from 'axios'
import * as echarts from 'echarts'
// async initChart() {
//       this.chartInstance = this.$echarts.init(this.$refs.map_ref, this.theme)
//       const ret = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/150000.json')
//       this.$echarts.registerMap('china', ret.data)
//       const initOption = {
//         // title: {
//         //   text: '▎ 商家分布',
//         //   left: 20,
//         //   top: 20
//         // },
//         geo: {
//           type: 'map',
//           map: 'china',
//           top: '5%',
//           bottom: '5%',
//           itemStyle: {
//             areaColor: '#2E72BF',
//             borderColor: '#333'
//           }
//         },
//         legend: {
//           left: '5%',
//           bottom: '5%',
//           orient: 'vertical'
//         }
//       }
//       this.chartInstance.setOption(initOption)
//     },
export default {
  data() {
    return {
      chartInstance: null,
      initOption: {
        // title: {
        //   text: '▎ 商家分布',
        //   left: 20,
        //   top: 20
        // },
        geo: {
          type: 'map',
          map: 'neimenggu',
          top: '5%',
          bottom: '5%',
          itemStyle: {
            areaColor: '#31487c',
            borderColor: '#46b2c9',
            borderWidth: window.innerWidth / 480
          }
        },
        legend: {
          left: '5%',
          bottom: '5%',
          orient: 'vertical'
        }
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    async initChart() {
      let that = this
      this.chartInstance = echarts.init(this.$refs["chartsDOM"])
      const res = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/150000_full.json')
      echarts.registerMap('neimenggu', { geoJSON: res.data })

      this.chartInstance.setOption(this.initOption)
      window.addEventListener('resize', () => {
        that.initOption = {
          // title: {
          //   text: '▎ 商家分布',
          //   left: 20,
          //   top: 20
          // },
          geo: {
            type: 'map',
            map: 'neimenggu',
            top: '5%',
            bottom: '5%',
            itemStyle: {
              areaColor: '#31487c',
              borderColor: '#46b2c9',
              borderWidth: window.innerWidth / 1920
            }
          },
          legend: {
            left: '5%',
            bottom: '5%',
            orient: 'vertical'
          }
        }
        that.chartInstance.setOption(that.initOption)
        that.chartInstance.resize(that.initOption)
      })
    }
  }
}
</script>


<style lang='less' scoped>
.com-container {
  width: 100%;
  height: 100%;
}

.charts-dom {
  width: 100%;
  height: 100%;
}
</style>
