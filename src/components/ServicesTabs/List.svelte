<script lang="ts">
  import { Tab, TabList } from '@rgossiaux/svelte-headlessui';
  import css from './list.module.scss';
  import TabButton from '../ui/TabButton.svelte';
  import { devArticles } from '../../store/service-articles';
</script>

<TabList class={css.nav}>
  {#each $devArticles as { data: { title } }}
    <Tab let:selected class={css.tab}>
      <TabButton {selected}>
        {title}
      </TabButton>
    </Tab>
  {/each}
</TabList>
