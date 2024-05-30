<script lang="ts">
  import { parse } from 'marked';
  import { fly } from 'svelte/transition';
  import { TabPanels } from '@rgossiaux/svelte-headlessui';
  import css from './panels.module.scss';
  import { formatStrToId } from '../../utils/helpers';
  import { devArticles } from '../../store/service-articles';
  import { urlQuery, useragent } from '@sveu/browser';
  import { selectedOptionValue } from '.';
  import type { SwiperContainer } from 'swiper/element';
  import BtnFirm from '../ui/BtnFirm.svelte';
  import { isOpen as modalIsOpen } from '../modals/DevServModal';
  import { navigate } from 'astro:transitions/client';

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
      <!-- {#if $selectedOptionValue === title} -->
      {#if ($mobile && $selectedOptionValue === title) || (!$mobile && selectedIndex === idx)}
        <div class={css.panel} transition:fly={{ y: '75%', duration: 700 }}>
          <div class={css.slider} class:isEnd class:isBeginning>
            <swiper-container
              class={css['slider-wrap']}
              bind:this={swiperEl}
              mousewheel={true}
              slides-per-view="1.1"
              breakpoints={{
                1168: {
                  slidesPerView: 3.2,
                },
                992: {
                  slidesPerView: 2.2,
                },
              }}
              on:swiperprogress={onProgress}
            >
              {#if gallery && !!gallery.length}
                {#each gallery as { src, alt }}
                  <swiper-slide lazy="true">
                    <div class={css['slide-wrap']}>
                      <a
                        href="{category}/{slug}/#{formatStrToId(alt)}"
                        class={css.image}
                        data-astro-reload
                      >
                        <img
                          {src}
                          {alt}
                          width="268"
                          height="193"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </swiper-slide>
                {/each}
                {#each gallery as { src, alt }}
                  <swiper-slide lazy="true">
                    <div class={css['slide-wrap']}>
                      <a
                        href="{category}/{slug}/#{formatStrToId(alt)}"
                        class={css.image}
                        data-astro-reload
                      >
                        <img
                          {src}
                          {alt}
                          width="268"
                          height="193"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </swiper-slide>
                {/each}
              {/if}
            </swiper-container>
          </div>

          <div class="prose">
            {#if description}
              {@html parse(description)}
            {/if}
          </div>

          <div class={css['btn-wrap']}>
            <BtnFirm
              variant="contrast"
              on:click={() => {
                if ($mobile) navigate(`/development/form`);
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
