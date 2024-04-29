<script lang="ts">
  import { companySocials as socials } from '../store/socials';
  import SocialCard from './SocialCard.svelte';
  import type { SwiperContainer } from 'swiper/element';

  let swiper: SwiperContainer;
</script>

<swiper-container
  class="slider"
  class:load={!swiper}
  bind:this={swiper}
  mousewheel
  slides-per-view="auto"
  space-between="20"
>
  {#each socials as s}
    {#if s.href}
      <swiper-slide class="slide">
        <div class="slide__wrap">
          <SocialCard data={s} />
        </div>
      </swiper-slide>
    {/if}
  {/each}
</swiper-container>

<style lang="scss">
  .slide {
    width: 210px;

    @media (max-width: 1023.98px) {
      translate: 20px 0;
    }
  }
</style>
