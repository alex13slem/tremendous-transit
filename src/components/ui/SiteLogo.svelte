<script lang="ts">
  import SVGSiteLogo from '../../components/svg/SVGSiteLogo.svelte';
  import { siteMenuStore } from '../../store/site-menu';
  const { close: closeMenu } = siteMenuStore;
</script>

<a href="/" class="site-logo" on:click={closeMenu}><SVGSiteLogo /></a>

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
