<template>
  <div class="nav-header">
    <div class="tool">
      <el-avatar
          :icon="UserFilled"
      />
      <Language class="language"></Language>
      <Theme class="theme"></Theme>
    </div>
  </div>

</template>

<script lang="ts" setup>
    import Language from "./lang"
    import Theme from "./theme"
    import { UserFilled } from '@element-plus/icons-vue'

</script>

<style lang="less" scoped>
  .nav-header {
    width: 100%;
    height: 60rem;
    .tool {
      width: 50%;
      float: right;
      padding: 0 30rem;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      height: 100%;
      .language {
        margin: 0 10rem;
        margin-top: 5rem;
      }
    }
  }
</style>

<style lang="less">
.nav-header {
  .language_icon {
    .el-icon {
      font-size: 24rem !important;
    }
  }
  .el-switch {
    font-size: 14rem !important;
    line-height: 20rem !important;
    height: 32rem !important;
    .el-switch__core {
      min-width: 40rem !important;
      height: 20rem !important;
      border-radius: 10rem !important;
    }
    .el-switch__action {
      width: 16rem !important;
      height: 16rem !important;
      //left: calc(100% - 17rem) !important;
    }
  }
  .el-avatar {
    width: 40rem !important;
    height: 40rem !important;
    cursor: pointer;
  }
  .el-avatar--icon {
    font-size: 18rem !important;
  }

}
</style>