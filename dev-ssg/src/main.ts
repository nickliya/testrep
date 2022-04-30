import App from "./App.vue";
import { createSSRApp, createApp as createClientApp } from "vue";
import { createRouter,routes } from "./router";
import { ViteSSG } from 'vite-ssg'

// export function createApp() {
//   const app = import.meta.env.SSR ? createSSRApp(App) : createClientApp(App);
//   const router = createRouter();
//   // const pinia = createPinia();

//   // app.config.globalProperties.$http = instance;
//   app.use(router);
//   // app.use(pinia);
//   return { app, router };
// }

// const { app, router } = createApp();
// app.mount("#app");

const router = createRouter();

export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    { routes },
    // function to have custom setups
    ({ app, router, routes, isClient, initialState }) => {
      // install plugins etc.
    },
  )

// const { app, router } = createApp();
// app.mount("#app");