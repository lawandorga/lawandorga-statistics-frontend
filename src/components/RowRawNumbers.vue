<template>
  <div class="grid gap-4 xl:grid-cols-5">
    <StatisticNumber title="Law Clinics">
      {{ data.lcs }}
    </StatisticNumber>
    <StatisticNumber title="Users">
      {{ data.users }}
    </StatisticNumber>
    <StatisticNumber title="Records">
      {{ data.records }}
    </StatisticNumber>
    <StatisticNumber title="Files">
      {{ data.files }}
    </StatisticNumber>
    <StatisticNumber title="Collabs">
      {{ data.collabs }}
    </StatisticNumber>
  </div>
</template>

<script lang="ts" setup>
import StatisticService from "@/services/statistic";
import { ref } from "vue";
import { RawNumbers } from "@/types/statistic";
import StatisticNumber from "./StatisticNumber.vue";

const data = ref<RawNumbers>({
  records: 0,
  users: 0,
  collabs: 0,
  files: 0,
  lcs: 0,
});

StatisticService.getRawNumbers().then((v) => (data.value = v));
</script>
