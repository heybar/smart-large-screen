<!--底部无标题-->
<template>
    <div class="head-container">
        <el-row>
            <el-col :span="2">
                <div class="icon-content"><i class="iconfont icon-shandian"></i></div>
            </el-col>
            <el-col :span="6">
                <div class="text-content">当日：</div>
                <div class="text-content">昨日：</div>
            </el-col>
            <el-col :span="2">
                <div class="icon-content"><i class="iconfont icon-a-iconshuididituxianshi"></i></div>
            </el-col>
            <el-col :span="6">
                <div class="text-content">当日：</div>
                <div class="text-content">昨日：</div>
            </el-col>
            <el-col :span="2">
                <div class="icon-content"><i class="iconfont icon-api_mining_hover"></i></div>
            </el-col>
            <el-col :span="6">
                <div class="text-content">当日：</div>
                <div class="text-content">昨日：</div>
            </el-col>
        </el-row>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
.head-container {
    margin-left: 40px;
    margin-top: 20px;
}

.icon-content {
    margin-top: 7px;
}

.text-content {
    font-size: 18px;
    margin-bottom: 3px;
    margin-left: 2px;
}
</style>