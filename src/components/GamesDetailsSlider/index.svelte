<script lang="ts">
  import type { SwiperContainer, SwiperSlide } from 'swiper/element';
  import type { GameSelect } from '../../schemas/gamesSchema';
  import { GameCardDetail } from '../GameCardDetail';
  import { onMount } from 'svelte';
  import { swiperOptions } from '.';
  import type Swiper from 'swiper';

  export let games: GameSelect[];

  let swiperEl: SwiperContainer;
  let isEnd: boolean = false;
  let isBeginning: boolean = false;

  onMount(() => {
    if (!swiperEl) return;
    Object.assign(swiperEl, swiperOptions);
    swiperEl.on = { slideChange: onSlideChange };
    swiperEl.initialize();
  });
  const onSlideChange = (s: Swiper) => {
    isEnd = s.isEnd;
    isBeginning = s.isBeginning;
  };
</script>

<div class="root" class:load={!swiperEl} class:isEnd>
  <swiper-container bind:this={swiperEl} init={false}>
    {#each games as game}
      <swiper-slide class="slide">
        <div class="slide-wrap">
          <GameCardDetail {game} />
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
</div>

<style lang="scss">
  .root {
    position: relative;
    transition: var(--trans-load);
    transition-property: opacity;
    &.load {
      opacity: 0;
    }
    @media (min-width: 768px) {
      &::after,
      &::before {
        content: '';
        pointer-events: none;
        z-index: 2;
        position: absolute;
        width: 10%;
        height: 100%;
        background-image: linear-gradient(90deg, rgb(var(--c-bg)), transparent);
        top: 0;
        transition-duration: opacity;
        transition: var(--trans-default);
      }
      &::before {
        left: -1px;
        opacity: 0;
      }
      &::after {
        right: -1px;
        transform: rotate(180deg);
      }
      &.isEnd {
        &::after {
          opacity: 0;
        }
        &::before {
          opacity: 1;
        }
      }
    }
  }
</style>
