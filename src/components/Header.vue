<template>
  <div class="header">
    <div class="title">能源基地调控系统</div>
    <div class="menu">


      <div class="router-button">首页</div>
      <div class="router-button">能量检测</div>
      <div class="router-button">能量管理</div>
      <div class="router-button">源荷预测</div>
      <div class="router-button">优化调度</div>
      <div class="router-button">统计分析</div>
      <div class="router-button">后台管理</div>
    </div>
    <div class="clock">
      2024年8月10日 10:15:30
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>


<style lang="less">
.header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  user-select: none;
  display: flex;

  .title {
    display: inline-block;
    width: 400px;
    font-size: 35px;
    text-shadow: 8px 8px 8px green;
    padding: 0 30px;
  }

  .menu {
    display: inline-block;
    width: 1050px;

    .router-button {
      font-size: 25px;
      display: inline-block;
      width: 150px;
      text-shadow: 2px 2px 2px green;
    }
  }

  .clock {
    display: inline-block;
    width: 400px;
    font-size: 25px;
    padding: 0 30px;
  }
}
</style>