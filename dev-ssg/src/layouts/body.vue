<template>
  <div id="body">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
// import "highlight.js/styles/agate.css";
import { defineComponent } from "vue";

export default defineComponent({
  props: {},
  name: "Body",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style>
#body {
  min-height: 1200px;
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
  border-radius: 5px;
}
#body {

}.homePage{
  background: none;
}
</style>
