<template>
  <div class="flex items-center justify-center w-full min-h-[80vh] px-5">
    <div class="w-full max-w-md mx-auto">
      <h1 class="text-3xl font-bold">Login</h1>
      <div v-if="!userStore.isAuthenticated" class="mt-6">
        <ButtonNormal @click="login()">To the login page</ButtonNormal>
      </div>
      <div v-else>
        <ButtonNormal :to="{ name: 'statistics' }">
          To the dashboard
        </ButtonNormal>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from "vue";
import { useUserStore } from "@/store/user";
import { ButtonNormal } from "@lawandorga/components";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

// login
const login = () => {
  const path = route.query.next ? route.query.next : "/statistics/";
  const next = window.location.origin + path;
  const url = `${import.meta.env.VITE_AUTH_URL}/login/?next=${next}`;
  window.location.href = url;
};

// if (!userStore.isAuthenticated) login();

// redirect
watch(userStore, () => {
  if (userStore.isAuthenticated) {
    const url = route.query.next as string;
    if (url) router.push(url);
    else router.push({ name: "statistics" });
  }
});
</script>
