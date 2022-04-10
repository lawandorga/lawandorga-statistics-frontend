<template>
  <div>
    <BarChart :chart-data="chartData" title="Test"></BarChart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { BarChart } from "vue-chart-3";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import getColors from "@/utils/getColors";

Chart.register(...registerables);

export default defineComponent({
  components: { BarChart },
  setup() {
    const data = ref([]);

    axios.get("statistic/rlc_members/").then((d) => (data.value = d.data));

    const chartData = computed(() => ({
      labels: data.value.map((i) => i.name),
      datasets: [
        {
          label: "Mitglieder",
          data: data.value.map((i) => i.amount),
          backgroundColor: getColors(1),
        },
      ],
    }));

    return { chartData };
  },
});
</script>
