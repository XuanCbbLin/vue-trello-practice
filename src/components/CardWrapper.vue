<template>
  <div class="bg-slate-200 block border rounded-sm p-2 mx-2 border-gray-500 min-w-[300px]">
    <div
      v-if="!isTitleEditing"
      @click="isTitleEditing = true"
      class="text-ellipsis text-lg w-4/5 block overflow-hidden"
    >
      {{ title }}
    </div>
    <textarea
      v-else
      ref="target"
      v-model="title"
      @keydown.enter="isTitleEditing = false"
      v-on-click-outside="outsideEdit"
      class="border-none h-8 w-full p-1 resize-none overflow-hidden block"
    ></textarea>

    <!-- 點擊任務區塊開啟燈箱和拖曳任務 -->
    <draggable :list="tasks" group="task" itemKey="id" ghost-class="opacity-30">
      <template #item="{ element }">
        <TaskItem @click="openEditTask(props.id, element.id)" v-bind="element" />
      </template>
    </draggable>

    <AddNewTask :id="props.id" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useFocus } from '@vueuse/core';
import { vOnClickOutside } from '@vueuse/components';
import { useStore } from '@/stores';
import draggable from 'vuedraggable';

const props = defineProps<{
  id: string;
  title: string;
  tasks: { id: string; title: string; content: string }[];
}>();

const title = ref<string>(props.title);
const isTitleEditing = ref<boolean>(false);
const target = ref();
const store = useStore();
const { updateListTitle, openEditTask } = store;

useFocus(target, { initialValue: true });

const outsideEdit = () => {
  isTitleEditing.value = false;
};

watch(isTitleEditing, () => {
  updateListTitle(props.id, title.value);
});
</script>

<style scoped></style>
