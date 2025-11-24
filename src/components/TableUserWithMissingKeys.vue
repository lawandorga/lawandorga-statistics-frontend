<template>
  <TableGenerator
    :data="data"
    :head="[
      { name: 'User', key: 'user' },
      { name: 'Records', key: 'records' },
      { name: 'Access', key: 'access' },
    ]"
  ></TableGenerator>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { TableGenerator } from "lorga-ui";
import StatisticService from "@/services/statistic";
import { UserWithMissingKeys } from "@/types/statistic";

const data = ref<UserWithMissingKeys[]>([]);

StatisticService.getUsersWithMissingKeys().then((d) => (data.value = d));
</script>
