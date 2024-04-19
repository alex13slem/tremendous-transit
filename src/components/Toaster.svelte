<script lang="ts">
  import { fly } from 'svelte/transition';
  import Portal from './Portal.svelte';
  import { toasterHub } from '../store/toasterHub';
</script>

{#if $toasterHub.length}
  <Portal>
    <div class="toaster-hub">
      {#each $toasterHub as toast, i (toast + i)}
        <p class="toast" transition:fly|global={{ x: '-100%', duration: 700 }}>
          {toast}
        </p>
      {/each}
    </div>
  </Portal>
{/if}

<style lang="scss">
  .toaster-hub {
    z-index: 3;
    position: fixed;
    right: 0;
    top: 60px;
    left: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .toast {
    position: relative;
    overflow: hidden;
    overflow: clip;
    background: rgb(var(--c-white), 30%);
    line-height: 3em;
    padding-inline: 1em 2em;

    &::after,
    &::before {
      content: '';
      position: absolute;
      background: rgb(var(--c-accent));
      width: 2em;
      height: 2em;
      right: -1em;
    }
    &::before {
      top: -1em;
      transform: rotate(-45deg);
    }
    &::after {
      bottom: -1em;
      transform: rotate(45deg);
    }
  }
</style>
