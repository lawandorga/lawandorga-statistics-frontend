<template>
  <Chart
    :size="{ width: 1600, height: 420 }"
    :data="data"
    :margin="margin"
    :direction="direction"
    :axis="axis"
  >
    <template #layers>
      <Grid />
      <Bar :data-keys="['name', 'amount']" :bar-style="{ fill: '#90e0ef' }" />
    </template>

    <template #widgets>
      <Tooltip
        border-color="#48CAE4"
        :config="{
          amount: { color: '#90e0ef' },
        }"
      />
    </template>
  </Chart>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Chart, Grid, Bar, Tooltip } from "vue3-charts";
import axios from "axios";

export default defineComponent({
  name: "LineChart",
  components: { Chart, Grid, Bar, Tooltip },
  setup() {
    const data = ref([]);

    axios.get("statistic/rlc_members/").then((d) => (data.value = d.data));

    const direction = ref("horizontal");
    const margin = ref({
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    });

    const axis = ref({
      primary: {
        type: "band",
      },
      secondary: {
        domain: ["dataMin", "dataMax + 100"],
        type: "linear",
        ticks: 8,
      },
    });

    return { data, direction, margin, axis };
  },
});
</script>
