<!-- 社会效益 -->
<template>
  <div>
    <div class="title">社会效益</div>
    <div class="chart-container">
      <el-row >
          <el-col :span="2"><div class="aaa"><i class="iconfont icon-zhongwuranjuece"></i></div></el-col>
          <el-col :span="15"><div class="aaa">火电碳排放量(吨):</div></el-col>
      </el-row>
        
      <el-row >
          <el-col :span="2"><div class="aaa"><i class="iconfont icon-map_btn_hzmarker_normal"></i></div></el-col>
          <el-col :span="15"><div class="aaa">绿色能源减碳排放量(吨):</div></el-col>
      </el-row>
      <el-row >
          <el-col :span="2"><div class="aaa"><i class="iconfont icon-lvsenengyuan"></i></div></el-col>
          <el-col :span="15"><div class="aaa">节约标准煤(吨):</div></el-col>
      </el-row>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.title {
  border: 1px solid skyblue;
  height: 50px;
  margin-left: 40px;
  margin-top: 10px;
  font-size: 25px;
}

.chart-container {
  border: 1px solid pink;
  height: 170px;
  margin-left: 40px;
  margin-top: 10px;
  .aaa {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 46px;
  }
}
</style>