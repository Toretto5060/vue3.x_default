<template>
  <div class="dark-box">
    <el-switch
        v-model="isDark"
        @change="toggleDark"
        color="#000000"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()

  let isDark = store.getters.getTheme == "light" ? ref(false) :ref(true)
  const html = document.querySelector('html')

  const toggleDark = (e) => {
    isDark = ref(e)
    if (html) {
      if (isDark.value) {
        html.classList.remove("light");
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
        html.classList.add("light");
      }
      store.dispatch('index/setTheme',isDark.value ? 'dark' : 'light');
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  if (store.getters.getTheme == "light") {
    html.classList.remove("dark");
    html.classList.add("light");
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
  }

</script>

<style lang="less" scoped>
  .switch {
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    padding-bottom: 0;
    padding-top: 0px;

    background-color: #ebeef5 !important;
    font-size: 12px;
  }

  .isDark-switch {
    .el-icon {
      background-color: #fff !important;
      padding: 2px;
      border-radius: 50%;
      color: #000;
      margin-left: -8px;
    }
  }

  .noDark-switch {
    background-color: rgb(8, 8, 8) !important;

    .el-icon {
      color: #fff;
      margin-left: 15px;
    }
  }
</style>
<style lang="less">
.el-switch.is-checked .el-switch__core {
  background: #2C2C2C !important;
  border-color: var(--border-color) !important;
  cursor: pointer;
  transition: all 0.3s !important;
}



.el-switch {
  .el-switch__action {
    background-color: var(--bg-color);
    color: var(--text-color-light);
    background: url("~@/assets/sunny.svg") no-repeat;
    background-size: 75%;
    background-position: 60% 50%;

  }
}
.el-switch.is-checked {
  .el-switch__action {
    background-color: #000;
    background-image: url("~@/assets/moon.svg");
    background-size: 75%;
    background-position: 60% 50%;
  }
}

</style>