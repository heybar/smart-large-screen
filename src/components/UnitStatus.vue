<!-- 机组状态 -->
<template>
  <div>
    <div class="t_title">机组状态</div>
    <div class="table_content">
      <el-row>
        <el-col :span="3">
          <div><i class="iconfont icon-fengjilv"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">正常运行</div>
          <div class="grid-content">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">通讯中断</div>
          <div class="grid-content">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">故障停机</div>
          <div class="grid-content">23</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content"><i class="iconfont icon-guangfufadian"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">正常运行</div>
          <div class="grid-content">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">通讯中断</div>
          <div class="grid-content">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">故障停机</div>
          <div class="grid-content">23</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content"><i class="iconfont icon-xudianchizhengchang"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">并网运行</div>
          <div class="grid-content">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">待机</div>
          <div class="grid-content">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">故障停机</div>
          <div class="grid-content">23</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content"><i class="iconfont icon-zhongwuranjuece"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">并网运行</div>
          <div class="grid-content">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">检修</div>
          <div class="grid-content">23</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content">故障停机</div>
          <div class="grid-content">23</div>
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
<style lang="less">
.t_title {
  font-size: 25px;
  height: 50px;
  margin-left: 40px;
  margin-top: 10px;
}

.table_content {
  margin-left: 20px;
  margin-top: 10px;

  .grid_content {
    font-size: 10px;
    height: 46px;
    border-bottom: 1px solid #ffffff;
    text-align: center;
    line-height: 46px;
  }
}
</style>