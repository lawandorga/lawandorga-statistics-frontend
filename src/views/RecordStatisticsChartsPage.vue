<template>
  <NavigationBarRecord />
  <div class="grid grid-cols-12 gap-4 p-4">
    <!-- records -->
    <ChartWrapper
      title="Different Record States"
      class="col-span-12 xl:col-span-6"
    >
      <ChartRecordStates />
    </ChartWrapper>
    <ChartWrapper title="Record Tags" class="col-span-12 xl:col-span-6">
      <ChartRecordTagStats />
    </ChartWrapper>

    <!-- record client -->
    <ChartWrapper title="Record Client Sex" class="col-span-12 xl:col-span-6">
      <ChartRecordSex />
    </ChartWrapper>
    <ChartWrapper title="Record Client Age" class="col-span-12 xl:col-span-6">
      <ChartRecordClientAge />
    </ChartWrapper>
    <ChartWrapper
      title="Record Client Nationality"
      class="col-span-12 xl:col-span-6"
    >
      <ChartRecordClientNationality />
    </ChartWrapper>
    <ChartWrapper title="Record Client State" class="col-span-12 xl:col-span-6">
      <ChartRecordClientState />
    </ChartWrapper>
    <ChartWrapper
      title="Record Field Name Amounts"
      class="col-span-12 xl:col-span-6"
    >
      <ChartRecordFields />
    </ChartWrapper>
    <ChartWrapper title="Records Open Duration" class="col-span-12">
      <ChartRecordsOpenDuration />
    </ChartWrapper>
  </div>
</template>

<script setup lang="ts">
import ChartRecordStates from "@/components/ChartRecordStates.vue";
import ChartWrapper from "@/components/ChartWrapper.vue";
import ChartRecordSex from "@/components/ChartRecordSex.vue";
import ChartRecordTagStats from "@/components/ChartRecordTagStats.vue";
import ChartRecordClientAge from "@/components/ChartRecordClientAge.vue";
import ChartRecordClientNationality from "@/components/ChartRecordClientNationality.vue";
import ChartRecordClientState from "@/components/ChartRecordClientState.vue";
import ChartRecordsOpenDuration from "@/components/ChartRecordsOpenDuration.vue";
import ChartRecordFields from "@/components/ChartRecordFields.vue";
import NavigationBarRecord from "@/components/NavigationBarRecord.vue";
</script>
