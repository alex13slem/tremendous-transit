<script lang="ts">
  import { type SwiperContainer } from 'swiper/element/bundle';
  import type { Image } from '../../types/project';
  import { beforeUpdate, onMount } from 'svelte';

  export let data: Image[];

  let swiperEl: SwiperContainer;

  let isEnd: boolean;
  let isBeginning: boolean;

  const onProgress = (e: any) => {
    const [swiper, progress] = e.detail;
    isEnd = swiper.isEnd;
    isBeginning = swiper.isBeginning;
  };
  // onMount(() => {
  //   swiperEl.breakpoints = {
  //     1024: {
  //       slidesPerView: 3.33,
  //     },
  //   };
  // });
</script>

<div class="root" class:isEnd class:isBeginning class:load={!swiperEl}>
  <swiper-container
    id="preview-slider"
    bind:this={swiperEl}
    mousewheel
    slides-per-view="auto"
    watch-slides-progress
    space-between={-16}
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

<style lang="scss">
  @import './preview-slider.scss';
</style>
