<template>
  <n-grid cols="14" item-responsive responsive="screen">
    <n-grid-item span="0 s:3">
      <div class="light-green">
        0～400px：不显示<br />
        400～600px：占据空间 1<br />
        600～800px：占据空间 2<br />
        800px 以上：占据空间 3
      </div>
    </n-grid-item>

    <n-grid-item span="14 s:8">
      <Nav />
      <Body />
      <Footer />
    </n-grid-item>

    <n-grid-item span="0 s:3">
      <div class="light-green">
        0～400px：不显示<br />
        400～600px：占据空间 1<br />
        600～800px：占据空间 2<br />
        800px 以上：占据空间 3
      </div>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import Nav from "./nav.vue";
import Body from "./body.vue";
import Footer from "./footer.vue";
import { NGrid } from "naive-ui";
</script>

<style>
.light-green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
