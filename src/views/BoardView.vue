<template>
  <div class="bg-emerald-700 h-[100vh] w-full block overflow-x-auto overflow-y-hidden">
    <div id="board-wrapper" class="h-full w-full p-4 block overflow-auto">
      <div class="flex flex-row items-start">
        <draggable :list="list" group="card" itemKey="id" ghost-class="opacity-30" class="flex flex-row items-start">
          <!--  CardWrapper -->
          <template #item="{ element }">
            <CardWrapper v-bind="element" />
          </template>
          <!-- AddNewCard -->
          <template #footer>
            <AddNewCard />
          </template>
        </draggable>
      </div>
    </div>

    <!-- lightbox -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/stores';
import AddNewCard from '@/components/AddNewCard.vue';
import draggable from 'vuedraggable';

const store = useStore();
const list = computed(() => store.lists);
</script>
