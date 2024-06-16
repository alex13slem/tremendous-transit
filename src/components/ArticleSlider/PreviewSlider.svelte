<script lang="ts">
  import { type SwiperContainer } from 'swiper/element/bundle';
  import type { Image } from '../../types/project';
  import { formatStrToId } from '../../utils/helpers';

  export let data: Image[];
  export let staticHref: string | undefined = undefined;

  let swiperEl: SwiperContainer;

  let isEnd: boolean;
  let isBeginning: boolean;

  const onProgress = (e: any) => {
    const [swiper, progress] = e.detail;
    isEnd = swiper.isEnd;
    isBeginning = swiper.isBeginning;
  };
</script>

<div class="root" class:isEnd class:isBeginning class:load={!swiperEl}>
  <swiper-container
    id="preview-slider"
    bind:this={swiperEl}
    mousewheel={true}
    slides-per-view="auto"
    watch-slides-progress
    space-between={-20}
    on:swiperprogress={onProgress}
  >
    {#each data as { src, alt }}
      <swiper-slide class="slide">
        <div class="slide-wrap">
          <button>
            {#if staticHref}
              <a
                href={staticHref + '/#' + formatStrToId(alt)}
                data-astro-reload
              >
                <img {src} {alt} loading="lazy" />
              </a>
            {:else}
              <img {src} {alt} loading="lazy" />
            {/if}
          </button>
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
</div>

<style lang="scss">
  @import './preview-slider.scss';
</style>
