import { ref } from 'vue';
import { defineStore } from 'pinia';

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

  const updateListTitle = (cardId: string = '', title: string = '') => {
    const card = lists.value.find(list => list.id === cardId);

    if (card) {
      card.title = title;
    }
  };

  return { lists, updateListTitle };
});
