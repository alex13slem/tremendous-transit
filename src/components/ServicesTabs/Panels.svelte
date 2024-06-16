<script lang="ts">
  import { parse } from 'marked';
  import { fly } from 'svelte/transition';
  import { TabPanels } from '@rgossiaux/svelte-headlessui';
  import css from './panels.module.scss';
  import { devArticles } from '../../store/articles';
  import { urlQuery, useragent } from '@sveu/browser';
  import { targetValue } from '.';
  import BtnFirm from '../ui/BtnFirm.svelte';
  import { isOpen as modalIsOpen } from '../modals/DevServModal';
  import { navigate } from 'astro:transitions/client';
  import PreviewSlider from '../ArticleSlider/PreviewSlider.svelte';
  import { onMount } from 'svelte';

  const query = urlQuery('history');
  const { mobile } = useragent();

  onMount(() => {
    $targetValue = $query['development-slug'];
    if (!$targetValue) {
      $targetValue = devArticles[0].slug;
      $query['development-slug'] = $targetValue;
    }
  });
</script>

<div class={css.wrap}>
  <TabPanels>
    {#each devArticles as { data: { gallery, description, category }, slug } (slug)}
      {#if $targetValue === slug}
        <div class={css.panel} transition:fly={{ y: '75%', duration: 700 }}>
          {#if gallery}
            <PreviewSlider data={gallery} staticHref="{category}/{slug}" />
          {/if}
          <div class="prose">
            {#if description}
              {@html parse(description)}
            {/if}
          </div>

          <div class={css['btn-wrap']}>
            <BtnFirm
              variant="contrast"
              on:click={() => {
                if ($mobile)
                  navigate(`/development/form?development-slug=${slug}`);
                else $modalIsOpen = true;
                $query['development-slug'] = slug;
              }}>Расчитать</BtnFirm
            >
          </div>
        </div>
      {/if}
    {/each}
  </TabPanels>
</div>
