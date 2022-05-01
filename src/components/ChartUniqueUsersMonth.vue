<template>
  <LineChart :chart-data="chartData" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import getColors from "@/utils/getColors";
import StatisticService from "@/services/statistic";
import { UserLoginMonth } from "@/types/statistic";

Chart.register(...registerables);

export default defineComponent({
  components: { LineChart },
  setup() {
    const data = ref<UserLoginMonth[]>([]);

    StatisticService.getUniqueUsersMonth().then((d) => (data.value = d));

    const chartData = computed(() => ({
      labels: data.value.map((i) => i.month),
      datasets: [
        {
          label: "Logins",
          data: data.value.map((i) => i.logins),
          borderColor: getColors(1),
          backgroundColor: getColors(1),
        },
      ],
    }));

    return { chartData };
  },
});
</script>
