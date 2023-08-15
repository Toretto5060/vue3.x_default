<template>
  <div class="index">
    <router-link to="/NotFound">Non-existing Route</router-link>
    {{ $t("welcome") }}
    {{ $t("person.name") }}

  </div>
</template>

<script lang="ts" setup>
  import NavHeader from '../components/NavHeader'

  import { ref } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()



</script>

<style lang="less" scoped>
  .index {
    padding: 0 10rem;
  }
</style>
<style lang="less">
  .el-table__cell {
    text-transform: capitalize;
  }
</style>