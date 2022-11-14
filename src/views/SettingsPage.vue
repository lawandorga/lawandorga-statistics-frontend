<template>
  <div class="flex items-center justify-center w-full min-h-[80vh] px-5">
    <div class="w-full max-w-md mx-auto">
      <h1 class="text-3xl font-bold">Change Password</h1>
      <div class="mt-6">
        <FormGenerator
          :fields="fields"
          :request="changePasswordRequest"
          submit="Save"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserService from "@/services/user";
import { useUserStore } from "@/store/user";
import { FormGenerator, types } from "@lawandorga/components";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const fields = ref<types.FormField[]>([
  {
    label: "Current Password",
    type: "password",
    name: "current_password",
    required: true,
  },
  {
    label: "New Password",
    type: "password",
    name: "new_password",
    required: true,
  },
  {
    label: "New Password Confirm",
    type: "password",
    name: "new_password_confirm",
    required: true,
  },
]);

const changePasswordRequest = (data: {
  current_password: string;
  new_password: string;
  new_password_confirm: string;
}) => {
  return UserService.changePassword(data).then(() => {
    userStore.logout();
    router.push({ name: "dashboard" });
    return null;
  });
};
</script>
