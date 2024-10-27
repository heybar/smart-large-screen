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
          <div class="grid-content  bottom-bd">100</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content  bottom-bd">风机数量</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content  bottom-bd">100</div>
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
          <div class="grid-content bottom-bd">无</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bottom-bd">逆变器数量</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bottom-bd">无</div>
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
          <div class="grid-content bottom-bd">无</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bottom-bd">发电机组</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bottom-bd">无</div>
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
          <div class="grid-content bottom-bd">无</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bottom-bd">集装箱数量</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bottom-bd">无</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
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