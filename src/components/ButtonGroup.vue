<!-- 资产统计 -->
<template>
  <div class="button-group">
    <button class="skew-button">
      <div>风电</div>
    </button>
    <button class="skew-button">
      <div>光电</div>
    </button>
    <button class="skew-button">
      <div>火电</div>
    </button>
    <button class="skew-button">
      <div>供热</div>
    </button>
    <button class="skew-button">
      <div>储能</div>
    </button>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.button-group {
  display: flex;
  justify-content: space-around;
  margin: 0, 20px;
}

.skew-button {
  background: linear-gradient(to bottom, blue, #ddd);
  width: 100px;
  height: 40px;
  text-align: center;
  transform: skewX(-35deg);
  border-radius: 5px;
  cursor: pointer;

  div {
    font-size: 18px;
    color: white;
    transform: skewX(35deg);
  }
}
</style>