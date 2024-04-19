<script lang="ts">
  import { socials } from '../store/socials';
  import SocialCard from './SocialCard.svelte';
  import type { SwiperContainer } from 'swiper/element';

  let swiper: SwiperContainer;
</script>

<div class="body">
  <swiper-container
    class="slider"
    class:load={!swiper}
    bind:this={swiper}
    mousewheel
    slides-per-view="auto"
    space-between="20"
  >
    {#each socials as link}
      {#if link.data.link}
        <swiper-slide class="slide">
          <div class="slide__wrap">
            <SocialCard data={link} id={link.id} />
          </div>
        </swiper-slide>
      {/if}
    {/each}
  </swiper-container>
</div>

<style lang="scss">
  .slide {
    width: 210px;

    @media (max-width: 1023.98px) {
      translate: 20px 0;
    }
  }
</style>
