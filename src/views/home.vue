<template>
  <div class="home">
    <nav-header></nav-header>
    <div class="home_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import NavHeader from '../components/NavHeader'





</script>

<style lang="less" scoped>
  .home {
    //padding: 0 10rem;
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
<style lang="less">
  .home_content {
    width: 100%;
    height: calc(100% - 60rem);
  }
</style>