<template>
  <div id="nav">
    <n-menu
      @update:value="handleUpdateValue"
      :options="menuOptions"
      mode="horizontal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, h, resolveComponent } from "vue";
import { NIcon, useMessage } from "naive-ui";
import { Home, Book, LogoLinkedin, Man } from "@vicons/ionicons5";

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        resolveComponent("router-link"),
        {
          to: {
            name: "index",
            params: {
              // lang: 'zh-CN'
            },
          },
        },
        { default: () => "Home" }
      ),
    key: "1",
    icon: renderIcon(Home),
  },
  {
    label: () =>
      h(
        resolveComponent("router-link"),
        {
          to: {
            name: "Artical",
            params: {
              // lang: 'zh-CN'
            },
          },
        },
        { default: () => "Artical" }
      ),
    key: "2",
    icon: renderIcon(Book),
  },
  {
    label: () =>
      h(
        resolveComponent("router-link"),
        {
          to: {
            name: "index",
            params: {
              // lang: 'zh-CN'
            },
          },
        },
        { default: () => "Link" }
      ),
    key: "3",
    icon: renderIcon(LogoLinkedin),
  },
  {
    label: () =>
      h(
        resolveComponent("router-link"),
        {
          to: {
            name: "About",
            params: {
              // lang: 'zh-CN'
            },
          },
        },
        { default: () => "About" }
      ),
    key: "4",
    icon: renderIcon(Man),
  },
];

export default defineComponent({
  setup() {
    // const message = useMessage()
    return {
      menuOptions,
      handleUpdateValue(key, item) {
        // message.info('[onUpdate:value]: ' + JSON.stringify(key))
        // message.info('[onUpdate:value]: ' + JSON.stringify(item))
      },
    };
  },
});
</script>

<style>
#nav {
  text-align: center;
  background: white;
  border-radius: 10px;
}
</style>

