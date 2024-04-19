<script lang="ts">
  import { parse } from 'marked';
  import { fly } from 'svelte/transition';
  import { TabPanels } from '@rgossiaux/svelte-headlessui';
  import css from './panels.module.scss';
  import ModalTrigger from '../modals/ModalTrigger.svelte';
  import { formatStrToId } from '../../utils/helpers';
  import { devArticles } from '../../store/service-articles';
  import { useragent } from '@sveu/browser';
  import { selectedOptionValue } from '.';
  import type { SwiperContainer } from 'swiper/element';

  let swiperEl: SwiperContainer;
  const { mobile } = useragent();

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
          <div class={css.slider}>
            <swiper-container
              class={css['slider-wrap']}
              class:isEnd
              class:isBeginning
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
            </swiper-container>
          </div>

          <div class="prose">
            <!-- {@html parse(description)} -->
            <p>
              Возьмем на себя полный цикл разработки игры на Unity и UE
              портируем на ПК, консоли и мобильные устройства.
            </p>
            <p>Eisvil - это то место, где идеи становятся игрой!</p>
          </div>

          <div class={css['btn-wrap']}>
            <ModalTrigger variant="contrast" type="development" {slug}
              >Расчитать</ModalTrigger
            >
          </div>
        </div>
      {/if}
    {/each}
  </TabPanels>
</div>
