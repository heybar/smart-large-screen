<!-- 资产统计 -->
<template>
  <div>
    <div class="chart-title left-title">资产统计</div>
    <div class="table-content">
      <el-row>
        <el-col :span="2">
          <div class="grid-content bottom-bd">风电</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content  bottom-bd">装机容量(MWh)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content  bottom-bd">{{ propertyRespVO.windCapacity }}</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content  bottom-bd">风机数量(台)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content  bottom-bd">{{ propertyRespVO.windNum }}</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="2">
          <div class="grid-content">光电</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bottom-bd">装机容量(MWh)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bottom-bd">{{ propertyRespVO.lightCapacity }}</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bottom-bd">逆变器数量(台)</div>
        </el-col>
        <el-col :span="4">
          <!-- <div class="grid-content bottom-bd">{{ propertyRespVO.lightNum }}</div> -->
          <div class="grid-content bottom-bd">--</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="2">
          <div class="grid-content bottom-bd">火电</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bottom-bd">装机容量(MWh)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bottom-bd">{{ propertyRespVO.fireCapacity }}</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bottom-bd">机组数量(台)</div>
        </el-col>
        <el-col :span="4">
          <!-- <div class="grid-content bottom-bd">{{ propertyRespVO.fireNum }}</div> -->
          <div class="grid-content bottom-bd">4</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="2">
          <div class="grid-content bottom-bd">储能</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bottom-bd">储能容量(MWh)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bottom-bd">{{ propertyRespVO.storedCapacity }}</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bottom-bd">集装箱数量(个)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bottom-bd">{{ propertyRespVO.storedNum }}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propertyRespVO: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less">
.chart-title {
  font-size: 25px;
  height: 50px;
  margin-left: 0px;
  margin-top: 10px;
}

.table-content {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;

  .grid-content {
    font-size: 18px;
    height: 46px;
    text-align: center;
    line-height: 46px;
  }

}
</style>