<template>
  <div>
    <NavigatonBar v-if="userStore.isAuthenticated" />
    <main>
      <router-view />
    </main>
    <AlertList
      :alerts="alertStore.alerts"
      @close="alertStore.closeAlert($event)"
    />
  </div>
</template>

<script lang="ts" setup>
import { AlertList } from "lorga-ui";
import NavigatonBar from "./components/NavigatonBar.vue";
import { useAlertStore } from "./store/alert";
import { useUserStore } from "./store/user";

const alertStore = useAlertStore();
const userStore = useUserStore();
</script>
