import { DataResponse, StatisticUser } from "@/types/user";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import UserService from "@/services/user";

export const useUserStore = defineStore("user", () => {
  const user = ref<StatisticUser>();

  const setData = (data: DataResponse) => {
    user.value = data.user;
  };

  const updateData = () => {
    return UserService.data().then((r) => setData(r));
  };

  const loaded = computed(() => {
    return !!user.value;
  });

  const isAuthenticated = computed(() => {
    return !!user.value;
  });

  const reset = () => {
    user.value = undefined;
  };

  const logout = () => {
    return UserService.logout().then(() => {
      reset();
    });
  };

  return {
    user,
    isAuthenticated,
    loaded,
    updateData,
    reset,
    logout,
  };
});
