<template>
  <div class="sub-title">
    <div v-for="item in routerList" :key="item.title" @click="$router.push(item.path)">
      {{ item.title }}</div>
  </div>
</template>

<script>

export default {
  name: 'SubTitle',
  props: {
    routerList: {
      type: Array,
      required: true
    }
  }

}
</script>

<style lang="less">
.sub-title {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
