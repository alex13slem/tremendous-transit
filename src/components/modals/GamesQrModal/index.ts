import { atom } from 'nanostores';
import Root from './index.svelte';

const isOpen = atom<boolean>(false);
const targetSlug = atom<string | null>(null);

export { Root as GamesQrModal, Root, isOpen, targetSlug };
