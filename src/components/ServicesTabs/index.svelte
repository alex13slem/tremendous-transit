<script lang="ts">
  import { TabGroup } from '@rgossiaux/svelte-headlessui';
  import css from './style.module.scss';
  import List from './List.svelte';
  import Panels from './Panels.svelte';
  import { Select } from '../ui/Select';
  import { options, selectedOptionValue } from './index';
</script>

<TabGroup class={css.root}>
  <div class={css['select']}>
    <Select {options} bind:value={$selectedOptionValue} />
  </div>
  <List />
  <Panels />
</TabGroup>
