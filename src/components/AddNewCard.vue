<template>
  <div
    class="bg-slate-200 block border rounded-sm p-2 mx-2 border-gray-500 w-[300px] cursor-pointer bg-opacity-70 hover:bg-opacity-90 min-w-[300px]"
  >
    <div @click="isEditing = true" v-if="!isEditing" class="block select-none">+ 新增其他列表</div>
    <div v-else>
      <input
        type="text"
        ref="target"
        v-on-click-outside="outsideEdit"
        @keydown.enter="addCard"
        v-model="title"
        placeholder="為列表輸入標題"
        class="block w-full p-2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFocus } from '@vueuse/core';
import { vOnClickOutside } from '@vueuse/components';
import { useStore } from '@/stores';

// 處理使⽤者游標焦點
const target = ref();

useFocus(target, { initialValue: true });

const isEditing = ref(false);
const title = ref('');
const store = useStore();
const { addNewCard } = store;

const outsideEdit = () => {
  isEditing.value = false;
};

const addCard = () => {
  addNewCard(title.value);
  title.value = '';
  isEditing.value = false;
};
</script>

<style scoped></style>
