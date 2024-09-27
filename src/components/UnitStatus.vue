<!-- 机组状态 -->
<template>
  <div>
    <div class="chart-title">机组状态</div>
    <div class="table-content">
      <el-row>
        <el-col :span="3">
          <div><i class="iconfont icon-fengjilv"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">正常运行</div>
          <div class="grid-content1">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">通讯中断</div>
          <div class="grid-content1">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">故障停机</div>
          <div class="grid-content1">23</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content1"><i class="iconfont icon-guangfufadian"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">正常运行</div>
          <div class="grid-content1">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">通讯中断</div>
          <div class="grid-content1">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">故障停机</div>
          <div class="grid-content1">23</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content1"><i class="iconfont icon-xudianchizhengchang"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">并网运行</div>
          <div class="grid-content1">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">待机</div>
          <div class="grid-content1">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">故障停机</div>
          <div class="grid-content1">23</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content1"><i class="iconfont icon-zhongwuranjuece"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">并网运行</div>
          <div class="grid-content1">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">检修</div>
          <div class="grid-content1">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">故障停机</div>
          <div class="grid-content1">23</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import '../assets/font/iconfont.css'
export default {
}
</script>
<style lang="less" scoped>
.chart-title {
  font-size: 25px;
  height: 50px;
  margin-left: 40px;
  margin-top: 10px;
}

.table-content {
  padding-left: 10px;
  margin-left: 20px;
  margin-top: 10px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.grid-content1 {
  font-size: 16px;
}
</style>