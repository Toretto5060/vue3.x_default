<template>
  <div class="page">
      <router-view/>
  </div>
</template>

<script lang="ts" setup>



</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;

}
.page_content {
  width: 100%;
  height: 100%;
  overflow: auto;
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
