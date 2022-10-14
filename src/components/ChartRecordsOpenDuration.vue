<template>
  <BarChart :chart-data="chartData" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import getColors from "@/utils/getColors";
import StatisticService from "@/services/statistic";
import { RecordsClosed } from "@/types/statistic";

Chart.register(...registerables);

export default defineComponent({
  components: { BarChart },
  setup() {
    const data = ref<RecordsClosed[]>([]);

    StatisticService.getRecordsClosedStatistic().then((d) => (data.value = d));

    // console.log(data.value.map((i) => (i.name !== null ? i.name : "Unknown"));

    const chartData = computed(() => ({
      labels: data.value.map((i) =>
        i.days !== null ? `${i.days} Days` : "Unknown",
      ),
      datasets: [
        {
          label: "Count",
          data: data.value.map((i) => i.count),
          backgroundColor: getColors(1),
        },
      ],
    }));

    return { chartData };
  },
});
</script>
