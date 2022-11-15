import { useUserStore } from "@/store/user";
import { getNextQuery } from "@/utils/router";
import { NavigationGuard } from "vue-router";

export const isAuthenticated: NavigationGuard = (to) => {
  const userStore = useUserStore();

  if (!userStore.isAuthenticated) {
    return {
      name: "dashboard",
      query: getNextQuery(to.fullPath),
    };
  }
};
