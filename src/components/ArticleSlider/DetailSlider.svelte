<script lang="ts">
  import type { SwiperContainer } from 'swiper/element';
  import type { Image } from '../../types/project';
  import { formatStrToId } from '../../utils/helpers';
  import { useragent } from '@sveu/browser';
  const { mobile } = useragent();

  export let data: Image[];

  let swiperEl: SwiperContainer;
</script>

{#if !$mobile}
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
{/if}

<style lang="scss">
  .root {
    margin: -30px;
    margin-bottom: 0;
    background-color: rgb(var(--c-white), 10%);

    transition: var(--load-fade);
    transition-property: opacity;

    &.load {
      opacity: 0;
    }
  }

  .slide-wrap {
    width: 100%;
    height: 100%;
    box-shadow: var(--box-shadow-active);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .slide {
    aspect-ratio: 16 / 9;
    width: 100%;
    padding: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(var(--c-bg));

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      background-color: rgb(var(--c-bg), 0.5);

      backdrop-filter: blur(16px);
    }
  }
  @media (max-width: 1023.98px) {
    .root {
      display: none;
    }
  }
</style>
