<template>
  <div class="sub-title">
    <div v-for="item in routerList" :key="item.title" @click="$router.push(item.path)">
      <h1>{{ item.title }}</h1></div>
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
  width: 700px;
  margin-left: 600px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  h1 {
    font-size: 20px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
}
</style>
