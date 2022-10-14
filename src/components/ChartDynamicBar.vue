<template>
  <BarChart :chart-data="chartData" />
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import getColors from "@/utils/getColors";
import { DynamicStatistic } from "@/types/statistic";
import { computed } from "vue";

Chart.register(...registerables);

const props = defineProps<{ data: DynamicStatistic }>();

const { data } = toRefs(props);

const chartData = computed(() => ({
  labels: data.value.data.map((i) => (i[0] !== null ? i[0] : "Unknown")),
  datasets: [
    {
      label: "Count",
      data: data.value.data.map((i) => i[1]),
      backgroundColor: getColors(1),
    },
  ],
}));
</script>
