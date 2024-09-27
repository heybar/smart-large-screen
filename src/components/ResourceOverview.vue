<!-- 储能电池 -->
<template>
  <div>
    <div class="chart-title right-title">储能电池</div>
    <div class="table-content">
      <div class="left">
        <i class="iconfont icon-dianchi"></i>
      </div>
      <div class="right">
        <div>今日充电量：</div>
        <div>今日放电量：</div>
        <div>储能总运行功率（MW）：</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  height: 190px;
  display: flex;
  padding-left: 30px;
  align-items: center;

  .right {
    padding-left: 20px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      font-size: 22px;
    }
  }
}
</style>