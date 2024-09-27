<!-- 资产统计 -->
<template>
  <div class="button-group">
    <button class="skew-button w-100 skew-selected">
      <div>风电</div>
    </button>
    <button class="skew-button w-100 skew-selected">
      <div>光电</div>
    </button>
    <button class="skew-button w-100">
      <div>火电</div>
    </button>
    <button class="skew-button w-100">
      <div>供热</div>
    </button>
    <button class="skew-button w-100">
      <div>储能</div>
    </button>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.button-group {
  display: flex;
  justify-content: space-around;
  margin: 0, 20px;
}

.w-100 {
  width: 100px;
}
</style>