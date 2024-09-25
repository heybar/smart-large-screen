<template>
  <div class="container">
    <!--header-->
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
    <div class="sub-title">
      风光火储能源基地调控系统
    </div>
    <div class="charts-content">
      <div class="charts-left">
        <div class="table-container">
          <div class="table-title"></div>
          <AssetsStatistics></AssetsStatistics>
        </div>
        <div class="table-container">
          <div class="table-title"></div>
          <LoadDetection></LoadDetection>
        </div>
        <div class="table-container">
          <div class="table-title"></div>
          <UnitStatus></UnitStatus>
        </div>
      </div>
      <div class="charts-center">
        <div class="map">

        </div>
      </div>
      <div class="charts-right">
        <div class="">
          <PowerGeneration></PowerGeneration>
        </div>
        <div class="center-chart">
          <ResourceOverview></ResourceOverview>
        </div>
        <div class="bottom-chart">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AssetsStatistics from '../components/AssetsStatistics';
import LoadDetection from '../components/LoadDetection';
import PowerGeneration from '../components/PowerGeneration';
import ResourceOverview from '../components/ResourceOverview';
import UnitStatus from '../components/UnitStatus';

export default {
  components: {
    AssetsStatistics,
    LoadDetection,
    PowerGeneration,
    ResourceOverview,
    UnitStatus,
  }
}
</script>

<style lang="less">
.container {
  width: 1920px;
  height: 1080px;
  color: #eeeeee;


  .header {
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    user-select: none;

    .title {
      display: inline-block;
      width: 400px;
      font-size: 35px;
      text-shadow: 8px 8px 8px green;
      padding: 0 30px;
    }

    .menu {
      display: inline-block;

      .router-button {
        font-size: 25px;
        display: inline-block;
        width: 150px;
      }
    }

    .clock {
      display: inline-block;
      width: 400px;
      font-size: 25px;
      padding: 0 30px;
    }
  }

  .sub-title {
    font-size: 30px;
    line-height: 60px;
    text-align: center;
  }

  .charts-content {
    display: flex;
    justify-content: space-around;

    .charts-left {
      width: 570px;
      height: 925px;
      background-color: skyblue;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .table-container {
        width: 100%;
        height: 280px;
        border: 1px solid red;
      }
    }

    .charts-center {

      width: 700px;
      height: 925px;
      background-color: skyblue;
    }

    .charts-right {
      width: 570px;
      height: 925px;
      background-color: skyblue;
    }
  }
}
</style>