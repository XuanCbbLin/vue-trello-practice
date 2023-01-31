import { it, describe, expect, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import component from '@/views/BoardView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/BoardView.vue'),
      children: [
        {
          path: 'task/:cardId/:taskId',
          name: 'task',
          component: () => import('@/views/TaskView.vue'),
        },
      ],
    },
  ],
});

describe('EditBox 元件測試', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('沒有點擊任務不顯示 EditBox', () => {
    const wrapper = shallowMount(component, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('[data-test="editBox"]').exists()).toBe(false);
  });
});
