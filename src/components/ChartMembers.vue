<template>
  <BarChart :chart-data="chartData" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import getColors from "@/utils/getColors";
import StatisticService from "@/services/statistic";
import { RlcMember } from "@/types/statistic";

Chart.register(...registerables);

export default defineComponent({
  components: { BarChart },
  setup() {
    const data = ref<RlcMember[]>([]);

    StatisticService.getRlcMembers().then((d) => (data.value = d));

    const chartData = computed(() => ({
      labels: data.value.map((i) => i.name),
      datasets: [
        {
          label: "Members",
          data: data.value.map((i) => i.amount),
          backgroundColor: getColors(1),
        },
      ],
    }));

    return { chartData };
  },
});
</script>
