import { atom } from 'nanostores';
import { devArticles } from '../../store/service-articles';
import type { SelectOption } from '../ui/Select';
import Root from './index.svelte';

const options: SelectOption[] = devArticles.get().map((art) => ({
  slug: art.slug,
  value: art.data.title,
  disabled: false,
}));

const selectedOptionValue = atom(options[0].value);

export { Root, Root as ServicesTabs, options, selectedOptionValue };
