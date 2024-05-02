<script lang="ts">
  import type { SwiperContainer } from 'swiper/element';
  import type { Artist } from '../../schemas/artistsSchema';
  import ArtistCard from '../ArtistCard.svelte';
  import { onMount } from 'svelte';

  export let artists: Artist[];

  let swiperEl: SwiperContainer;

  onMount(() => {
    swiperEl.breakpoints = {
      1024: {
        centeredSlides: true,
      },
    };
  });
</script>

<div class="wrap">
  <swiper-container
    class="root"
    class:load={!swiperEl}
    bind:this={swiperEl}
    mousewheel
    slides-per-view="auto"
  >
    {#each artists as artist}
      <swiper-slide class="slide">
        <div class="slide-wrap">
          <ArtistCard {artist} />
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
</div>

<style lang="scss">
  .wrap {
    --offset: 30px;
    --gap: 10px;
    --w-slide: 210px;
    position: relative;
    z-index: 0;
    margin-inline: calc(-1 * var(--gap));
    margin-block: calc(-1 * var(--offset));
  }
  .slide-wrap {
    padding: calc(1 * var(--offset));
  }
  .slide {
    margin-inline: calc(-1 * calc(var(--offset) - var(--gap)));
    width: calc(var(--w-slide) + 2 * var(--offset));
  }
</style>
