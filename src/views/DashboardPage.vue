<template>
  dashboard
  {{ test2 }}
</template>

<script lang="ts">
import user from "@/services/user";
import { defineComponent } from "vue";

export default defineComponent({
  data: function () {
    return {
      x: true,
    };
  },
  computed: {
    test2() {
      return user;
    },
  },
});
</script>
