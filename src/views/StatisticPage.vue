<template>
  <div class="grid grid-cols-12 gap-4 p-4">
    <RowRawNumbers class="col-span-12" />
    <ChartWrapper title="Members In Every Law Clinic" class="col-span-12">
      <ChartMembers />
    </ChartWrapper>
    <ChartWrapper
      title="Different Record States"
      class="col-span-12 xl:col-span-6"
    >
      <ChartRecordStates />
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
    <ChartWrapper
      title="Top 20 Error Responses In The Last 30 Days"
      class="col-span-12"
    >
      <TableErrors />
    </ChartWrapper>
    <ChartWrapper title="Users With Missing Keys" class="col-span-12">
      <TableUserErrors />
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
import ChartUserLoginsMonth from "@/components/ChartUserLoginsMonth.vue";
import TableErrors from "@/components/TableErrors.vue";
import RowRawNumbers from "@/components/RowRawNumbers.vue";
import TableUserErrors from "@/components/TableUserErrors.vue";
</script>
