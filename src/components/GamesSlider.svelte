<script lang="ts">
  import { GameCard } from './GameCard';
  import { onMount } from 'svelte';
  import { type SwiperContainer } from 'swiper/element/bundle';
  import { Mousewheel, Pagination } from 'swiper/modules';
  import type { SwiperOptions } from 'swiper/types';
  import type { GameSelect } from '../schemas/gamesSchema';
  export let games: GameSelect[];

  let swiperEl: SwiperContainer;

  onMount(() => {
    const swiperParams: SwiperOptions = {
      modules: [Pagination, Mousewheel],
      slidesPerView: 1,
      spaceBetween: -10,
      // Responsive breakpoints
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: -20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: -20,
        },
        1290: {
          spaceBetween: -20,
          slidesPerView: 4,
        },
      },
      mousewheel: {},

      pagination: {
        clickable: true,
        el: '.pagination',
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
  });

  function onProgress(e: any) {
    const [swiper, progress] = e.detail;
  }
</script>

<div class="wrap">
  <swiper-container bind:this={swiperEl} class:load={!swiperEl} init="false">
    {#each games as game}
      <swiper-slide>
        <div class="slide-wrap">
          <GameCard {game} />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-wrap">
          <GameCard {game} />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-wrap">
          <GameCard {game} />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-wrap">
          <GameCard {game} />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-wrap">
          <GameCard {game} />
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
  <div class="pagination" />
</div>

<style lang="scss">
  @import '../styles/mixins';
  @include pagination;

  .wrap {
    position: relative;
    z-index: 0;
    margin: -20px;
  }
  .wrap::after,
  .wrap::before {
    z-index: 2;
    content: '';
    position: absolute;
    height: 100%;
    width: 30px;
    top: 0;
    background: linear-gradient(90deg, rgb(var(--c-bg)), transparent);
  }
  .wrap::after {
    right: 0;
    transform: rotate(180deg);
  }
  .wrap::before {
    left: 0;
  }

  .slide-wrap {
    padding: 20px;
    min-width: 270px;
  }
  swiper-container {
    display: flex;

    transition: opacity var(--load-fade);
    &.load {
      opacity: 0;
    }
  }
</style>
