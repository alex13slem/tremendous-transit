import localforage from 'localforage';
import Root from './index.svelte';
import { writable } from 'svelte/store';

const isSubmitted = writable(false);

try {
  const localeSubmitted = await localforage.getItem('blogerFormSubmitted');
  if (localeSubmitted) {
    isSubmitted.set(true);
  }
} catch (error) {}

export { Root as BlogersForm, Root, isSubmitted };
