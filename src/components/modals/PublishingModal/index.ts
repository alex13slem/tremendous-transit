import { writable } from 'svelte/store';
import Root from './index.svelte';

const isOpen = writable(false);

export { Root as PublishingModal, Root, isOpen };
