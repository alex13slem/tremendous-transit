<script lang="ts">
  import { navigate, type Options } from 'astro:transitions/client';
  import ArrowDetail from '../svg/ArrowDetail.svelte';

  export let replace: true | null = null;
  export let toBack: true | null = null;
  export let toForward: true | null = null;
  export let to: string | null = null;
  export let text = 'Узнать больше';

  function handleClick() {
    let options: Options = {};
    replace && (options = { history: 'replace' });
    if (to) {
      navigate(to, options);
    } else if (toBack) {
      history.back();
    } else if (toForward) {
      history.forward();
    }
  }
</script>

<button on:click={handleClick} class:toBack class="link-to-detail-page">
  <span class="text">{text}</span>
  <span class="arrow" />
  <span class="small-arrow">
    <ArrowDetail />
  </span>
</button>

<style lang="scss">
  button {
    padding-inline: 2px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
    @media (hover: hover) {
      &:hover {
        .arrow {
          width: 30px;
        }
      }
    }
  }

  .arrow {
    position: relative;
    display: block;
    height: 1px;
    width: 19px;
    background-color: rgb(var(--c-accent));
    transition: var(--trans-default);
    transition-property: width;

    .toBack & {
      order: -1;
      &::after {
        transform: rotate(180deg);
        inset: auto;
        top: -6px;
        left: -4px;
      }
      &::before {
        inset: auto;
        right: -2px;
        top: -1px;
      }
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
    }
    &::before {
      width: 3px;
      height: 3px;
      left: -2px;
      top: -1px;
      background-color: rgb(var(--c-accent));
      transform: rotate(45deg);
    }
    &::after {
      content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="9" height="9" viewBox="0 0 20 20"%3E%3Cg fill="%23ef811b"%3E%3Cpath d="M11.732 9.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28z"%2F%3E%3Cpath d="M6.732 4.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
      top: -9px;
      right: -4px;
    }

    &:active {
      width: 30px;
    }
  }

  .small-arrow {
    .toBack & {
      rotate: 180deg;
    }
  }
  @media (min-width: 992px) {
    .small-arrow {
      display: none;
    }
  }
  @media (max-width: 991.98px) {
    .arrow {
      display: none;
    }
    .text {
      display: none;
    }
  }
</style>
