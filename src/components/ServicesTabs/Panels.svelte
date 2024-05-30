<script lang="ts">
  import { parse } from 'marked';
  import { fly } from 'svelte/transition';
  import { TabPanels } from '@rgossiaux/svelte-headlessui';
  import css from './panels.module.scss';
  import { devArticles } from '../../store/service-articles';
  import { urlQuery, useragent } from '@sveu/browser';
  import { selectedOptionValue } from '.';
  import type { SwiperContainer } from 'swiper/element';
  import BtnFirm from '../ui/BtnFirm.svelte';
  import { isOpen as modalIsOpen } from '../modals/DevServModal';
  import { navigate } from 'astro:transitions/client';
  import PreviewSlider from '../ArticleSlider/PreviewSlider.svelte';

  const query = urlQuery('history');
  const { mobile } = useragent();

  let swiperEl: SwiperContainer;

  let isEnd: boolean;
  let isBeginning: boolean;

  const onProgress = (e: any) => {
    const [swiper, progress] = e.detail;
    isEnd = swiper.isEnd;
    isBeginning = swiper.isBeginning;
  };
</script>

<div class={css.wrap}>
  <TabPanels let:selectedIndex>
    {#each $devArticles as { data: { gallery, description, category, title }, slug }, idx (slug)}
      {#if ($mobile && $selectedOptionValue === title) || (!$mobile && selectedIndex === idx)}
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
