<script lang="ts">
  import type { SwiperContainer } from 'swiper/element';
  import { onMount } from 'svelte';
  import ShadowDecor1024x500 from '../svg/ShadowDecor1024x500.svelte';
  import Info from './Info.svelte';
  import { swiperContentParams, swiperThumbParams } from '.';
  import type { GameSelect } from '../../schemas/gamesSchema';

  export let games: GameSelect[];

  onMount(() => {
    Object.assign(swiperThumb, swiperThumbParams);
    swiperThumb.initialize();
    Object.assign(swiperContent, swiperContentParams);
    swiperContent.initialize();
    Object.assign(swiperThumb, {
      controller: { control: swiperContent.swiper },
    });
  });

  let swiperThumb: SwiperContainer;
  let swiperContent: SwiperContainer;
</script>

<div class="root">
  <svg
    class="decor"
    xmlns="http://www.w3.org/2000/svg"
    width="675"
    height="273"
    viewBox="0 0 675 273"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M669 273L675 273L675 267L672.5 267L672.5 -2.18556e-07L671.5 -3.05979e-07L671.5 267L669 267L669 269.5L3.05927e-07 269.501L2.18504e-07 270.501L669 270.5L669 273Z"
      fill="url(#paint0_linear_2092_3153)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2092_3153"
        x1="675"
        y1="273"
        x2="551.125"
        y2="42.0359"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3A4F7D" />
        <stop offset="1" stop-color="#3A4F7D" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
  <div class="bg" />
  <div class="bg-shadow" />
  <div class="left">
    <swiper-container bind:this={swiperThumb} init={false} class="swiper-thumb">
      <ShadowDecor1024x500 class="shadow" />
      {#each games as { thumbnail, title }}
        <swiper-slide>
          <img src={thumbnail} alt={title} loading="lazy" height="297" />
        </swiper-slide>
      {/each}
    </swiper-container>
    <div class="pagination" />
  </div>
  <div class="right">
    <swiper-container
      bind:this={swiperContent}
      init={false}
      class:load={!swiperContent}
      class="swiper-content"
    >
      {#if swiperContent}
        {#each games as game}
          <swiper-slide>
            <Info {game} />
          </swiper-slide>
        {/each}
      {/if}
    </swiper-container>
  </div>
</div>

<style lang="scss">
  @import '../../styles/mixins';
  @include pagination;
  @import './index.scss';
</style>
