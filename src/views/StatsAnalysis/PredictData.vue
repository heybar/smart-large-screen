<template>
    <div class="predict-data">
        <div class="controls">
            <div class="switch">
                <el-form :inline="true" model="formInline" >
                    <el-form-item label="切换显示方式" class="switch" >
                        <el-switch
                        v-model="displayStatus"
                        active-color="green"
                        inactive-color="white">
                        </el-switch>
                    </el-form-item>
                    <el-form-item  class="search" >
                        <input type="text" placeholder="数据查找..." id="search-input">
                    </el-form-item>
                    <el-form-item label="起始时间" class="date-picker1">
                        <input type="date" id="start-date">
                    </el-form-item>
                    <el-form-item label="终止时间" class="date-picker2">
                        <input type="date" id="end-date">
                    </el-form-item>
                </el-form>
            </div>
           
            
        </div>
        <div class="predict-chart-container">
            <div v-if="displayStatus" class="data-table">
                <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                >
                <el-table-column type="selection" width="100"> </el-table-column>
                <el-table-column label="序号" type="index" width="150">
                </el-table-column>
                <el-table-column label="测点名" width="250" prop="pointName">
                </el-table-column>
                <el-table-column prop="pointNo" label="测点号" width="250">
                </el-table-column>
                <el-table-column prop="pointDesc" label="测点描述" width="400">
                </el-table-column>
                <el-table-column prop="siteType" label="场站类型" width="250">
                </el-table-column>
                <el-table-column prop="pointCode" label="测点编码" width="250">
                </el-table-column>
                <el-table-column prop="notes" label="备注" width="250">
                </el-table-column>
                </el-table>
            </div>
            <!-- 这里可以放置曲线图 -->
            <EchatrsComp v-show="!displayStatus" :config="getChartData" />
            <div class="data-pagination">
                <el-pagination background layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script >
import EchatrsComp from "../../components/EchatrsComp.vue";
export default {
    name: "PredictData",
    data() {
        return {
            value: true,
            displayStatus: true,
            predictData: [],
            tableData: [
            {
                pointName: "测点1",
                pointNo: "1001",
                pointDesc: "测点1描述",
                siteType: "场站类型1",
                pointCode: "1001001",
                notes: "备注1",
            },
            {
                pointName: "测点2",
                pointNo: "1002",
                pointDesc: "测点2描述",
                siteType: "场站类型2",
                pointCode: "1002001",
                notes: "备注2",
            },
            {
                pointName: "测点3",
                pointNo: "1003",
                pointDesc: "测点3描述",
                siteType: "场站类型3",
                pointCode: "1003001",
                notes: "备注3",
            },
            {
                pointName: "测点4",
                pointNo: "1004",
                pointDesc: "测点4描述",
                siteType: "场站类型4",
                pointCode: "1004001",
                notes: "备注4",
            },
            {
                pointName: "测点5",
                pointNo: "1005",
                pointDesc: "测点5描述",
                siteType: "场站类型5",
                pointCode: "1005001",
                notes: "备注5",
            },
            {
                pointName: "测点6",
                pointNo: "1006",
                pointDesc: "测点6描述",
                siteType: "场站类型6",
                pointCode: "1006001",
                notes: "备注6",
            },
            
            ],
            charsData: [820, 932, 901, 934, 1290, 1330, 1320],
        }
    },
    created(){
        this.predictData = this.$VueRouter.params.data || [];
    },
    components: { EchatrsComp },
    computed: {
        getChartData: function () {
        const config = ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG"];
        let option = {
            xAxis: {
            type: "category",
            data: config,
            },
            yAxis: {
            type: "value",
            },
            series: [
            {
                data: this.charsData,
                type: "line",
                smooth: true,
            },
            ],
        };
        return option;
        },
    },
    methods: {},
}
</script>

<style>
    .predict-data {
        .controls {
            display: flex;
            justify-content: space-between;
            background-color: aliceblue;
            margin-top: 30px;
            margin-left: 0px;
        }
        .switch {
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-top: 10px;
            
        }
        .search {
            flex-grow: 1;
            margin-left: 100px;
            margin-top: 10px;
        }
        .date-picker1 {
            display: flex;
            align-items: center;
            margin-left: 100px;
            margin-top: 10px;
        }
        .date-picker2{
            display: flex;
            align-items: center;
            margin-left: 100px;
            margin-top: 10px;
        }
    }
    .predict-chart-container {
        margin-top: 0px;
        background-color: #fff;
        height: 830px;
        .data-table {
            height: 600px;
            width: 100%;
        }
        .el-table {
            border: 1px solid #EBEEF5;
            border-radius: 4px;
            background-color: #fff;
            width: 100%;
        }
        .data-pagination {
            height: 100px;
            text-align: center;
        }
    }
    
</style>