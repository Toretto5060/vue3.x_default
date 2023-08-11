<template>
  <div class="home">
    <Language></Language>
    <Theme></Theme>

    {{ $t("welcome") }}
    {{ $t("person.name") }}


  </div>
</template>

<script lang="ts" setup>
  import Language from "../components/lang"
  import Theme from "../components/theme"

  import { useStore } from 'vuex'
  const store = useStore()


</script>
