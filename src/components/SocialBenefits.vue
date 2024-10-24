<!-- 社会效益 -->
<template>
  <div>
    <div class="chart-title right-title">社会效益</div>
    <div class="chart-container">
      <div class="icon-container">
        <div class="outer-icon"><img class="inner-icon" src="../assets/pictures/water.svg" alt=""></div>
        <div class="right-text">
          <div class="i-title">清洁能源发电</div>
          <div>
            <div class="i-num">1253</div>
            <div class="i-unit">MWh</div>
          </div>
        </div>
      </div>
      <div class="icon-container">
        <div class="outer-icon"><img class="inner-icon" src="../assets/pictures/carbon.svg" alt=""></div>
        <div class="right-text">
          <div class="i-title">减碳排放量</div>
          <div>
            <div class="i-num">9827</div>
            <div class="i-unit">吨</div>
          </div>
        </div>
      </div>
      <div class="icon-container">
        <div class="outer-icon">
          <img class="inner-icon tree" src="../assets/pictures/tree.svg" alt="">
        </div>
        <div class="right-text">
          <div class="i-title">相当于种植树木</div>
          <div>
            <div class="i-num">1726</div>
            <div class="i-unit">根</div>
          </div>
        </div>
      </div>
      <div class="icon-container">
        <div class="outer-icon">
          <img class="inner-icon coal" src="../assets/pictures/coal.svg" alt="">
        </div>
        <div class="right-text">
          <div class="i-title">节约标准煤</div>
          <div>
            <div class="i-num">88</div>
            <div class="i-unit">吨</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Battery from './Battery/Battery.vue'
export default {
  components: {
    Battery
  }
}
</script>

<style lang="less" scoped>
.chart-title {
  font-size: 25px;
  height: 50px;
  margin-left: 40px;
  margin-top: 10px;
}

.chart-container {
  height: 170px;
  margin-left: 40px;
  margin-top: 10px;
  padding-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  .icon-container {
    width: 250px;
    height: 100px;
    display: flex;
    justify-content: space-around;

    .outer-icon {
      width: 72px;
      height: 72px;
      background-image: url(../assets/pictures/border.svg);
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .inner-icon {
        width: 46.45px;
        height: 46.45px;
      }

      .tree {
        width: 33.1px;
        height: 36.94px;
      }

      .coal {
        width: 36px;
        height: 36px;
      }
    }

    .right-text {
      width: 140px;
      height: 75px;
      margin-left: 10px;

      .i-title {
        font-size: 20px;
        font-weight: 100;
      }

      div {
        .i-num {
          display: inline-block;
          font-size: 32px;
        }

        .i-unit {
          font-size: 20px;
          display: inline-block;
          font-weight: 100;
          margin-left: 10px;
        }
      }
    }



  }

}
</style>