<template>
  <nav class="shadow bg-gray-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex h-10">
        <div class="flex">
          <div class="hidden sm:flex sm:space-x-8">
            <!-- Current: "border-blue-700 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <RouterLink
              :to="{ name: 'statistics-records-dynamic' }"
              class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              active-class="!text-gray-900"
            >
              Dynamic
            </RouterLink>
            <RouterLink
              :to="{ name: 'statistics-records-charts' }"
              class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              active-class="!text-gray-900"
            >
              Charts
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>
