<!-- 社会效益 -->
<template>
  <div>
    <div class="title">社会效益</div>
    <div class="chart-container">
      <div class="aaa">
        <div>火电碳排放量(吨):</div>
        <div>绿色能源减碳排放量(吨):</div>
        <div>节约标准煤(吨):</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.title {
  border: 1px solid skyblue;
  height: 50px;
}

.chart-container {
  border: 1px solid pink;
  height: 170px;

  .aaa {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>