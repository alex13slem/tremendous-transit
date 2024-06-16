<script lang="ts">
  import { fly } from 'svelte/transition';
  import { toastStore } from '../store/toaster';
  import { onDestroy, onMount } from 'svelte';

  export let id: number;
  export let message: string;

  let timeout: NodeJS.Timeout;

  function removeToast() {
    toastStore.removeToast(id);
  }

  onMount(() => {
    timeout = setTimeout(removeToast, 3000);
  });

  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>

<button
  transition:fly|global={{ x: '-100%', duration: 700 }}
  class="toast"
  on:click={removeToast}
>
  {message}
</button>

<style lang="scss">
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
