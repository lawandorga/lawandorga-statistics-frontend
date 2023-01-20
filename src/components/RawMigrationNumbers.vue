<template>
  <slot :data="data" />
</template>

<script setup lang="ts">
import StatisticService from "@/services/statistic";
import { ref } from "vue";
import { MigrationStatistic } from "@/types/statistic";

const data = ref<MigrationStatistic>({
  records: 0,
  records_togo: 0,
  questionnaires: 0,
  questionnaires_togo: 0,
  documents: 0,
  documents_togo: 0,
});

StatisticService.getMigratedNumbers().then((v) => (data.value = v));
</script>
