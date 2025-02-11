<template>
  <div class="state-statistics">
    <div class="state-statistics-title">
      <div class="chart-title left-title">状态统计</div>
    </div>

    <div class="card-content">
      <div v-for="(item, index) in dataList" :key="index" class="item">
        <div class="icon" :style="{ borderColor: item.color }">
          <img :src="require(`@/assets/pictures/${item.icon}.svg`)" alt="" />
        </div>
        <div class="desc">
          <div class="label">{{ item.label }}</div>
          <div class="value">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          label: '正常运行',
          value: 621,
          color: '#6EED58',
          icon: 'water',
        },
        { label: '通讯中断', value: 621, color: '#FFC300', icon: 'water' },
        {
          label: '故障停机',
          value: 621,
          color: '#405DF9',
          icon: 'water',
        },
        { label: '一般停机', value: 621, color: '#C317FF', icon: 'water' },
        { label: '待机', value: 621, color: '#F31818', icon: 'water' },
        {
          label: '限负荷运行',
          value: 621,
          color: '#D8DDE3',
          icon: 'water',
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped lang="less">
.state-statistics {
  display: flex;
  flex-direction: column;
  height: 100%;

  .card-content {
    flex: 1;
    padding: 10px 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      width: 49%;
      height: 64px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      .icon {
        width: 64px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #29f1fa;
        flex-shrink: 0;
        padding: 11px;
        border-radius: 8px;
        margin-right: 14px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .desc {
        .label {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.64);
          margin-bottom: 3px;
          margin-top: 3px;
        }
        .value {
          font-size: 28px;
          font-weight: 500;
          line-height: 40px;
          letter-spacing: 0px;
          font-variation-settings: 'opsz' auto;
          color: rgba(255, 255, 255, 0.87); /* 字体颜色 */
          text-shadow: 0px 0px 10px rgba(27, 126, 242, 0.9),
            /* 蓝色光晕 */ 0px 0px 20px rgba(27, 126, 242, 0.6),
            /* 蓝色光晕增强 */ 0px 0px 30px rgba(27, 126, 242, 0.3); /* 蓝色微光 */
        }
      }
    }
  }
}
</style>
