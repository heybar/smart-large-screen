<!-- 发电量 -->
<template>
  <div>
    <div class="t_title">电量指标</div>
    <div class="btn_title">
      <el-row>
        <el-col :span="4">
          <div class="btn">发电量</div>
        </el-col>
        <el-col :span="6">
          <div class="btn">计划发电量</div>
        </el-col>
      </el-row>
    </div>
    <div class="table_content">
      <el-row>
        <el-col :span="7">
          <div class="grid_content">日发电量（MWh）</div>
        </el-col>
        <el-col :span="17">
          <div class="grid_content">300</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <div class="grid_content">月发电量（MWh）</div>
        </el-col>
        <el-col :span="17">
          <div class="grid_content">10000</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <div class="grid_content">年发电量（MWh）</div>
        </el-col>
        <el-col :span="17">
          <div class="grid_content">100000</div>
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
.t_title {
  font-size: 25px;
  height: 50px;
  margin-left: 40px;
  margin-top: 10px;
}
.btn_title{
  margin-left: 45px;
  margin-top: 10px;
  .btn{
    font-size: 25px;
  }
}
.table_content {
  margin-left: 45px;
  margin-top: 10px;
  font-size: 18px;
  .grid_content {
    font-size: 18px;
    height: 46px;
    border-bottom: 1px solid #ffffff30; 
    text-align: left;
    line-height: 46px;
  }
}
</style>