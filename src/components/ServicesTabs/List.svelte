<script lang="ts">
  import { Tab, TabList } from '@rgossiaux/svelte-headlessui';
  import css from './list.module.scss';
  import TabButton from '../ui/TabButton.svelte';
  import { devArticles } from '../../store/articles';
  import { urlQuery } from '@sveu/browser';
  import { targetValue } from '.';
  const query = urlQuery('history');
</script>

<TabList class={css.nav}>
  {#each devArticles as { data: { title }, slug } (slug)}
    <Tab
      class={css.tab}
      on:click={() => {
        $query['development-slug'] = slug;
        $targetValue = slug;
      }}
    >
      <TabButton selected={$targetValue === slug}>
        {title}
      </TabButton>
    </Tab>
  {/each}
</TabList>
