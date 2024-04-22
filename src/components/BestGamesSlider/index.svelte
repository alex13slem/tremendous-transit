<script lang="ts">
  import type { SwiperContainer } from 'swiper/element';
  import { onMount } from 'svelte';
  import {
    EffectCube,
    EffectFade,
    Mousewheel,
    Pagination,
  } from 'swiper/modules';
  import type { SwiperOptions } from 'swiper/types';
  import ShadowDecor1024x500 from '../svg/ShadowDecor1024x500.svelte';
  import Info from './Info.svelte';

  onMount(() => {
    const swiperThumbParams: SwiperOptions = {
      modules: [Pagination, Mousewheel, EffectFade],
      effect: 'fade',
      mousewheel: true,
      autoplay: { delay: 10000 },
      speed: 700,
      pagination: {
        clickable: true,
        el: '.pagination',
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
      },
    };
    Object.assign(swiperThumb, swiperThumbParams);

    swiperThumb.initialize();

    const swiperContentParams: SwiperOptions = {
      modules: [EffectCube],
      effect: 'creative',
      creativeEffect: {
        prev: {
          opacity: 0,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      },
      speed: 700,
      enabled: false,
    };
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
      {#each bestGames as { data: { thumbnail, title } }}
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
        {#each bestGames as game}
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

  swiper-container {
    transition: var(--load-fade);
    transition-property: opacity;
  }
  swiper-container.load {
    opacity: 0;
  }

  .root {
    --clip-radius: 42px;
    position: relative;
    min-height: 505px;
    padding-block: 60px;
    display: flex;
    gap: 30px;
    & > * {
      flex: 1 1 100%;
    }
  }

  .bg-shadow {
    z-index: -1;
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      to right,
      rgb(var(--c-bg)) 0%,
      rgb(var(--c-bg)) 80px,
      transparent 100%
    );
    background-repeat: no-repeat;
  }
  .bg {
    z-index: -2;
    position: absolute;
    inset: 0;
    left: 90px;
    background-color: rgb(var(--c-card));

    border: var(--border-card);
    clip-path: polygon(
      100% 0,
      100% calc(100% - 48px),
      calc(100% - 48px) 100%,
      0 100%,
      0 0
    );

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: -10px;
      right: -10px;
      transform: rotate(45deg);
      background-color: rgb(var(--c-card-border));
    }
    &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: calc(48px * 1.4);
      bottom: -1px;
      right: calc(48px - 1px);
      transform-origin: bottom;
      transform: rotate(45deg);
      background-color: rgb(var(--c-card-border));
    }
  }
  .decor {
    position: absolute;
    bottom: 12px;
    right: 12px;
  }

  .left {
    flex: 1 0 630px;
    padding-top: 11px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    swiper-container {
      filter: drop-shadow(var(--box-shadow-hover));

      --clip-d-size: calc(var(--clip-radius) * 1.41);

      position: relative;

      :global(.shadow) {
        position: absolute;
        inset: 0;
        z-index: 2;
        height: 100%;
      }

      clip-path: polygon(
        var(--clip-radius) 0,
        100% 0,
        100% 100%,
        0 100%,
        0 var(--clip-radius)
      );
    }

    img {
      height: 306px;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .right {
    position: relative;
    padding-inline: 30px var(--clip-radius);

    swiper-slide {
      padding-right: calc(110px - var(--clip-radius));
    }
    &::after {
      z-index: 1;
      content: '';
      position: absolute;
      inset: 0;
      left: auto;
      right: calc(var(--clip-radius) - 2px);
      width: calc(110px - var(--clip-radius));
      background-image: linear-gradient(90deg, transparent, rgb(var(--c-card)));
    }
  }
</style>
