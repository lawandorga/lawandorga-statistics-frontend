<template>
  <div class="grid grid-cols-12 gap-4 p-4">
    <RowRawNumbers class="col-span-12" />

    <!-- usage -->
    <ChartWrapper title="Members In Every Law Clinic" class="col-span-12">
      <ChartMembers />
    </ChartWrapper>
    <ChartWrapper title="Law Clinic Usage" class="col-span-12">
      <ChartLcUsage />
    </ChartWrapper>
    <ChartWrapper title="User Actions In The Last 30 Days" class="col-span-12">
      <ChartUserActions />
    </ChartWrapper>
    <ChartWrapper title="User Logins Per Day" class="col-span-12">
      <ChartUserLogins />
    </ChartWrapper>
    <ChartWrapper title="User Logins Per Month" class="col-span-12">
      <ChartUserLoginsMonth />
    </ChartWrapper>
    <ChartWrapper title="Unique Users Per Month" class="col-span-12">
      <ChartUserLoginsMonth />
    </ChartWrapper>
  </div>
</template>

<script setup lang="ts">
import ChartMembers from "@/components/ChartMembers.vue";
import ChartWrapper from "@/components/ChartWrapper.vue";
import ChartLcUsage from "@/components/ChartLcUsage.vue";
import ChartUserActions from "@/components/ChartUserActions.vue";
import ChartUserLogins from "@/components/ChartUserLogins.vue";
import ChartUserLoginsMonth from "@/components/ChartUserLoginsMonth.vue";
import RowRawNumbers from "@/components/RowRawNumbers.vue";
</script>
