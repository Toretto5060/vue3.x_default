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

  import { useI18n  } from 'vue-i18n';
  const { t, locale, setLocaleMessage } = useI18n();

  import ZH from '../language/zh-cn';
  import EN from '../language/en';

  ZH.helloWord = "你好"
  EN.helloWord =  "hello"
  setLocaleMessage('en', ZH);
  setLocaleMessage('zh-cn', EN);

  const setLanguage = ()=>{
    setLocaleMessage('en', ZH);
    setLocaleMessage('zh-cn', EN);
  }
  setLanguage()




</script>

<style lang="less" scoped>
  .home {
    padding: 0 10rem;
    color: var(--el-menu-text-color);
    transition: color 0.3s;
  }
</style>
