<script lang="ts">
  import { TabGroup } from '@rgossiaux/svelte-headlessui';
  import css from './style.module.scss';
  import List from './List.svelte';
  import Panels from './Panels.svelte';
  import { Select } from '../ui/Select';
  import { options, targetValue } from '.';
</script>

<TabGroup class={css.root}>
  <div class={css['select']}>
    <Select {options} bind:value={$targetValue} />
  </div>
  <List />
  <Panels />
</TabGroup>
