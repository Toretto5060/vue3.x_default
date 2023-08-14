<template>
  <div class="home">


    {{ $t("welcome") }}
    {{ $t("person.name") }}
    {{ $t("helloWord")}}

  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()



</script>

<style lang="less" scoped>
  .home {
    padding: 0 10rem;
  }
</style>
<style lang="less">
  .el-table__cell {
    text-transform: capitalize;
  }
</style>