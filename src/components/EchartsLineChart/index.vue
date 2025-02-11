<template>
  <div id="line-chart" ref="lineChart" v-resize="resize"></div>
</template>

<script>
import * as echarts from 'echarts';
import { hexToRgba } from '@/utils/utils';
export default {
  name: 'LineChart',
  // 自定义指令：监听dom元素变化
  directives: {
    // 使用局部注册指令的方式
    resize: {
      // 指令的名称
      bind(el, binding) {
        // el为绑定的元素，binding为绑定给指令的对象
        let width = '';
        let height = '';
        function isReize() {
          const style = document.defaultView.getComputedStyle(el);
          if (width !== style.width || height !== style.height) {
            binding.value(); // 关键
          }
          width = style.width;
          height = style.height;
        }
        el.__vueSetInterval__ = setInterval(isReize, 300);
      },
      unbind(el) {
        clearInterval(el.__vueSetInterval__);
      },
    },
  },
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [],
    },
    // 标题
    title: {
      type: String,
      default: '',
    },
    // 小标题
    subhead: {
      type: String,
      default: '',
    },
    // 折线标题（limit大于2启用）
    titleList: {
      type: Array,
      default: () => [],
    },
    // 折线数量
    limit: {
      type: Number,
      default: 1,
    },
    // 折线区域颜色是否渐变
    isLinearGradient: {
      type: Boolean,
      default: false,
    },
    // 自定义折线区域渐变颜色
    linearGradientColorList: {
      type: Array,
      default: () => [],
    },
    // 折线颜色(十六进制)
    lineColor: {
      type: [Array, String],
      default: '#F95E66',
    },
    smooth: {
      type: Boolean,
      default: true,
    },
    showSymbol: {
      type: Boolean,
      default: false,
    },
    symbolType: {
      type: String,
      default: 'emptyCircle',
    },
    symbolSize: {
      type: Number,
      default: 12,
    },
    symbolTransparent: {
      type: Boolean,
      default: false,
    },
    splitLineStyle: {
      type: Object,
      default: () => {
        return {
          type: 'dashed', //虚线
          color: '#DCDCDC',
        };
      },
    },
    xAxisColor: {
      type: String,
      default: '#96979C',
    },
    yAxisColor: {
      type: String,
      default: '#96979C',
    },
    tooltipBackground: {
      type: String,
      default: '#ffffff',
    },
    tooltipTitleColor: {
      type: String,
      default: '#96979C',
    },
    tooltipContentColor: {
      type: String,
      default: '#303743',
    },
    // 是否显示legend
    showLegend: {
      type: Boolean,
      default: false,
    },
    legendLeft: {
      type: [String, Number],
      default: 'auto',
    },
    // 默认展示的数据
    selected: {
      type: Object,
      default: () => {},
    },
    legendIcon: {
      type: Object,
      default: () => {
        return {
          icon: 'circle',
          itemHeight: 10,
          itemGap: 30, //设置图例的间距
        };
      },
    },
    showXAxis: {
      type: Boolean,
      default: true,
    },
    showYAxis: {
      type: Boolean,
      default: true,
    },
    // 是否启用x轴底部实线
    showXAxisAxisLine: {
      type: Boolean,
      default: true,
    },
    yAxisName: {
      type: String,
      default: '',
    },
    splitAxisLabel: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      myChart: null,
    };
  },
  computed: {
    // 渐变颜色
    getColor() {
      let linearGradient = '';
      if (this.isLinearGradient && typeof this.lineColor === 'string') {
        linearGradient = {
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color:
                  this.linearGradientColorList.length > 0
                    ? hexToRgba(this.linearGradientColorList[0], 0.5)
                    : hexToRgba(this.lineColor, 0.2),
              },
              {
                offset: 0.6,
                color:
                  this.linearGradientColorList.length > 0
                    ? hexToRgba(this.linearGradientColorList[1], 0.3)
                    : hexToRgba(this.lineColor, 0.1),
              },
              {
                offset: 0.8,
                color:
                  this.linearGradientColorList.length > 0
                    ? hexToRgba(this.linearGradientColorList[1], 0)
                    : hexToRgba(this.lineColor, 0),
              },
            ]),
          },
        };
      } else if (this.isLinearGradient && typeof this.lineColor === 'object') {
        linearGradient = this.lineColor.map((item) => ({
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: hexToRgba(item, 0.2) },
              { offset: 0.4, color: hexToRgba(item, 0.1) },
              { offset: 0.8, color: hexToRgba(item, 0) },
            ]),
          },
        }));
      }
      return linearGradient;
    },
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.drawLineChart();
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLineChart();
    });
  },
  methods: {
    drawLineChart() {
      if (this.myChart) {
        this.myChart.clear();
        this.myChart.dispose();
      }
      this.myChart = echarts.init(this.$refs.lineChart);
      const self = this;
      var option = {
        title: {
          text: [`{title|${this.title}}`, `{subhead|${this.subhead}}`].join(''),
          textStyle: {
            rich: {
              title: {
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'PingFangSC-Semibold, PingFang SC',
                color: '#303743',
              },
              subhead: {
                fontSize: 14,
                fontWeight: 400,
                fontFamily: 'PingFangSC-Regular, PingFang SC',
                color: '#303743',
              },
            },
          },
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            //params[0].name表示x轴数据
            let str =
              `<div style='width: 100%;height: 100%;padding: 10px;background: ${self.tooltipBackground}'>` +
              `<div style='font-size: 12px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: ${self.tooltipTitleColor};'>` +
              params[0].data[0] +
              '</div>';
            //params是数组格式
            for (const index in params) {
              //设置浮层图形的样式跟随图中展示的颜色
              str += `<div style="margin-bottom: ${
                Number(index) !== params.length - 1 ? 4 : 0
              }px;">
                <span style="display:inline-block;width:10px;height:10px;border-radius:10px;background-color:
                ${params[index].color};"></span>
                <span style="margin-left: 6px;font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;color: ${self.tooltipContentColor};">
                  ${params[index].seriesName || params[index].name} : ${
                params[index].data[1]
              }${self.yAxisName}</span></div>`;
            }
            str += `</div>`;
            return str;
          },
          valueFormatter: (value) => value,
          textStyle: {
            fontWeight: 400,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            fontSize: 14,
            color: '#303743',
          },
          backgroundColor: 'rgba(255,255,255,0)',
          borderColor: 'rgba(255,255,255,0)',
          padding: 0,
          axisPointer: {
            type: 'line',
            lineStyle: {
              width: 2,
              color:
                typeof this.lineColor === 'string'
                  ? this.lineColor
                  : this.lineColor[0],
            },
          },
        },
        legend: {
          show: this.showLegend,
          top: this.title || this.subhead ? '33px' : 'top',
          left: this.legendLeft,
          ...this.legendIcon,
          textStyle: {
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            fontWeight: 400,
            color: '#303743',
          },

          selected: this.selected,
        },
        xAxis: {
          type: 'category',
          show: this.showXAxis,
          boundaryGap: this.showXAxis,
          offset: 5,
          splitLine: {
            show: false,
          },
          axisLabel: {
            fontSize: 13,
            fontWeight: 400,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            color: this.xAxisColor,
            formatter: function (value) {
              return self.splitAxisLabel ? value.split(' ').join('\n') : value;
            },
          },
          axisLine: {
            show: this.showXAxisAxisLine,
            lineStyle: {
              color: '#E8E8E8',
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          name: this.yAxisName,
          nameTextStyle: {
            padding: [0, 20, 10, 0],
            fontSize: 13,
            fontWeight: 400,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            color: this.yAxisColor,
          },
          type: 'value',
          show: this.showYAxis,
          offset: 10,
          splitLine: {
            lineStyle: { ...this.splitLineStyle },
          },
          axisLabel: {
            fontSize: 13,
            fontWeight: 400,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            color: this.yAxisColor,
          },
        },
        grid: {
          top:
            (this.title || this.subhead) && this.showLegend
              ? 80
              : this.title || this.subhead || this.showLegend || this.yAxisName
              ? 50
              : 30,
          bottom: this.showXAxis ? '2%' : 0,
          left: '3%',
          right: 15,
          containLabel: true,
        },
        series: [],
      };

      const enums = {
        true: () => {
          option.series = [
            {
              name: this.title,
              type: 'line',
              symbol: this.symbolType,
              smooth: this.smooth,
              showSymbol: this.showSymbol,
              symbolSize: this.symbolSize,
              sampling: 'average',
              itemStyle: {
                color: this.symbolTransparent ? 'transparent' : this.lineColor,
                borderColor: this.lineColor, // 设置边框颜色为红色
                borderWidth: 2, // 设置边框宽度
              },
              lineStyle: {
                color: this.lineColor,
              },
              ...this.getColor,
              data: this.data,
            },
          ];
        },
        false: () => {
          option.series = this.data.map((item, index) => ({
            name: this.titleList[index],
            type: 'line',
            symbol: this.symbolType,
            smooth: this.smooth,
            showSymbol: this.showSymbol,
            symbolSize: this.symbolSize,
            sampling: 'average',
            itemStyle: {
              color: this.lineColor[index],
            },
            ...this.getColor[index],
            data: item,
          }));
        },
      };
      enums[this.limit === 1].call(this);
      option && this.myChart.setOption(option);

      JSON.stringify(this.selected) !== '{}' &&
        this.myChart.off('legendselectchanged'); //解决重复触发
      JSON.stringify(this.selected) !== '{}' &&
        this.myChart.on('legendselectchanged', (e) => {
          const list = [];
          Object.keys(e.selected).forEach((item) => {
            e.selected[item] && list.push(item);
          });
          list.length > 4 &&
            this.myChart.dispatchAction({
              type: 'legendUnSelect',
              name: e.name,
            });
          list.length > 4 && (option.legend.selected[e.name] = false);
          list.length > 4 &&
            this.$message.warning('最多只能展示4项数据，请先隐藏1项数据');

          const colorList =
            list.length <= 4 &&
            this.lineColor?.filter(
              (e) =>
                !option.series
                  .filter(
                    (item) => list.includes(item.name) && item.itemStyle.color
                  )
                  ?.map((dev) => dev.itemStyle.color)
                  .includes(e)
            );
          list.length <= 4 &&
            (option.legend.selected[e.name] = !option.legend.selected[e.name]);
          list.length <= 4 &&
            option.series.forEach((item) => {
              !list.includes(item.name) && (item.itemStyle.color = undefined);
              item.name === e.name && (item.itemStyle.color = colorList[0]);
            });
          list.length <= 4 && option && this.myChart.setOption(option);
        });
    },
    resize() {
      this.myChart.resize();
    },
  },
};
</script>
<style lang="less" scoped>
#line-chart {
  width: 100%;
  height: 100%;
}
</style>
