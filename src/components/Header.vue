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
      2024年8月10日 10:15:30
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: 1
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    changeMenu(e) {
      this.activeIndex = e
      console.log(e);
    }
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

    .router-button {
      font-size: 25px;
      display: inline-block;
      width: 150px;
      cursor: pointer;
      color: #96b4d2;
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
  }
}
</style>