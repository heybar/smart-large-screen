<!-- 发电量 -->
<template>
  <div>
    <div class="chart-title left-title">电量指标</div>
    <div class="table_cotent">
      <div class="btn_title">
        <el-row>
          <el-col :span="6">
            <div :class="{ 'btn': true, 'skew-button': true, 'w-100': true, 'skew-selected': !this.isPlan }"
              @click="changeData(false)">
              <div>发电量</div>
            </div>
          </el-col>

          <el-col :span="8">
            <div :class="{ 'btn': true, 'skew-button': true, 'w-150': true, 'skew-selected': this.isPlan }"
              @click="changeData(true)">
              <div>计划发电量</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="table_content">
        <el-row class="table-row">
          <el-col :span="16">
            <div class="grid_content">{{ (this.isPlan ? '计划' : '') + '日发电量（MWh）' }}</div>
          </el-col>
          <el-col :span="8">
            <div class="grid_content">{{ GeneCapadata.dayGeneCapa }}</div>
          </el-col>
        </el-row>
        <el-row class="table-row">
          <el-col :span="16">
            <div class="grid_content">{{ (this.isPlan ? '计划' : '') + '月发电量（MWh）' }}</div>
          </el-col>
          <el-col :span="8">
            <div class="grid_content">{{ GeneCapadata.monthGeneCapa }}</div>
          </el-col>
        </el-row>
        <el-row class="table-row">
          <el-col :span="16">
            <div class="grid_content">{{ (this.isPlan ? '计划' : '') + '年发电量（MWh）' }}</div>
          </el-col>
          <el-col :span="8">
            <div class="grid_content">{{ GeneCapadata.yearGeneCapa }}</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// 引接口
import { getGeneCapacity,getPlanGeneCapacity } from '@/api/home';
export default {
  data() {
    return {
      isPlan: false,
      GeneCapadata: {
        dayGeneCapa: '',
        monthGeneCapa: '',
        yearGeneCapa: ''
      }
    }
  },
  methods: {
    changeData(isPlan) {
      if (isPlan) {
        // 计划发电量
        getPlanGeneCapacity().then(res => {
          this.GeneCapadata.dayGeneCapa = res.data.planDayGeneCapa; 
          this.GeneCapadata.monthGeneCapa = res.data.planMonthGeneCapa;
          this.GeneCapadata.yearGeneCapa = res.data.planYearGeneCapa;
        });
      } else {
        // 发电量
        getGeneCapacity().then(res => {
          this.GeneCapadata.dayGeneCapa = res.data.dayGeneCapa;
          this.GeneCapadata.monthGeneCapa = res.data.monthGeneCapa;
          this.GeneCapadata.yearGeneCapa = res.data.yearGeneCapa;
        });
      }
      this.isPlan = isPlan
    }
  },
  created() {
     // 发电量
     getGeneCapacity().then(res => {
          this.GeneCapadata.dayGeneCapa = res.data.dayGeneCapa;
          this.GeneCapadata.monthGeneCapa = res.data.monthGeneCapa;
          this.GeneCapadata.yearGeneCapa = res.data.yearGeneCapa;
        });
  }
}
</script>
<style lang="less">
.chart-title {
  font-size: 25px;
  height: 50px;
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
  margin-top: 20px;
  height: 165px;
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