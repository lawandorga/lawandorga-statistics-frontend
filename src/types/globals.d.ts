import { Router } from "vue-router";

declare module "@vue/runtime-core" {
   
  /* eslint-disable-next-line */
  interface ComponentCustomProperties {
    $router: Router;
  }
}
