<template>
  <div class="point-data">
    <div class="option-container">
      <div class="selected-option">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="场站类型">
            <el-select v-model="formInline.siteName" placeholder="场站类型"></el-select>
          </el-form-item>
          <el-form-item label="设备选择">
          <el-select v-model="formInline.dev" placeholder="设备选择"></el-select>
          </el-form-item>
          <el-form-item label="数据类型">
            <el-select  v-model="formInline.dataType" placeholder="数据类型"></el-select>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="right-option">
        <div class="data-compare">
          <el-button class="data-compare-button" @click="compareData">
            <div class="data-compare-picture"> <img src="../../assets/pictures/data-compare.svg" alt=""></div>
            <div class="data-compare-text">数据对比</div>
          </el-button>
        </div>
        <div class="data-display">
          <el-button class="data-display-button" @click="displayData" >
            <div class="data-display-picture"><img src="../../assets/pictures/data-display.svg" alt=""></div>
            <div class="data-display-text">数据显示</div>
          </el-button>
        </div>
        <div class="data-export">
          <el-button class="data-export-button">
            <div class="data-export-picture"><img src="../../assets/pictures/data-export.svg" alt=""></div>
            <div class="data-export-text">数据导出</div>
          </el-button>
        </div>
      </div>
    </div>
    <div class="point-chart-container">
      <div class="data-table">
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="100">
          </el-table-column>
          <el-table-column
            label="序号"
            type="index"
            width="150">
          </el-table-column>
          <el-table-column
            label="测点名"
            width="250"
            prop="pointName">
          </el-table-column>
          <el-table-column
            prop="pointNo"
            label="测点号"
            width="250">
          </el-table-column>
          <el-table-column
            prop="pointDesc"
            label="测点描述"
            width="400">
          </el-table-column>
          <el-table-column
            prop="siteType"
            label="场站类型"
            width="250">
          </el-table-column>
          <el-table-column
            prop="pointCode"
            label="测点编码"
            width="250">
          </el-table-column>
          <el-table-column
            prop="notes"
            label="备注"
            width="250">
          </el-table-column>
          
        </el-table>
        
      </div>
      <div class="data-pagination">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000" >
          </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PointData',
  data() {
    return {
      formInline: {
        siteName: '',
        dev: '',
        dataType: '',
      },
      tableData: [
        {
          pointName: '测点1',
          pointNo: '1',
          pointDesc: '测点1描述',
          siteType: '场站类型1',
          pointCode: '测点编码1',
          notes: '备注1',
        },
        {
          pointName: '测点2',
          pointNo: '2',
          pointDesc: '测点2描述',
          siteType: '场站类型2',
          pointCode: '测点编码2',
          notes: '备注2',
        },
        {
          pointName: '测点3',
          pointNo: '3',
          pointDesc: '测点3描述',
          siteType: '场站类型3',
          pointCode: '测点编码3',
          notes: '备注3',
        },
        {
          pointName: '测点4',
          pointNo: '4',
          pointDesc: '测点4描述',
          siteType: '场站类型4',
          pointCode: '测点编码4',
          notes: '备注4',
        },
        {
          pointName: '测点5',
          pointNo: '5',
          pointDesc: '测点5描述',
          siteType: '场站类型5',
          pointCode: '测点编码5',
          notes: '备注5',
        },
      ],
      selectedRows: [],
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formInline);
    },
    handleSelectionChange(selection) {
      this.selectedRows = selection;
      console.log(this.selectedRows);
    },
    //数据显示
    displayData() {
      if (this.selectedRows.length > 0) {
        console.log('选中的数据'+this.selectedRows);
        // 这里可以根据选中的行数据进行进一步的数据展示逻辑
        // 例如，调用一个API来获取关联数据，或者在当前页面弹出一个对话框来显示数据
        this.$router.push({name: 'PredictData',params: { data: this.selectedRows}})
      } else {
        console.log('没有选中数据');
        // 提示用户选择数据
      }
    },
    //数据对比
    compareData() {
      console.log('数据对比');
      if(this.selectedRows.length >= 2){
        this.$router.push({name: 'SchedulingAnalysis',params: { data: this.selectedRows}})
      } else {
        console.log('请选择两个或两个以上的测点进行数据对比');
        // 提示用户选择数据
      }
      // 这里可以根据选中的行数据进行数据对比逻辑
      // 例如，调用一个API来获取关联数据，或者在当前页面弹出一个对话框来显示数据
    }
  },
};
</script>

<style lang="less">
.point-data {
  margin-top: 25px;
  .option-container {
    display: flex;
    background-color: aliceblue;
    .selected-option {
      margin-top: 30px;
      margin-left: 20px;
      display: flex;
      padding: 0px;
    }
    .right-option {
      margin-top: 20px;
      margin-left: 600px;
      padding: 0px;
      display: flex;
      justify-content: space-between;
      color: black;
      .data-compare {
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        
      }
      .data-display {
        
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
      }
      .data-export {
        
        padding: 7px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
  .point-chart-container {
    background-color: #fff;
    margin-top: 0px;
    height: 810px;
    .data-table {
      width: 100%;
      height: 600px;
      
      
      .el-table {
        border: 1px solid #EBEEF5;
        border-radius: 4px;
        background-color: #fff;
        width: 100%;
      }
    }
    .data-pagination {
      height: 100px;
      
      text-align: center;
    }
  }
}
</style>
