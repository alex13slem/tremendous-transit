<script lang="ts">
  import { type SwiperContainer } from 'swiper/element/bundle';
  import type { Image } from '../../types/project';
  import type { Swiper, SwiperEvents } from 'swiper/types';

  export let data: Image[];

  let swiperEl: SwiperContainer;

  let isEnd: boolean;

  const onSlideChange: SwiperEvents['slideChange'] = (e: any) => {
    console.log(e);

    const s = e.detail[0] as Swiper;
    isEnd = s.isEnd;
  };
</script>

<div class="root" class:isEnd class:load={!swiperEl}>
  <swiper-container
    id="preview-slider"
    bind:this={swiperEl}
    watch-slides-progress
    mousewheel
    slides-per-view="auto"
    on:swiperprogress={onSlideChange}
  >
    {#each data as { src, alt }}
      <swiper-slide class="slide">
        <button><img {src} {alt} /></button>
      </swiper-slide>
    {/each}
  </swiper-container>
</div>

<style lang="scss">
  @import './preview-slider.scss';
</style>
