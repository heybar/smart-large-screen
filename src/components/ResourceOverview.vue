<!-- 储能电池 -->
<template>
  <div>
    <div class="chart-title right-title">储能电池</div>
    <div class="table-content">
      <div class="left">
        <i class="iconfont icon-dianchi"></i>
      </div>
      <div class="right">
        <!-- <div>今日充电量：</div>
        <div>今日放电量：</div>
        <div>储能总运行功率（MW）：</div> -->
        <div class="line-chart" ref="lineChart"></div>
      </div>
    </div>
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
  align-items: center;
  .left {
    height: 250px;
    margin-top: 10px;
    margin-left: 0px;
  }
  .right {
    margin-left: 5px;
    
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .line-container {
      width: 100%;
      height: 300px;
    }

    .line-chart {
      width: 300px;
      height: 300px;
    }
    div {
      font-size: 22px;
    }
  }
}
</style>