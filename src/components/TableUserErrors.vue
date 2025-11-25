<template>
  <TableGenerator
    :data="data"
    :head="[
      { name: 'User', key: 'email' },
      { name: 'Rlckeys', key: 'rlckeys' },
      { name: 'Userkeys', key: 'userkeys' },
      { name: 'Accepted', key: 'accepted' },
      { name: 'Locked', key: 'locked' },
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
import { TableGenerator } from "lorga-ui";
import StatisticService from "@/services/statistic";
import { ErrorUser } from "@/types/statistic";

const data = ref<ErrorUser[]>([]);

StatisticService.getUserErrors().then((d) => (data.value = d));
</script>
