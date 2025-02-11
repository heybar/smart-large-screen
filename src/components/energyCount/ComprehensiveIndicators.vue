<template>
  <div class="comprehensive-indicators">
    <div class="indicator-title">
      <div class="chart-title left-title">综合指标</div>
    </div>
    <div class="indicator-list">
      <div
        class="indicator-item"
        v-for="(item, index) in dataList"
        :key="index"
      >
        <div class="indicator-label">{{ item.label }}</div>
        <div class="indicator-value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        { label: '装机台数(台)', value: 133 },
        { label: '装机容量(MW)', value: 133 },
        { label: '日发电量(KW)', value: 100 },
        { label: '月发电量(KW)', value: 3000 },
        { label: '年发电量(40000)', value: 40000 },
        { label: '总有功功率(MW)', value: 133 },
        { label: '年等效利用小时数', value: 20000 },
        { label: '年时间可利用率(%)', value: 80 },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.indicator-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 25px 0 0 5px;
  .indicator-item {
    width: 48%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(25, 198, 255, 0.1);
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #29f1fa;
    position: relative;
  }
}

.indicator-label {
  font-size: 15px;
  color: #ffffff;
}

.indicator-value {
  color: #f9e20a;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
}
</style>
