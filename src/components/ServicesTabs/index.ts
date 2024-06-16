import { writable } from 'svelte/store';
import { devArticles } from '../../store/articles';
import type { SelectOption } from '../ui/Select';
import Root from './index.svelte';

const options: SelectOption[] = devArticles.map((art) => ({
  text: art.data.title,
  value: art.slug,
  disabled: false,
}));

const targetValue = writable<string | undefined>(undefined);

export { Root, Root as ServicesTabs, options, targetValue };
