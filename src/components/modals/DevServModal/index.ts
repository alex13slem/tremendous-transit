import { atom } from 'nanostores';
import Root from './index.svelte';

const isOpen = atom(false);

export { Root as DevServModal, Root, isOpen };
