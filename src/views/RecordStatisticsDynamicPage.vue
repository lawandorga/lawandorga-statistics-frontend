<template>
  <NavigationBarRecord />
  <div class="grid grid-cols-12 gap-4 p-4">
    <ChartWrapper
      :title="data.label"
      class="col-span-12 xl:col-span-10 xl:col-start-2"
    >
      <div class="pt-5 pb-8 mt-8 border-t-2 border-b-2 border-gray-200">
        <div class="-mx-3">
          <FormGenerator
            layout-classes="flex [&>*]:px-3 flex-wrap [&>*]:w-1/3 [&>div:nth-child(4)]:w-full"
            :fields="fields"
            submit="Generate Statistic"
            :request="generateStatistic"
          />
        </div>
      </div>
      <div v-if="data.data" class="pt-8">
        <ChartDynamicBar :data="data" />
      </div>
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
import NavigationBarRecord from "@/components/NavigationBarRecord.vue";

const fields = [
  {
    label: "Field 1",
    name: "field_1",
    type: "string",
    required: true,
    helptext:
      "Use % in order to ignore the field and just look at all possible fields. Example value: State",
  },
  {
    label: "Value 1",
    name: "value_1",
    type: "string",
    required: true,
    helptext:
      "Use % in order to ignore the value and just look at all possible values. Example value: Open",
  },
  {
    label: "Field 2",
    name: "field_2",
    type: "string",
    required: true,
    helptext: "Example value: Nationality of the client",
  },
];

const data = ref<DynamicStatistic>({
  label: "Dynamic Statistic",
  error: false,
  data: null,
});

const generateStatistic = (formData: types.JsonModel) =>
  StatisticService.getDynamicStatistic(formData).then((d: DynamicStatistic) => {
    data.value = d;
    console.log(d);
  });
</script>
