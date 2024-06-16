<script lang="ts">
  import Icon from '@iconify/svelte';
  import { siteMenuStore } from '../../store/site-menu';
  const isOpen = siteMenuStore;
  const { toggle } = siteMenuStore;
</script>

<button class:open={$isOpen} on:click={toggle}>
  {#if $isOpen}
    <Icon icon="line-md:menu-to-close-alt-transition" />
  {:else}
    <Icon icon="line-md:close-to-menu-alt-transition" />
  {/if}
</button>

<style lang="scss">
  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    button {
      display: none;
    }
  }
</style>
