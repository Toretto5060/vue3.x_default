<template>
  <div class="home">


    {{ $t("welcome") }}
    {{ $t("person.name") }}


  </div>
</template>

<script lang="ts" setup>


  import { useStore } from 'vuex'
  const store = useStore()


</script>

<style lang="less" scoped>
  .home {
    padding: 0 10rem;
  }
</style>
