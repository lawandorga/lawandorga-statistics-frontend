<template>
  <div>
    <NavigatonBar v-if="$store.getters['user/isAuthenticated']" />
    <main>
      <router-view />
    </main>
    <AlertList
      :alerts="$store.getters['alert/alerts']"
      @close="$store.dispatch('alert/closeAlert', $event)"
    />
  </div>
</template>

<script lang="ts" setup>
import { AlertList } from "@lawandorga/components";
import NavigatonBar from "./components/NavigatonBar.vue";
</script>
