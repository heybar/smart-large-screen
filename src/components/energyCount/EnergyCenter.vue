<template>
  <div class="energy-center-table">
    <div class="header">
      <div class="switch" @click="handelSwitch">
        <i class="el-icon-refresh"></i>
      </div>
      <div class="base-msg">
        <div
          class="base-msg-item"
          v-for="(item, index) in baseMsgList"
          :key="index"
        >
          <div class="label">{{ item.label }}</div>
          <div class="value" :style="{ color: item.valueColor }">
            {{ item.value }}
          </div>
          <div class="unit">{{ item.unit }}</div>
        </div>
      </div>
    </div>

    <div ref="contentRef" class="content">
      <div
        class="card-wrapper"
        :style="{ overflow: switchType === 'table' ? 'hidden' : 'auto' }"
      >
        <div v-show="switchType === 'card'" class="card">
          <div
            class="card-item"
            v-for="(item, index) in tableList"
            :key="index"
          >
            <div class="icon">
              <img
                :src="
                  item.status === '正常'
                    ? require(`@/assets/pictures/wind.svg`)
                    : require(`@/assets/pictures/wind.svg`)
                "
                alt=""
              />

              <span> {{ item.model }}</span>
            </div>

            <div class="desc">
              <div class="desc-item">
                <div class="label">功率:</div>
                <div class="value">{{ item.power }}</div>
              </div>
              <div class="desc-item">
                <div class="label">风速:</div>
                <div class="value">{{ item.windSpeed }}</div>
              </div>
              <div class="desc-item">
                <div class="label">风向:</div>
                <div class="value">{{ item.windDirection }}</div>
              </div>
              <div class="desc-item">
                <div class="label">变桨角度:</div>
                <div class="value">{{ item.pitchAngle }}</div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="switchType === 'table'" class="table">
          <el-table border :data="tableList" :height="tableHeight">
            <el-table-column
              prop="model"
              label="风机型号"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="power"
              label="功率"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="windSpeed"
              label="风速"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="windDirection"
              label="风向"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="pitchAngle"
              label="变桨角度"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="gearboxTemp"
              label="齿轮箱轴温"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="frequency"
              label="频率"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="gridVoltage1"
              label="电网电压1"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="gridVoltage2"
              label="电网电压2"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="gridVoltage3"
              label="电网电压3"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="gridCurrent1"
              label="电网电流1"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="gridCurrent2"
              label="电网电流2"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="gridCurrent3"
              label="电网电流3"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="load"
              label="风机负荷量"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="centralControlStatus"
              label="集控状态"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="totalPower"
              label="总发电量"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="totalGenerationTime"
              label="总发电时间"
              width="180"
            ></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tableData from './EnergyCenterData.json';
export default {
  data() {
    return {
      baseMsgList: [
        { label: '平均环境温度', value: 23, unit: '°C', valueColor: '#1EE7E7' },
        {
          label: '平均空气密度',
          value: 1.24,
          unit: 'kg/m³',
          valueColor: '#1890FF',
        },
        { label: '平均风速', value: 1.24, unit: 'm/s', valueColor: '#1890FF' },
      ],

      tableList: tableData,

      switchType: 'card',
      tableHeight: 0,
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.updateTableHeight();
      window.addEventListener('resize', this.updateTableHeight);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateTableHeight);
  },
  methods: {
    handelSwitch() {
      this.switchType = this.switchType === 'card' ? 'table' : 'card';
      this.$nextTick(() => {
        if (this.switchType === 'table') {
          this.updateTableHeight();
        }
      });
    },

    updateTableHeight() {
      if (this.$refs.contentRef && this.switchType === 'table') {
        this.tableHeight =
          this.$refs.contentRef.getBoundingClientRect().height - 60;
      }
    },
  },
};
</script>
<style scoped lang="less">
.energy-center-table {
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .switch {
      position: absolute;
      left: 0px;
      top: 3px;
      cursor: pointer;
      opacity: 0.8;
      &:hover {
        i {
          color: #409eff;
        }
      }
      i {
        font-size: 30px;
        color: #fff;
      }
    }
    .base-msg {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 60%;
      .base-msg-item {
        display: flex;
        align-items: center;
        margin-right: 20px;
        .label {
          font-size: 26px;
          color: #e6f7ff;
          opacity: 0.8;
        }
        .value {
          font-size: 26px;
          color: #fff;
          margin: 0 7px;
        }
        .unit {
          font-size: 20px;
          color: #e6f7ff;
          opacity: 0.8;
        }
      }
    }
  }

  .content {
    flex: 1;
    padding-right: 30px;
    height: calc(100% - 57px);
    padding: 20px 10px;
    .card-wrapper {
      height: 100%;

      &::-webkit-scrollbar {
        display: none;
      }
      .card {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;

        .card-item {
          height: 266px;
          border-radius: 12px;
          background: rgba(4, 4, 26, 0.8);
          box-shadow: inset 0px 0px 24px 17px #00a3ff;
          padding: 30px;
          display: flex;
          align-items: center;
          .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
              width: 94px;
              height: 122px;
            }

            span {
              font-size: 20px;
            }
          }

          .desc {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            .desc-item {
              display: flex;
              align-items: center;
              margin-left: 30px;
              cursor: pointer;
              .label {
                font-size: 18px;
                color: #fff;
              }
              .value {
                font-size: 18px;
                color: #fff;
                margin-left: 10px;
              }
            }
          }
        }
      }

      ::v-deep .table {
        padding-bottom: 20px;

        .el-table th.el-table__cell {
          background-color: #07224e;
        }
        .el-table,
        .el-table__expanded-cell {
          background-color: #041333;
        }

        .el-table thead {
          color: #fff;
        }

        .el-table td.el-table__cell,
        .el-table th.el-table__cell.is-leaf,
        .el-table td.el-table__cell,
        .el-table th.el-table__cell.is-leaf {
          border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        }

        .el-table th.el-table__cell > .cell {
          font-size: 16px;
        }
        .el-table tr {
          background-color: #041333;
        }

        .el-table td.el-table__cell div {
          color: #fff;
          font-size: 16px;
        }

        .el-table--enable-row-hover
          .el-table__body
          tr:hover
          > td.el-table__cell {
          background-color: rgb(4, 19, 51, 0.3);
        }

        /* 设置横向滚动条 */
        .el-table__body-wrapper::-webkit-scrollbar {
          height: 8px; /* 横向滚动条高度 */
        }

        .el-table__body-wrapper::-webkit-scrollbar-thumb {
          background-color: #b4b4b4; /* 横向滚动条滑块颜色 */
        }

        /* 设置纵向滚动条 */
        .el-table__body-wrapper::-webkit-scrollbar {
          width: 8px; /* 纵向滚动条宽度 */
        }

        .el-table--border .el-table__cell,
        .el-table__body-wrapper
          .el-table--border.is-scrolling-left
          ~ .el-table__fixed {
          border-right: 1px solid rgba(255, 255, 255, 0.6);
        }
        .el-table--border,
        .el-table--group {
          border: 0.1px solid rgb(152, 151, 151) !important;
        }
      }
    }
  }
}
</style>
