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
    <ChartWrapper
      title="Migrated Objects Into The New Folder Format"
      class="col-span-4"
    >
      <RawMigrationNumbers>
        <template #default="{ data }">
          Records: {{ data.records.toFixed(2) }} and
          {{ data.records_togo }} togo.
          <br>
          Questionnaires: {{ data.questionnaires.toFixed(2) }} and
          {{ data.questionnaires_togo }} togo.
          <br>
          Documents: {{ data.documents.toFixed(2) }} and
          {{ data.documents_togo }} togo.
        </template>
      </RawMigrationNumbers>
    </ChartWrapper>
  </div>
</template>

<script setup lang="ts">
import ChartWrapper from "@/components/ChartWrapper.vue";
import RawMigrationNumbers from "@/components/RawMigrationNumbers.vue";
import TableErrors from "@/components/TableErrors.vue";
import TableUserErrors from "@/components/TableUserErrors.vue";
</script>
