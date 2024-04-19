<script lang="ts">
  import SVGSiteLogo from '../../components/svg/SVGSiteLogo.svelte';
  import { isOpen } from '../../store/site-menu';
</script>

<a href="/" class="site-logo" on:click={() => ($isOpen = false)}
  ><SVGSiteLogo /></a
>

<style>
  .site-logo {
    display: flex;
    align-items: center;
    color: rgb(var(--c-white));
    transition: filter var(--trans-default);
  }
  .site-logo :global(.SVGSiteLogo) {
    height: clamp(2rem, 1.105rem + 3.82vw, 2.938rem);
    width: auto;
  }
</style>
