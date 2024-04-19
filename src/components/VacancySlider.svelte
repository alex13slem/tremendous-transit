<script lang="ts">
  import type { CollectionEntry } from 'astro:content';
  import type { SwiperContainer } from 'swiper/element';
  import VacancyCard from './VacancyCard.svelte';
  import type { SwiperOptions } from 'swiper/types';
  import { onMount } from 'svelte';
  import type { VacancySelect } from '../schemas/vacancySchema';

  export let vacancies: VacancySelect[];
  let swiper: SwiperContainer;

  const swiperParams: SwiperOptions = {
    slidesPerView: 1.25,
    mousewheel: true,
    spaceBetween: 30,
    breakpoints: {
      630: {
        slidesPerView: 2.25,
      },
      1024: {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
    },
  };

  onMount(() => {
    Object.assign(swiper, swiperParams);
    swiper.initialize();
  });
</script>

<div class="body">
  <swiper-container
    class="slider"
    class:load={!swiper}
    bind:this={swiper}
    init={false}
  >
    {#each vacancies as vacancy}
      <swiper-slide class="slide">
        <div class="slide__wrap">
          <VacancyCard {vacancy} size="sm" isEven linkHistoryReplace />
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
</div>

<style lang="scss">
  .slide {
    height: fit-content;
    @media (min-width: 1024px) {
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .slider {
    @media (min-width: 1024px) {
      height: 770px;
    }
  }
  .body {
    @media (max-width: 1023.98px) {
      margin-right: -2rem;
    }
  }
</style>
