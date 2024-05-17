<script lang="ts">
  import Card from './Card.svelte';
  import { publishingSlides } from '../../store/publishing-slides';
  import { activeIdx } from '.';
  import { swipe } from '../../utils/svelte/swipe';
</script>

<div class="root">
  <div
    class="slider"
    style="--activeIdx: {$activeIdx}"
    use:swipe={{
      onSwipeLeft() {
        $activeIdx = Math.min($publishingSlides.length - 1, $activeIdx + 1);
      },
      onSwipeRight() {
        $activeIdx = Math.max(0, $activeIdx - 1);
      },
    }}
  >
    {#each $publishingSlides as data, idx (data.slug)}
      <Card {data} {idx} />
    {/each}
  </div>
</div>

<style lang="scss">
  .root {
    grid-area: cards;
    position: relative;
  }
  .slider {
    --gap: clamp(1.75rem, -2.846rem + 7.18vw, 3.438rem);
    position: relative;

    display: flex;
    gap: 50px;

    width: 100%;
  }
  @media (max-width: 1289.98px) {
    .root {
      height: 420px;
      overflow: clip;
      overflow-clip-margin: 20px;

      &::after,
      &::before {
        content: '';
        pointer-events: none;

        background-color: transparent;
        padding: 0;
        border: none;

        z-index: 3;
        position: absolute;
        inset: 0 -20px;
        width: 20px;
        background: linear-gradient(90deg, rgb(var(--c-bg)), transparent);
      }
      &::after {
        left: auto;
        transform: rotate(180deg);
      }
    }

    .slider {
      position: absolute;
      width: 250%;

      translate: calc(var(--activeIdx) * -1 * 30%);
      transition: var(--trans-slow);
      transition-property: translate;
    }
  }
  @media (max-width: 767.98px) {
    .root {
      height: 350px;
    }
  }
</style>
