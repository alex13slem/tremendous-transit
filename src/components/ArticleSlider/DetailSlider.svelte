<script lang="ts">
  import type { SwiperContainer } from 'swiper/element';
  import type { Image } from '../../types/project';
  import { formatStrToId } from '../../utils/helpers';

  export let data: Image[];

  let swiperEl: SwiperContainer;
</script>

<swiper-container
  class="root"
  class:load={!swiperEl}
  bind:this={swiperEl}
  mousewheel
  thumbs-swiper="#preview-slider"
  hash-navigation-watch-state
  effect="fade"
>
  {#each data as { src, alt }}
    <swiper-slide class="slide" data-hash={formatStrToId(alt)}>
      <div class="slide-wrap" style="background-image: url({src});">
        <img {src} {alt} height="600" />
      </div>
    </swiper-slide>
  {/each}
</swiper-container>

<style lang="scss">
  @import './detail-slider.scss';
</style>
