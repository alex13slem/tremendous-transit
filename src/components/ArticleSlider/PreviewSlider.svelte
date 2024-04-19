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

{#if !$mobile}
  <div class="root" class:isEnd class:isBeginning class:load={!swiperEl}>
    <swiper-container
      id="preview-slider"
      bind:this={swiperEl}
      mousewheel
      slides-per-view="3.33"
      watch-slides-progress
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
    &::after,
    &::before {
      pointer-events: none;
      content: '';
      position: absolute;
      z-index: 2;
      inset: -1px;
      width: 15%;
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
    &.load {
      opacity: 0;
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
    &:hover button,
    &:global(.swiper-slide-thumb-active button) {
      filter: brightness(1);
      border-image: linear-gradient(
          160deg,
          rgba(255, 255, 255, 60%) 0%,
          rgba(255, 255, 255, 0) 60%
        )
        30;
      &::after {
        opacity: 1;
      }
    }

    button {
      padding: 0;
      border: none;
      background: transparent;
      aspect-ratio: 16 / 9;

      // height: 170px;
      width: 100%;

      border-image: linear-gradient(
          160deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 90%
        )
        30;
      border-width: 1px;
      border-style: solid;

      filter: brightness(0.5);

      transition: var(--trans-default);
      transition-property: box-shadow, border-image, filter;

      &::after {
        pointer-events: none;
        position: absolute;
        content: '';
        inset: 0px;
        opacity: 0;

        background: linear-gradient(
          149deg,
          rgba(255, 255, 255, 0.3) 0%,
          rgba(255, 255, 255, 0) 36.93%
        );
        transition: opacity var(--trans-default);
      }
    }

    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
  @media (max-width: 1023.98px) {
    .root {
      display: none;
    }
  }
</style>
