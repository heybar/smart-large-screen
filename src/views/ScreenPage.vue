<template>
  <div class="container">
    <!--header-->
    <!-- <div class="header">
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
    </div> -->
    <div class="sub-title">
      风光火储能源基地调控系统
    </div>
    <div class="charts-content">
      <div class="charts-left">
        <div class="table-container">
          <div class="table-title"></div>
          <!-- 发电量 -->
          <PowerGeneration></PowerGeneration>
        </div>
        <div class="table-container">
          <div class="table-title"></div>
          <!-- 机组状态 -->
          <UnitStatus :unitStatusRespVO="unitStatusRespVO"></UnitStatus>
        </div>
        <div class="table-container">
          <div class="table-title"></div>
          <!-- 资产统计 -->
          <AssetsStatistics :propertyRespVO="propertyRespVO"></AssetsStatistics>
        </div>
      </div>
      <div class="charts-center">
        <div class="map">
          <!-- 地图 -->
          <Map :activePowerRespVO="activePowerRespVO"></Map>
        </div>
        <!-- <div class="type-button">
          <ButtonGroup></ButtonGroup>
        </div> -->
        <div class="line-chart">
          <LineChart></LineChart>
        </div>
      </div>
      <div class="charts-right">
        <div class="right-charts-container">
          <!-- 发电统计 -->
          <LoadDetection></LoadDetection>
        </div>
        <div class="right-charts-container">
          <!-- 储能电池 -->
          <EnergyBatteries :storedBatteryRespVO="storedBatteryRespVO"></EnergyBatteries>
        </div>
        <div class="right-charts-container">
          <!-- 社会效益 -->
          <SocialBenefits :socialBenefitRespVO="socialBenefitRespVO"></SocialBenefits>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AssetsStatistics from '../components/AssetsStatistics';
import LoadDetection from '../components/LoadDetection';
import PowerGeneration from '../components/PowerGeneration';
import EnergyBatteries from '../components/EnergyBatteries';
import UnitStatus from '../components/UnitStatus';
import SocialBenefits from '../components/SocialBenefits.vue';
import Map from '../components/Map.vue';
import LineChart from '../components/LineChart';
import ButtonGroup from '../components/ButtonGroup';
import { getHomeData } from '@/api/home'

export default {
  data() {
    return {
      unitStatusRespVO: {}, // 首页机组状态 Response VO
      propertyRespVO: {}, // 资产统计 Response VO
      activePowerRespVO: {}, // 资产统计 Response VO
      storedBatteryRespVO: {}, // 首页储能电池SOC Response VO
      socialBenefitRespVO: {} // 首页-社会效益 响应VO
    }
  },
  components: {
    AssetsStatistics,
    LoadDetection,
    PowerGeneration,
    EnergyBatteries,
    UnitStatus,
    SocialBenefits,
    Map,
    LineChart,
    ButtonGroup
  },
  created() {
    this.initHomeData()
    setInterval(() => {
      this.$bus.$emit('update')
      this.initHomeData()
    }, 600000);//600000
  },
  methods: {
    initHomeData() {
      getHomeData().then(res => {
        this.unitStatusRespVO = res.data.unitStatusRespVO
        this.propertyRespVO = res.data.propertyRespVO
        this.activePowerRespVO = res.data.activePowerRespVO
        this.storedBatteryRespVO = res.data.storedBatteryRespVO
        this.socialBenefitRespVO = res.data.socialBenefitRespVO
      }).catch(error => {
        console.log(error);
      })
    },
  }
}
</script>

<style lang="less">
.container {
  width: 1920px;
  height: 1000px;

  .sub-title {
    /* 自动布局子元素 */
    font-family: HarmonyOS Sans SC;
    font-size: 36px;
    font-weight: normal;
    line-height: 45px;
    text-align: center;
    letter-spacing: 0px;

    font-variation-settings: "opsz" auto;
    background: linear-gradient(180deg, #E6F7FF 0%, rgba(230, 247, 255, 0) 168%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    z-index: 1;
  }

  .charts-content {
    display: flex;
    justify-content: space-around;

    .charts-left {
      width: 570px;
      height: 925px;
      // background-color: skyblue;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .table-container {
        width: 100%;
        height: 280px;
        // background-image: url(../assets/pictures/chart_bg.png);
        // background-size: 100% 100%;
        // background-repeat: no-repeat;
        // border: 1px solid red;
        position: relative;

        &:after {
          position: absolute;
          content: " ";
          // background: url(../assets/pictures/left_title_bg.png);
          // background-size: 100% 100%;
          // background-repeat: no-repeat;
          display: block;
          width: 350px;
          height: 23px;
          right: 15px;
          top: 0;
          clear: both;
        }
      }
    }

    .charts-center {

      width: 700px;
      height: 925px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      // background-color: skyblue;
      .map {
        width: 100%;
        height: 540px;
      }

      // .type-button {
      //   width: 100%;
      //   height: 40px;
      // }

      .line-chart {
        width: 100%;
        height: 360px;
      }
    }

    .charts-right {
      width: 570px;
      height: 925px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // background-color: skyblue;

      .right-charts-container {
        width: 100%;
        height: 280px;
        // border: 1px solid red;
      }

    }
  }
}
</style>