<script lang="ts">
  import { cn } from '../../utils/helpers';
  import Icon from '@iconify/svelte';
  import { publishingSlides } from '../../store/publishing-slides';
  import { activeIdx } from '.';
</script>

<nav class="nav">
  {#each publishingSlides as { slug }, idx}
    <button
      class={cn('link', idx === $activeIdx && 'active')}
      on:click={() => ($activeIdx = idx)}
    >
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
    position: relative;
    grid-area: indicator-tabs;
    display: flex;
  }
  .link {
    flex: 1 1 auto;
    min-height: 40px;
    padding: 0;
    padding-bottom: 13px;
    cursor: pointer;

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
