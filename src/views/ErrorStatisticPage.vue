<template>
  <div class="grid grid-cols-12 gap-4 p-4">
    <ChartWrapper
      title="Top 20 Error Responses In The Last 30 Days"
      class="col-span-12"
    >
      <TableErrors />
    </ChartWrapper>
    <ChartWrapper
      title="Users With Missing Org Or Personal Keys"
      class="col-span-12"
    >
      <TableUserErrors />
    </ChartWrapper>
  </div>
</template>

<script setup lang="ts">
import ChartWrapper from "@/components/ChartWrapper.vue";
import TableErrors from "@/components/TableErrors.vue";
import TableUserErrors from "@/components/TableUserErrors.vue";
</script>
