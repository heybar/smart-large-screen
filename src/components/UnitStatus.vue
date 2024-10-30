<!-- 机组状态 -->
<template>
  <div>
    <div class="chart-title left-title">机组状态</div>
    <div class="table-content">
      <el-row>
        <el-col :span="3">
          <div><i class="iconfont icon-fengjilv"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">正常运行</div>
          <div class="grid-content1">{{ unitStatusRespVO.windRunSts }}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">通讯中断</div>
          <div class="grid-content1">{{ unitStatusRespVO.windInterruptSts }}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">故障停机</div>
          <div class="grid-content1">{{ unitStatusRespVO.windStopSts }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content1"><i class="iconfont icon-guangfufadian"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">正常运行</div>
          <div class="grid-content1">{{ unitStatusRespVO.lightRunSts }}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">通讯中断</div>
          <div class="grid-content1">{{ unitStatusRespVO.lightInterruptSts }}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">故障停机</div>
          <div class="grid-content1">{{ unitStatusRespVO.lightStopSts }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content1"><i class="iconfont icon-xudianchizhengchang"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">并网运行</div>
          <div class="grid-content1">{{ unitStatusRespVO.storedRunSts }}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">待机</div>
          <div class="grid-content1">{{ unitStatusRespVO.storedInterruptSts }}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">故障停机</div>
          <div class="grid-content1">{{ unitStatusRespVO.storedStopSts }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content1"><i class="iconfont icon-zhongwuranjuece"></i></div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">并网运行</div>
          <div class="grid-content1">{{ unitStatusRespVO.fireRunSts }}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">检修</div>
          <div class="grid-content1">{{ unitStatusRespVO.fireInterruptSts }}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content1">故障停机</div>
          <div class="grid-content1">{{ unitStatusRespVO.fireStopSts }}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import '../assets/font/iconfont.css'
export default {
  name: 'UnitStatus',
  props: {
    unitStatusRespVO: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
.chart-title {
  font-size: 25px;
  height: 50px;
  margin-left: 0px;
  margin-top: 10px;
}

.table-content {
  padding-left: 10px;
  margin-left: 20px;
  margin-top: 30px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.grid-content1 {
  font-size: 16px;
}
</style>