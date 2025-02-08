<template>
  <div id="EchartsComp" style="width: 100vw; height: 50vh"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      chartInstance: null,
    };
  },
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      let chartDom = document.getElementById("EchartsComp");
      if (!chartDom) {
        return;
      }
      this.chartInstance = echarts.init(chartDom);
      this.config &&
        this.chartInstance.setOption(this.config, {
          notMerge: true,
          lazyUpdate: true,
        });
      window.addEventListener("resize", () => {
        this.chartInstance.resize(this.config);
      });
    },
  },
};
</script>
