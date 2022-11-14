import { createApp } from "vue";
import { setupDefaultAxios } from "./api";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { useUserStore } from "./store/user";
import "./main.css";
import { createPinia } from "pinia";

// vue
const app = createApp(App);

// store
const pinia = createPinia();
app.use(pinia);

// setup axios
setupDefaultAxios(axios);

// use router
app.use(router);

// mount
app.mount("#app");

// check login status
const userStore = useUserStore();
userStore.updateData();
