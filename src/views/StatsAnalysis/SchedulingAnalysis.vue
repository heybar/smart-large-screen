<template>
  <div class="Scheduling-analysis-container">
    <div class="option-container">
      <div class="date-picker-container">
        <div class="date-picker" >
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="时间" class="date-picker1">
                <input type="date" id="start-date">
            </el-form-item>
            <el-form-item label="终止时间" class="date-picker2">
                <input type="date" id="end-date">
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="Scheduing-chart-container">
      <div class ="data-table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="" width="180">
          </el-table-column>
          <el-table-column v-for="(time, index) in times" :key="index" :prop="time" :label="time" width="80">
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
  data() {
    return {
      times: ['1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h','18h', '19h', '20h', '21h', '22h', '23h', '24h'], // 时间列
      tableData: [
        { name: '内蒙古巴彦淖尔机电1#', '1h': 'rouge', '2h': 'vert', '3h': 'blue', '4h': 'blue', '5h': 'rouge', '6h': 'vert', '7h': 'blue', '8h': 'rouge', '9h': 'vert' ,'10h':'10','11h':'11','12h':'12','13h':'13','14h':'14','15h':'15','16h':'16','17h':'17','18h':'18','19h':'19','20h':'20','21h':'21','22h':'22','23h':'23','24h':'24'},
        { name: '内蒙古巴彦淖尔机电2#', '1h': 'blue', '2h': 'rot', '3h': 'grün', '4h': 'blau', '5h': 'rot', '6h': 'grün', '7h': 'blau', '8h': 'rot', '9h': 'grün','10h':'10','11h':'11','12h':'12','13h':'13','14h':'14','15h':'15','16h':'16','17h':'17','18h':'18','19h':'19','20h':'20','21h':'21','22h':'22','23h':'23','24h':'24' },
        { name: '内蒙古巴彦淖尔机电4#', '1h': 'rot', '2h': 'grün', '3h': 'blau', '4h': 'rot', '5h': 'grün', '6h': 'blau', '7h': 'rot', '8h': 'grün', '9h': 'blau','10h':'10', '11h':'11', '12h':'12', '13h':'13', '14h':'14', '15h':'15', '16h':'16', '17h':'17', '18h':'18', '19h':'19', '20h':'20', '21h':'21', '22h':'22', '23h':'23', '24h':'24' },
        // 在此添加更多数据行...
      ]
    }
  }
}
</script>

<style>
.Scheduling-analysis-container {
  margin-top: 25px;
  .option-container {
    background-color: aliceblue;
    .date-picker {
      margin-top: 30px;
      margin-left: 50px;
      text-align: center;
      display: flex;
    }
  }
  
}
.Scheduing-chart-container {
    
    background-color: #fff;
    height: 900px;
    .data-table {
        
        
    }
    
    .data-pagination {
        margin-top: 500px;
        height: 100px;
        text-align: center;
    }
  }
</style>