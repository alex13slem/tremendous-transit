<script lang="ts">
  import { cn } from '../../utils/helpers';
  import Icon from '@iconify/svelte';
  import { activeIdx } from '.';
  import { publishingSlides } from '../../store/publishing-slides';

  let currIdx: number;
  activeIdx.subscribe((idx) => {
    currIdx = idx;
  });
</script>

<nav class="nav">
  {#each $publishingSlides as { slug }, idx}
    <button class={cn('link', idx === currIdx && 'active')}>
      {#if slug === 'computer'}
        <Icon icon="bx:desktop" width="36" height="36" />
      {/if}
      {#if slug === 'game-consoles'}
        <Icon icon="bx:joystick" width="36" height="36" />
      {/if}
      {#if slug === 'mobile'}
        <Icon icon="bx:mobile-alt" width="36" height="36" />
      {/if}
    </button>
  {/each}
</nav>

<style lang="scss">
  .nav {
    grid-area: indicator-tabs;
    display: flex;
  }
  .link {
    flex: 1 1 auto;
    min-height: 40px;
    padding: 0;
    padding-bottom: 13px;
    cursor: default;

    display: flex;
    justify-content: center;

    font-size: 12px;
    font-weight: 700;
    color: rgb(var(--c-text), 30%);

    background-color: transparent;
    border: 0;
    border-bottom: 4px solid rgb(var(--c-text), 30%);

    transition: var(--trans-default);
    transition-property: color, font-size;
    &.active {
      font-size: 20px;
      font-weight: 600;
      color: rgb(var(--c-accent));

      border-color: rgb(var(--c-accent));
    }
  }
</style>
