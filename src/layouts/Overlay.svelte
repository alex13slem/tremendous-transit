<script lang="ts">
  import { blur } from 'svelte/transition';

  export let onClose: (() => any) | undefined = undefined;
</script>

<div class="root" transition:blur={{ duration: 300 }}>
  <div
    class="overlay"
    role="button"
    on:keydown={onClose}
    on:click={onClose}
    tabindex="0"
  />
  <slot />
</div>

<style lang="scss">
  .root {
    position: fixed;
    z-index: 3;
    overflow-y: auto;
    inset: 0;
    padding-top: var(--header-height);
    background: rgb(var(--c-bg), 50%);
    backdrop-filter: blur(13px);
    scrollbar-gutter: stable;
  }
  .overlay {
    z-index: -1;
    position: fixed;
    inset: 0;
    top: auto;
    height: calc(100svh - var(--header-height));
  }
</style>
