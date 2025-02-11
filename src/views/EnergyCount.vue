<template>
  <div class="energy-count">
    <div class="energy-count-title">
      <div
        v-for="(item, index) in titleMapList"
        :key="item.key"
        class="title-item"
        :class="{ active: currIndex === index }"
        @click="changeTitle(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="moudle">
      <div class="moudle-left">
        <div class="left-container">
          <ComprehensiveIndicators></ComprehensiveIndicators>
        </div>
        <div class="left-container">
          <AlwaysPower></AlwaysPower>
        </div>
        <div class="left-container">
          <StateStatistics></StateStatistics>
        </div>
      </div>
      <div class="moudle-center">
        <div class="center-top-container">
          <EnergyCenter></EnergyCenter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComprehensiveIndicators from '../components/energyCount/ComprehensiveIndicators.vue';
import StateStatistics from '../components/energyCount/StateStatistics.vue';
import AlwaysPower from '../components/energyCount/AlwaysPower.vue';
import EnergyCenter from '../components/energyCount/EnergyCenter.vue';
import RoseTable from '../components/energyCount/RoseTable.vue';
import WindSpeed from '../components/energyCount/WindSpeed.vue';
import TotalPower from '../components/energyCount/TotalPower.vue';
export default {
  components: {
    ComprehensiveIndicators,
    StateStatistics,
    AlwaysPower,
    EnergyCenter,
    RoseTable,
    WindSpeed,
    TotalPower,
  },

  data() {
    return {
      currIndex: 0,

      titleMapList: [
        { title: '风电场', key: 0 },
        { title: '光伏电站', key: 1 },
        { title: '火电厂', key: 2 },
        { title: '储能电站', key: 3 },
      ],
    };
  },

  created() {},

  methods: {
    changeTitle(index) {
      this.currIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
.energy-count {
  width: 1920px;
  height: 1000px;
  overflow: hidden;
  .energy-count-title {
    width: 1000px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0;

    .title-item {
      font-size: 28px;
      color: white;
      cursor: pointer;
      transition: color 0.2s;
      &:hover {
        color: #409eff;
      }

      &.active {
        color: #409eff;
      }
    }
  }

  .moudle {
    display: flex;
    margin-top: 12px;
    height: calc(100% - 60px);
    .moudle-left {
      width: 470px;
      height: 100%;
      padding-right: 60px;
      flex-shrink: 0;
      .left-container {
        width: 100%;
        height: 33.1%;
        overflow: hidden;
      }
    }
    .moudle-center {
      flex: 1;
      width: calc(100% - 470px);
      .center-top-container {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
