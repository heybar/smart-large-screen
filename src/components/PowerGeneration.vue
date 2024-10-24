<!-- 发电量 -->
<template>
  <div>
    <div class="chart-title left-title">电量指标</div>
    <div class="btn_title">
      <el-row>
        <el-col :span="6">
          <div class="btn skew-button w-100  skew-selected">
            <div>发电量</div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="btn skew-button w-150">
            <div>计划发电量</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="table_content">
      <el-row class="table-row">
        <el-col :span="16">
          <div class="grid_content">日发电量（MWh）</div>
        </el-col>
        <el-col :span="8">
          <div class="grid_content">300</div>
        </el-col>
      </el-row>
      <el-row class="table-row">
        <el-col :span="16">
          <div class="grid_content">月发电量（MWh）</div>
        </el-col>
        <el-col :span="8">
          <div class="grid_content">10000</div>
        </el-col>
      </el-row>
      <el-row class="table-row">
        <el-col :span="16">
          <div class="grid_content">年发电量（MWh）</div>
        </el-col>
        <el-col :span="8">
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
.chart-title {
  font-size: 25px;
  height: 40px;
  margin-left: 0px;
  margin-top: 10px;
}

.btn_title {
  margin-left: 45px;
  margin-top: 10px;

  .btn {
    font-size: 25px;
  }

  .w-100 {
    width: 100px;
  }

  .w-150 {
    width: 150px;
  }
}

.table_content {
  margin-left: 45px;
  margin-top: 10px;
  height: 145px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;





  .table-row {
    height: 40px;
    padding-left: 20px;

    transform: skewX(-30deg);

    &:nth-child(1) {
      background: linear-gradient(93deg, rgba(31, 166, 250, 0.5) 2%, rgba(31, 166, 250, 0) 85%);
      border-left: 4px solid #93D5FF;
    }

    &:nth-child(2) {
      background: linear-gradient(93deg, rgba(50, 244, 253, 0.5) 2%, rgba(50, 244, 253, 0) 85%);
      border-left: 4px solid #32F4FD;
    }

    &:nth-child(3) {
      background: linear-gradient(93deg, rgba(253, 169, 52, 0.5) 2%, rgba(253, 169, 52, 0) 85%);
      border-left: 4px solid #FDA934;
    }
  }


  .grid_content {
    font-size: 18px;
    height: 40px;
    text-align: left;
    line-height: 40px;
    opacity: 1;
    transform: skewX(30deg);
  }


}
</style>