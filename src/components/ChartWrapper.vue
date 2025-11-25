<template>
  <div class="p-4 bg-white">
    <h2 class="text-2xl font-bold">
      {{ title }}
    </h2>
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
