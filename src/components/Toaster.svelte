<script lang="ts">
  import Portal from './Portal.svelte';
  import { toastStore } from '../store/toaster';
  import Toast from './Toast.svelte';
</script>

{#if $toastStore.length}
  <Portal>
    <div class="toaster-hub">
      {#each $toastStore as toast (toast.id)}
        <Toast {...toast} />
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
</style>
