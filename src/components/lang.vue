<template>
  <div class="language">
    <div class="language_icon">
      <i class="el-icon  el-tooltip__trigger" aria-label="Choose the language that you want" @click="toggle" id="el-id-2049-0" role="button" tabindex="0" aria-controls="el-id-2049-1" aria-expanded="false" aria-haspopup="navigation" data-v-12008bb2="" style="font-size: 24px;">
        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-12008bb2="">
          <path fill="currentColor" d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"></path>
        </svg>
      </i>
    </div>
  </div>

</template>

<script lang="ts" setup>
  import { useStore } from 'vuex'
  const store = useStore()
  /***
   * 自定义国际化
   */
  import { useI18n } from "vue-i18n";
  const { locale } = useI18n();

  /**
   * Element-plus 组件国际化
   */
  import { computed, ref, defineEmits } from 'vue'
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import en from 'element-plus/dist/locale/en.mjs'

  const language = ref(locale.value)
  let localeElement = computed(() => (locale.value === 'zh-cn' ? zhCn : en))

  // const emits = defineEmits(['localeChange'])
  const toggle = () => {
    locale.value = locale.value === 'zh-cn' ? 'en' : 'zh-cn'
    localeElement = computed(() => (locale.value === 'zh-cn' ? zhCn : en))
    // emits('localeChange', localeElement)

    store.dispatch('index/setLanguage', locale.value)
    store.dispatch('index/setLocale', localeElement)
    localStorage.setItem('language',locale.value)
  }
  // emits('localeChange', localeElement)
  store.dispatch('index/setLocale', localeElement)
</script>

<style lang="less" scoped>
  .language_icon  {
    i {
      cursor: pointer;
      color: var(--el-menu-text-color);
      transition: color 0.3s;
    }
  }

</style>