<template>
  <div class="header">
    <div class="title">能源基地调控系统</div>
    <div class="menu">
      <div class="router-button" v-bind:class="{ active: this.activeIndex === 1 }" @click="changeMenu(1)">首页</div>
      <div class="router-button" v-bind:class="{ active: this.activeIndex === 2 }" @click="changeMenu(2)">能量检测</div>
      <div class="router-button" v-bind:class="{ active: this.activeIndex === 3 }" @click="changeMenu(3)">能量管理</div>
      <div class="router-button" v-bind:class="{ active: this.activeIndex === 4 }" @click="changeMenu(4)">源荷预测</div>
      <div class="router-button" v-bind:class="{ active: this.activeIndex === 5 }" @click="changeMenu(5)">优化调度</div>
      <div class="router-button" v-bind:class="{ active: this.activeIndex === 6 }" @click="changeMenu(6)">统计分析</div>
      <div class="router-button" v-bind:class="{ active: this.activeIndex === 7 }" @click="changeMenu(7)">后台管理</div>
    </div>
    <div class="clock">
      {{ newTime }}
    </div>
  </div>
</template>


<script>

var icnow = new Date()
var interval;
export default {
  data() {
    return {
      activeIndex: 1,
      year: icnow.getFullYear(),
      month: icnow.getMonth() + 1,
      date: icnow.getDate(),
      day: icnow.getDay(),
      time: icnow.toTimeString().substring(0, 8)
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    changeMenu(e) {
      this.activeIndex = e
      console.log(e);
    },
    getDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const date = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
      this.currentTime = formattedDate;
    }
  },
  created() {
    interval = setInterval(() => {
      let icnow = new Date();
      this.year = icnow.getFullYear();
      this.month = icnow.getMonth() + 1;
      this.date = icnow.getDate();
      this.day = icnow.getDay();
      this.time = icnow.toTimeString().substring(0, 8);
    }, 1000)
  },
  computed: {
    // 当前时间
    newTime: function () {
      return this.year + '年' + this.month + '月' + this.date + '日\u00a0\u00a0' + this.time;
    }
  },
  beforeDestroy() {
    clearInterval(interval);
  }
}
</script>


<style lang="less">
.header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  user-select: none;
  display: flex;

  .title {
    display: inline-block;
    width: 400px;
    font-size: 35px;
    text-shadow: 8px 8px 8px green;
    padding: 0 30px;
  }

  .menu {
    display: inline-block;
    width: 1050px;
    color: #9BD5EF;

    .router-button {
      font-size: 25px;
      display: inline-block;
      width: 150px;
      cursor: pointer;

    }

    :hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(8, 185, 193, 0) 186%);
      color: #4c8dd2;
    }

    .active {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(8, 185, 193, 0) 186%);
      color: #4c8dd2;
    }
  }

  .clock {
    display: inline-block;
    width: 400px;
    font-size: 25px;
    padding: 0 30px;
    color: #9BD5EF;
  }
}
</style>