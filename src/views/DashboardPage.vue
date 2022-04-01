<template>
  <div class="flex items-center justify-center w-full min-h-[80vh]">
    <div class="w-full max-w-md mx-auto">
      <h1 class="text-3xl font-bold">Login</h1>
      <div class="mt-6">
        <FormGenerator
          :fields="fields"
          :request="loginRequest"
          submit="Login"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserService from "@/services/user";
import { FormGenerator, types } from "@lawandorga/components";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { LoginResponse } from "@/types/user";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();

const fields = ref<types.FormField[]>([
  {
    label: "E-Mail",
    type: "email",
    name: "email",
    autocomplete: "email",
    required: true,
  },
  {
    label: "Password",
    type: "password",
    autocomplete: "current-password",
    name: "password",
    required: true,
  },
]);

const next = () => {
  const url = route.query.next as string;
  if (url) router.push(url);
  else router.push({ name: "statistic" });
};

const loginRequest = (data: { email: string; password: string }) => {
  return UserService.login(data).then((loginData: LoginResponse) => {
    store.dispatch("user/login", loginData);
    next();
    return loginData;
  });
};
</script>
