import { writable } from 'svelte/store';

export type Toast = {
  id: number;
  message: string;
};

function createToastStore() {
  const { subscribe, set, update } = writable<Toast[]>([]);

  function addToast(message: string) {
    update((toasts) => {
      return [...toasts, { id: Date.now(), message }];
    });
  }

  function removeToast(id: number) {
    update((toasts) => {
      return toasts.filter((toast) => toast.id !== id);
    });
  }

  return {
    subscribe,
    addToast,
    removeToast,
  };
}

export const toastStore = createToastStore();
