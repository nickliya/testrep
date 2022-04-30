<script lang="ts">
import DefaultLayouts from "./layouts/default.vue";
import { defineComponent, reactive } from "vue";
import imgUrl from './assets/bg.jpg'

const imgUrl = new URL("./assets/bg.jpg", import.meta.url).href;

export default defineComponent({
  components: { DefaultLayouts },
  setup() {
    const datas = reactive({
      background: {
        backgroundImage: "url(" + imgUrl + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      },
    });
    return {
      datas,
    };
  },
})
</script>

<template>
  <DefaultLayouts :style="datas.background" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
