<template>
  <button @click="logout()">logout</button>
  <div>statistic page</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const logout = () => {
  store.dispatch("user/logout");
  router.push({ name: "dashboard" });
};
</script>
