<template>
  <div class='com-container'>

    <div class='charts-dom' ref='chartsDOM'></div>

    <div class="info">
      <div>火电有功功率（MW）：{{ activePowerRespVO.windActivePower }}</div>
      <div>风电有功功率（MW）：{{ activePowerRespVO.lightActivePower }}</div>
      <div>光电有功功率（MW）：{{ activePowerRespVO.fireActivePower }}</div>
      <div>储能有功功率（MW）：{{ activePowerRespVO.storedActivePower }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import * as echarts from 'echarts'
import neimenggu from '@/assets/json/neimenggu.json'
import { convertData } from '@/utils/map_utils'
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
      geoCoordMap: {},
      geoData: [],
      initOption: {},
      max: 480,
      min: 9,// todo 
      maxSize4Pin: 100,
      minSize4Pin: 20
    }
  },
  props: {
    activePowerRespVO: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.initChart()
    window.addEventListener('resize', () => {
      this.chartInstance.setOption(this.initOption)
      this.chartInstance.resize(this.initOption)
    })
  },
  methods: {
    initChart() {
      const MapData = neimenggu;
      echarts.registerMap('内蒙古', MapData)
      this.initOption = {
        // title: {
        //   top: 20,
        //   text: '内蒙古',
        //   subtext: '',
        //   x: 'center',
        //   textStyle: {
        //     color: '#ccc',
        //   },
        // },
        tooltip: { trigger: 'item' },
        geo: {
          tooltip: {
            show: false
          },
          map: '内蒙古', //地图为刚刚设置的China
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#013C62',
              shadowColor: '#182f68',
              shadowOffsetX: 0,
              shadowOffsetY: 25,
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
              color: 'green',
              label: {
                show: false,
              },
            },
          },
        },
        select: {//这个就是鼠标点击后，地图想要展示的配置
          disabled: true,//可以被选中
        },
        series: [
          {
            tooltip: {
              show: false
            },
            type: 'map',
            roam: true,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                },
              },
              emphasis: {
                textStyle: {
                  color: '#fff',
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: '#2ab8ff',
                borderWidth: 1.5,
                areaColor: '#12235c',
              },
              emphasis: {
                areaColor: '#2ab8ff',
                borderWidth: 0,
                color: 'green',
              },
            },
            zoom: 1.1,
            roam: false,
            map: '内蒙古', //使用中国地图
            // data: this.difficultData //热力图数据   不同区域 不同的底色
          },
          {
            tooltip: {
              show: true,
              formatter: function (params) {
                console.log(params);
                return (

                  params.name + ':' +
                  '<br> ' +
                  params.data.value[2]
                );
              },
              borderColor: '#fff'
            },
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: 'fill',
            },
            itemStyle: {
              color: 'yellow',
              shadowBlur: 10,
              shadowColor: '#333',
              borderColor: '#fff'
            },
            data: [
              {
                name: '火电',
                value: [119.80, 44.49, 111111],
              },
            ],
          },
        ],
      }
      this.chartInstance = echarts.init(this.$refs["chartsDOM"])
      this.chartInstance.setOption(this.initOption)

    },
  },
}
</script>


<style lang='less' scoped>
.com-container {
  width: 100%;
  height: 100%;
  position: relative;

  .info {
    background-color: transparent;
    position: absolute;
    left: 30px;
    top: 20px;
    font-size: 20px;
    cursor: default;
    user-select: none;

    div {
      margin-bottom: 5px;
    }
  }

  .charts-dom {
    width: 100%;
    height: 100%;
  }

}
</style>
