<script lang="ts">
  import type { SwiperContainer } from 'swiper/element';
  import type { GamePlatform } from '../schemas/gamesSchema';
  import MarketplaceButton from './MarketplaceButton.svelte';

  export let platforms: GamePlatform[];
  export let num: number = Infinity;

  const platformsWithLinks = platforms.filter((platform) => !!platform.href);

  let swiperEl: SwiperContainer;
  let isEnd: boolean = false;
  let isBeginning: boolean = false;
  let isScrollable: boolean = platformsWithLinks.length > num;

  const onProgress = (e: any) => {
    const [swiper] = e.detail;
    if (isScrollable) {
      isEnd = swiper.isEnd;
      isBeginning = swiper.isBeginning;
    }
  };
</script>

<swiper-container
  class:isBeginning
  class:isEnd
  class:isScrollable
  style="--num: {num}"
  bind:this={swiperEl}
  on:swiperprogress={onProgress}
  mousewheel
  slides-per-view="auto"
  nested
>
  {#each platformsWithLinks as link}
    <swiper-slide>
      <MarketplaceButton {...link} />
    </swiper-slide>
  {/each}
</swiper-container>

<style lang="scss">
  swiper-container {
    display: flex;
    max-width: calc(30px * var(--num) + 10px * (var(--num) - 1));
    position: relative;

    &.isScrollable {
      &:hover {
        &::after,
        &::before {
          opacity: 0;
        }
      }
      &::after,
      &::before {
        content: '';
        pointer-events: none;
        z-index: 2;
        position: absolute;
        width: 20px;
        height: 100%;
        background-image: linear-gradient(
          90deg,
          rgb(var(--c-card)),
          transparent
        );
        top: 0;
        transition-duration: opacity;
        transition: var(--trans-default);
      }
      &::before {
        left: -1px;
      }
      &::after {
        right: -1px;
        transform: rotate(180deg);
      }
      &.isEnd {
        &::after {
          display: none;
        }
      }
      &.isBeginning {
        &::before {
          display: none;
        }
      }
    }
  }
  swiper-slide {
    width: fit-content;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
</style>
