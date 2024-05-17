import { atom } from 'nanostores';
import Root from './index.svelte';

const activeIdx = atom(1);

export { Root as PublishingTabs, Root, activeIdx };
