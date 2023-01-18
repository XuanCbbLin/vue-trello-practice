import { ref } from 'vue';
import { defineStore } from 'pinia';
import { uid } from '@/utils/uid';

interface APILists {
  id: string;
  title: string;
  tasks: Tasks[];
}

interface Tasks {
  id: string;
  title: string;
  content: string;
}

export const useStore = defineStore('store', () => {
  const lists = ref<APILists[]>([
    {
      id: '61bblwnux0tlb1vp3qk',
      title: 'Hello Vue.js!',
      tasks: [
        {
          id: '79bcdufvlfdlb1voaq5',
          title: 'Vue.js 測試',
          content: '內文區塊',
        },
        {
          id: '4ffywwh2sfelb1vob44',
          title: 'Vue.js 測試2',
          content: '內文區塊2',
        },
      ],
    },
    {
      id: '1ix2wxwsldblb1vpa4h',
      title: 'Hello Laravel!',
      tasks: [
        {
          id: 'zm3frri5a4lb0l8c2e',
          title: 'Laravel 測試',
          content: '內文區塊',
        },
        {
          id: 'b8ijxyk2o9lb1vnzio',
          title: 'Laravel 測試2',
          content: '內文區塊2',
        },
      ],
    },
  ]);

  const currentEditTask = ref<{
    cardId?: string | undefined;
    content?: string | undefined;
    id?: string | undefined;
    title?: string | undefined;
  }>({});

  const updateListTitle = (cardId: string = '', title: string = '') => {
    const card = lists.value.find(list => list.id === cardId);

    if (card) {
      card.title = title;
    }
  };

  // 新增任務
  const addTask = (cardId: string = '', title: string = '') => {
    if (!cardId || !title) return;

    const card = lists.value.find(list => list.id === cardId);

    if (card) {
      card.tasks.push({
        id: uid(),
        title,
        content: '',
      });
    }
  };

  // 開啟編輯燈箱
  const openEditTask = (cardId: string, taskId: string) => {
    const card = lists.value.find(list => list.id === cardId);
    const task = card?.tasks.find(task => task.id === taskId);

    // 傳入卡片 id, 及任務資訊
    currentEditTask.value = {
      cardId,
      ...task,
    };
  };

  // 清空 currentEditTask 代表關閉燈箱
  const closeEditTask = () => {
    currentEditTask.value = {};
  };

  // 更新 task 內容
  const updateTask = (cardId: string = '', taskId: string = '', title: string = '', content: string = '') => {
    const card = lists.value.find(list => list.id === cardId);
    const task = card?.tasks.find(task => task.id === taskId);

    if (task) {
      task.title = title;
      task.content = content;

      closeEditTask();
    }
  };

  return { lists, updateListTitle, addTask, currentEditTask, openEditTask, closeEditTask, updateTask };
});
