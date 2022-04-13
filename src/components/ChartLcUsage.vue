<template>
  <BarChart :chart-data="chartData" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import getColors from "@/utils/getColors";
import StatisticService from "@/services/statistic";
import { LcUsage } from "@/types/statistic";

Chart.register(...registerables);

export default defineComponent({
  components: { BarChart },
  setup() {
    const data = ref<LcUsage[]>([]);

    StatisticService.getLcUsage().then((d) => (data.value = d));

    const chartData = computed(() => ({
      labels: data.value.map((i) => i.lc),
      datasets: [
        {
          label: "Records",
          data: data.value.map((i) => i.records),
          backgroundColor: getColors(1),
        },
        {
          label: "Files",
          data: data.value.map((i) => i.files),
          backgroundColor: getColors(2).slice(1),
        },
        {
          label: "Documents",
          data: data.value.map((i) => i.documents),
          backgroundColor: getColors(3).slice(2),
        },
      ],
    }));

    return { chartData };
  },
});
</script>
