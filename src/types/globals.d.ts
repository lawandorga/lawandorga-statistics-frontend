import { Router } from "vue-router";

declare module "@vue/runtime-core" {
  // eslint-disable-next-line no-unused-vars
  interface ComponentCustomProperties {
    $router: Router;
  }
}
