<template>
  <div class="theme">
    <el-switch
        v-model="value1"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
    />
  </div>

</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { Sunny, Moon } from '@element-plus/icons-vue'
  const value1 = ref(false)

</script>

<style lang="less" scoped>


</style>