<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/stores';
import EditBox from '@/components/EditBox.vue';
import type AddNewCard from '@/components/AddNewCard.vue';

interface Lists {
  id: string;
  title: string;
  tasks: Tasks[];
}

interface Tasks {
  id: string;
  title: string;
  content: string;
}

const store = useStore();
const list = computed<Lists[]>(() => store.lists);
const currentEditTask = computed(() => store.currentEditTask);
</script>

<template>
  <div class="bg-emerald-700 h-[100vh] w-full block overflow-x-auto overflow-y-hidden">
    <div id="board-wrapper" class="h-full w-full p-4 block overflow-auto">
      <div class="flex flex-row items-start">
        <!-- card -->
        <CardWrapper v-for="card in list" :key="card.id" v-bind="card" />

        <!-- add new card -->
        <AddNewCard />
      </div>
    </div>

    <!-- lightbox -->
    <EditBox v-if="currentEditTask?.id" />
  </div>
</template>
