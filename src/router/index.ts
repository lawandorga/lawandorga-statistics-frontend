import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterView,
} from "vue-router";
import DashboardPage from "@/views/DashboardPage.vue";
import { isAuthenticated, notAuthenticated } from "./utils";
import StatisticPage from "@/views/StatisticPage.vue";
import SettingsPage from "@/views/SettingsPage.vue";
import RecordStatisticsChartsPage from "@/views/RecordStatisticsChartsPage.vue";
import RecordStatisticsDynamicPage from "@/views/RecordStatisticsDynamicPage.vue";
import ErrorStatisticPage from "@/views/ErrorStatisticPage.vue";
import { h } from "vue";

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
    path: "/statistics/",
    name: "statistics",
    component: StatisticPage,
    beforeEnter: isAuthenticated,
  },
  {
    path: "/statistics/records/",
    name: "statistics-records",
    component: { render: () => h(RouterView) },
    redirect: { name: "statistics-records-dynamic" },
    children: [
      {
        path: "/statistics/records/charts/",
        name: "statistics-records-charts",
        component: RecordStatisticsChartsPage,
        beforeEnter: isAuthenticated,
      },
      {
        path: "/statistics/records/dynamic/",
        name: "statistics-records-dynamic",
        component: RecordStatisticsDynamicPage,
        beforeEnter: isAuthenticated,
      },
    ],
  },
  {
    path: "/statistics/error/",
    name: "statistics-error",
    component: ErrorStatisticPage,
    beforeEnter: isAuthenticated,
  },
  {
    path: "/settings/",
    name: "settings",
    component: SettingsPage,
    beforeEnter: isAuthenticated,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

console.info("router created");

export default router;
