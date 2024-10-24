
<template>
  <div class="battery">
    <div class="cover">
      <div class="energy" :class="{ 'isShow': elecVal > 10 }"></div>
      <div class="energy" :class="{ 'isShow': elecVal > 30 }"></div>
      <div class="energy" :class="{ 'isShow': elecVal > 50 }"></div>
      <div class="energy" :class="{ 'isShow': elecVal > 70 }"></div>
      <div class="energy" :class="{ 'isShow': elecVal > 90 }"></div>
    </div>
    <div class="percent">{{ elecVal + '%' }}</div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      elecVal: 100, // 电池电量
    }
  }
}
</script>
 
<style lang="less" scoped>
.battery {
  // 电池容器
  width: 100px;
  height: 140px;
  background: transparent;
  border: 15px solid #00d2ec;
  border-radius: 10px; // 大小、背景、边框
  position: relative; // 后面绝对定位的前提
  box-sizing: content-box;

  &::before {
    // 伪元素 - 模拟电池正极头
    content: "";
    width: 70px;
    height: 15px;
    position: absolute;
    left: 50%;
    top: -35px;
    transform: translate(-50%, 0); // 大小，水平居中，垂直定位
    background: #00d2ec;
    border-bottom: none;
    border-radius: 5px 5px 0 0; // 背景、边框
  }

  .percent {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); // 大小，水平居中，垂直定位
    font-size: 30px;
    cursor: default;
    user-select: none;
  }


  .cover {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;

    .energy {
      width: 80px;
      height: 16px;
      background-color: transparent;
      border-radius: 2px;
    }

    .isShow {
      background-color: #00d2ec;
    }

  }
}
</style>