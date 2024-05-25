<script lang="ts">
  import type { CollectionEntry } from 'astro:content';
  import BtnFirm from './ui/BtnFirm.svelte';
  import {
    PublishingModal,
    isOpen as pubModalIsOpen,
  } from './modals/PublishingModal';
  import {
    DevServModal,
    isOpen as devModalIsOpen,
  } from './modals/DevServModal';
  import { useragent } from '@sveu/browser';
  const { mobile } = useragent();
  export let article: CollectionEntry<'articles'>;
  const { category } = article.data;
</script>

<div class="root">
  {#if $mobile}
    <a href="/{category}/form">
      <BtnFirm variant="contrast">Заказать</BtnFirm>
    </a>
  {:else if category === 'publishing'}
    <BtnFirm variant="contrast" on:click={() => ($pubModalIsOpen = true)}
      >Заказать</BtnFirm
    >
  {:else if category === 'development'}
    <BtnFirm variant="contrast" on:click={() => ($devModalIsOpen = true)}
      >Заказать</BtnFirm
    >
  {/if}
</div>

{#if !$mobile}
  {#if category === 'publishing'}
    <PublishingModal targetSlug={article.slug} />
  {/if}
  {#if category === 'development'}
    <DevServModal targetSlug={article.slug} />
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
