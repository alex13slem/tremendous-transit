import localforage from 'localforage';
import { atom } from 'nanostores';
import Root from './index.svelte';

const isSubmitted = atom<boolean>(false);

try {
  const localeSubmitted = await localforage.getItem('blogerFormSubmitted');
  if (localeSubmitted) {
    isSubmitted.set(true);
  }
} catch (error) {}

export { Root as BlogersForm, Root, isSubmitted };
