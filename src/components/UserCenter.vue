<template>
  <div class="userCenter">
    <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-avatar
              :icon="UserFilled"
              @click="userInfo"
          />
          <!--          <el-icon class="el-icon&#45;&#45;right">-->
          <!--            <arrow-down />-->
          <!--          </el-icon>-->
        </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
  import { UserFilled } from '@element-plus/icons-vue'
  const userInfo = () =>{
    console.log(666)
  }

</script>

<style lang="less" scoped>

</style>
<style lang="less">
  .userCenter {


  }
</style>