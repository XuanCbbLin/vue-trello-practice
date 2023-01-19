<template>
  <EditBox v-if="currentEditTask?.id" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/stores';

const store = useStore();
const currentEditTask = computed(() => store.currentEditTask);
</script>

<style scoped></style>
