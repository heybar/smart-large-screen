<!-- 资源概况 -->
<template>
  <div>
    <div class="t_title">储能电池</div>
    <div class="table_content">
      <el-row >
          <el-col :span="6">
            <div class="left_content">
              <i class="iconfont icon-dianchi"></i>
            </div>
          </el-col>
          <el-col :span="17"><div class="right_content">今日充电量：</div></el-col>
          <el-col :span="17"><div class="right_content">今日放电量：</div></el-col>
          <el-col :span="17"><div class="right_content">储能总运行功率（MW）：</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.left_content{
  margin-top: 1px;
  margin-left: 10px;
}
.right_content{
  margin-left: 40px;
  margin-top: 10px;
}
</style>