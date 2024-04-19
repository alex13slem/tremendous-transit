<script lang="ts">
  import { type SwiperContainer } from 'swiper/element/bundle';
  import type { Image } from '../../types/project';
  import { useragent } from '@sveu/browser';
  const { mobile } = useragent();

  export let data: Image[];

  let swiperEl: SwiperContainer;

  let isEnd: boolean;
  let isBeginning: boolean;

  const onProgress = (e: any) => {
    const [swiper, progress] = e.detail;
    isEnd = swiper.isEnd;
    isBeginning = swiper.isBeginning;
  };
</script>

{#if $mobile}
  <div class="root" class:isEnd class:isBeginning class:load={!swiperEl}>
    <swiper-container
      bind:this={swiperEl}
      slides-per-view="1.2"
      on:swiperprogress={onProgress}
    >
      {#each data as { src, alt }}
        <swiper-slide class="slide">
          <div class="slide-wrap">
            <button><img {src} {alt} /></button>
          </div>
        </swiper-slide>
      {/each}
    </swiper-container>
  </div>
{/if}

<style lang="scss">
  .root {
    position: relative;
    margin: -15px;
    transition: var(--load-fade);
    transition-property: opacity;

    &.load {
      opacity: 0;
    }

    &::after,
    &::before {
      pointer-events: none;
      content: '';
      position: absolute;
      z-index: 2;
      inset: -1px;
      width: var(--container-offset);
      background: linear-gradient(90deg, transparent, rgb(var(--c-bg)));
    }
    &::after {
      left: auto;
    }
    &::before {
      right: auto;
      transform: rotate(180deg);
    }
    &:global(.isEnd) {
      &::after {
        opacity: 0;
      }
    }
    &:global(.isBeginning) {
      &::before {
        opacity: 0;
      }
    }
  }

  .slide-wrap {
    position: relative;

    padding: 16px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide {
    height: 100%;

    button {
      padding: 0;
      border: none;
      background: transparent;
      aspect-ratio: 16 / 9;

      width: 100%;
    }

    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
  @media (min-width: 1024px) {
    .root {
      display: none;
    }
  }
</style>
