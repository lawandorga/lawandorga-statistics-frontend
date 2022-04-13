<template>
  <div class="grid grid-cols-12 gap-4 p-4">
    <ChartWrapper title="Members in every law clinic" class="col-span-12">
      <ChartMembers />
    </ChartWrapper>
    <ChartWrapper title="Different record states" class="col-span-6">
      <ChartRecordStates />
    </ChartWrapper>
    <ChartWrapper title="Law clinic usage" class="col-span-12">
      <ChartLcUsage />
    </ChartWrapper>
    <ChartWrapper title="User actions in the last 30 days" class="col-span-12">
      <ChartUserActions />
    </ChartWrapper>
    <ChartWrapper title="User logins per day" class="col-span-12">
      <ChartUserLogins />
    </ChartWrapper>
  </div>
</template>

<script setup lang="ts">
import ChartMembers from "@/components/ChartMembers.vue";
import ChartRecordStates from "@/components/ChartRecordStates.vue";
import ChartWrapper from "@/components/ChartWrapper.vue";
import ChartLcUsage from "@/components/ChartLcUsage.vue";
import ChartUserActions from "@/components/ChartUserActions.vue";
import ChartUserLogins from "@/components/ChartUserLogins.vue";
</script>
