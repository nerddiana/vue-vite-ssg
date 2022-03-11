import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import { createRouter } from "./router";

export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  const router = createRouter();
  const head = createHead();

  app.use(head);
  app.use(pinia);
  app.use(router);

  return {
    app,
    router,
    head,
  };
}
