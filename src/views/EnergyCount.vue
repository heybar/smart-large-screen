<template>
  <div class="energy-count">
    <div class="energy-count-title">
      <h1 class="title-button">风电场监测</h1>
      <h1 class="title-button">光伏电站监测</h1>
      <h1 class="title-button">火电厂监测</h1>
      <h1 class="title-button">储能电站监测</h1>
    </div>
    <div class="moudle">
      <div class="moudle-left">
        <div class="left-container">
          综合指标
        </div>
        <div class="left-container">
          状态统计
        </div>
        <div class="left-container">
          空
        </div>
      </div>
      <div class="moudle-center">
        <div class="center-top-container">
          <div>平均环境温度23</div>
        </div>
      </div>
      <div class="moudle-right">
        <div class="right-container">
          风玫瑰图
        </div>
        <div class="right-container">
          风速监测
        </div>
        <div class="right-container">
          总功率监测
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less">
.energy-count {
  width: 1920px;
  height: 1000px;
  .energy-count-title {
    width: 1000px;
    margin-left: 450px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    h1 {
      font-size: 20px;
      font-weight: bold;
      color: white;
      cursor: pointer;
      &:hover {
        color: blue;
      }
    }
  }

  .moudle {
    display: flex;
    justify-content: space-between;
    .moudle-left {
      width: 570px;
      height: 900px;
      border: 1px solid red;
      margin-top: 25px;
      .left-container {
        width: 100%;
        height: 300px;
        border: 1px solid black;
      }
    }
    .moudle-center {
      width: 700px;
      height: 900px;
      display: flex;
      border: 1px solid green;
      margin-top: 25px;
    }
    .moudle-right {
      width: 570px;
      height: 900px;
      border: 1px solid blue;
      margin-top: 25px;
      .right-container {
        width: 100%;
        height: 300px;
        border: 1px solid black;
      }
    }
  }
}
</style>
