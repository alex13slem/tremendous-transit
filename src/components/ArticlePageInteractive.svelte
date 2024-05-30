<script lang="ts">
  import type { CollectionEntry } from 'astro:content';
  import BtnFirm from './ui/BtnFirm.svelte';
  import { PublishingModal } from './modals/PublishingModal';
  import { DevServModal } from './modals/DevServModal';
  import { urlQuery, useragent } from '@sveu/browser';
  import { isOpen as pubModalIsOpen } from './modals/PublishingModal';
  import { isOpen as devModalIsOpen } from './modals/DevServModal';
  const query = urlQuery('history');

  export let article: CollectionEntry<'articles'>;

  const { mobile } = useragent();
  const { category } = article.data;
</script>

<div class="root">
  {#if $mobile}
    <form action="/{category}/form">
      <input type="hidden" name="publishing-slug" value={article.slug} />
      <BtnFirm variant="contrast">Заказать</BtnFirm>
    </form>
  {:else}
    <BtnFirm
      variant="contrast"
      on:click={() => {
        if (category === 'publishing') {
          $pubModalIsOpen = true;
          $query['publishing-slug'] = article.slug;
        }
        if (category === 'development') {
          $devModalIsOpen = true;
          $query['development-slug'] = article.slug;
        }
      }}>Заказать</BtnFirm
    >
  {/if}
</div>

{#if !$mobile}
  {#if category === 'publishing'}
    <PublishingModal />
  {/if}
  {#if category === 'development'}
    <DevServModal />
  {/if}
{/if}

<style lang="scss">
  @media (max-width: 1023.98px) {
    .root {
      display: flex;
      justify-content: center;
    }
  }
</style>
