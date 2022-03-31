import { Store } from "vuex";
import { RootState } from "./state";
import { Router } from "vue-router";

declare module "@vue/runtime-core" {
  // eslint-disable-next-line no-unused-vars
  interface ComponentCustomProperties {
    $store: Store<RootState>;
    $router: Router;
  }
}
