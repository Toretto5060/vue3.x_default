<template>
  <div class="page">
    <nav-header></nav-header>
    <div class="page_content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavHeader from './components/NavHeader'



</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //color: #2c3e50;
  font-size: 16rem !important;
  color: var(--el-menu-text-color);
  transition: color 0.6s;
}
</style>
