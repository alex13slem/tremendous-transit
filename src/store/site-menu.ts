import { writable } from 'svelte/store';

const createSiteMenuStore = () => {
  const { subscribe, set, update } = writable(false);

  const open = () => {
    set(true);
  };

  const close = () => {
    set(false);
  };

  const toggle = () => {
    update((open) => !open);
  };

  return {
    subscribe,
    open,
    close,
    toggle,
  };
};

export const siteMenuStore = createSiteMenuStore();
