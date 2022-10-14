<template>
  <div class="p-4">
    <router-link :to="{ name: 'statistics-records-dynamic' }">
      Dynamic
    </router-link>
    <router-link :to="{ name: 'statistics-records-charts' }">
      Charts
    </router-link>
  </div>
  <div class="grid grid-cols-12 gap-4 p-4">
    <ChartWrapper :title="data.label" class="col-span-12 xl:col-span-6">
      <FormGenerator
        :fields="fields"
        submit="Generate Statistic"
        :request="generateStatistic"
      />
      <ChartDynamicBar :data="data" />
      <p v-if="data.error" class="mt-5 font-bold text-red-700">
        There is an error in the statistic it might show wrong results. You
        should consult it@law-orga.de to have it checked.
      </p>
    </ChartWrapper>
  </div>
</template>

<script setup lang="ts">
import ChartWrapper from "@/components/ChartWrapper.vue";
import { FormGenerator, types } from "@lawandorga/components";
import StatisticService from "@/services/statistic";
import { ref } from "vue";
import ChartDynamicBar from "@/components/ChartDynamicBar.vue";
import { DynamicStatistic } from "@/types/statistic";

const fields = [
  {
    label: "Field 1",
    name: "field_1",
    type: "string",
    required: true,
    helptext:
      "Use % in order to ignore the field and just look at all possible fields.",
  },
  {
    label: "Value 1",
    name: "value_1",
    type: "string",
    required: true,
    helptext:
      "Use % in order to ignore the value and just look at all possible values.",
  },
  { label: "Field 2", name: "field_2", type: "string", required: true },
];

const data = ref<DynamicStatistic>({
  label: "Dynamic Statistic",
  error: false,
  data: [],
});

const generateStatistic = (formData: types.JsonModel) =>
  StatisticService.getDynamicStatistic(formData).then((d: DynamicStatistic) => {
    data.value = d;
    console.log(d);
  });
</script>
