import { writable } from 'svelte/store';
import Root from './index.svelte';

const activeIdx = writable(1);

export { Root as PublishingTabs, Root, activeIdx };
