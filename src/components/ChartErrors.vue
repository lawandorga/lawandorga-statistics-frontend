<template>
  <TableGenerator
    :data="data"
    :head="[
      { name: 'Path', key: 'path' },
      { name: 'Status', key: 'status' },
      { name: 'Count', key: 'count' },
    ]"
  >
    <template #status="item">
      <span :class="{ 'font-bold text-red-600': item.status >= 500 }">
        {{ item.status }}
      </span>
    </template>
  </TableGenerator>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { TableGenerator } from "@lawandorga/components";
import StatisticService from "@/services/statistic";
import { ErrorMonth } from "@/types/statistic";

const data = ref<ErrorMonth[]>([]);

StatisticService.getErrors().then((d) => (data.value = d));
</script>
