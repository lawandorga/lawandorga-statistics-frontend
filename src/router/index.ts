import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardPage from "@/views/DashboardPage.vue";
import { isAuthenticated, notAuthenticated } from "./utils";
import StatisticPage from "@/views/StatisticPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect: { name: "dashboard" },
    // component: () => import("@/views/Index.vue"),
  },
  {
    path: "/dashboard/",
    name: "dashboard",
    component: DashboardPage,
    beforeEnter: notAuthenticated,
  },
  {
    path: "/statistic/",
    name: "statistic",
    component: StatisticPage,
    beforeEnter: isAuthenticated,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

console.info("router created");

export default router;
