<script lang="ts">
  import { shiftIdx, infSlides, moveSlide, wheel } from '.';
  import { swipe } from '../../utils/svelte/swipe';
  import Card from './Card.svelte';
  import { urlQuery } from '@sveu/browser';
  const query = urlQuery('history');

  let clientHeight: number;
</script>

<div
  class="cards"
  style="--shift-idx: {$shiftIdx}; height: {clientHeight +
    (clientHeight / 100) * 7}px"
  use:wheel={{ speed: 700 }}
  use:swipe={{
    onSwipeLeft: () => {
      moveSlide('left');
    },
    onSwipeRight: () => {
      moveSlide('right');
    },
  }}
>
  {#each $infSlides as data, idx (data.infIdx)}
    <Card {data} {idx} bind:clientHeight />
  {/each}
</div>

<style lang="scss">
  .cards {
    --gap: clamp(1.75rem, -2.846rem + 7.18vw, 3.438rem);
    grid-area: cards;
    position: relative;
    container: inline-size;
    overflow-x: clip;

    width: 100%;

    &::after,
    &::before {
      content: '';
      pointer-events: none;

      background-color: transparent;
      padding: 0;
      border: none;

      z-index: 3;
      position: absolute;
      inset: 0;
      width: calc(33.3% - 20px);
      background: linear-gradient(90deg, rgb(var(--c-bg)), transparent);
    }
    &::after {
      left: auto;
      transform: rotate(180deg);
    }
  }
</style>
