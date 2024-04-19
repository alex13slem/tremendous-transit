<script lang="ts">
  import Cards from './Cards.svelte';
  import IndicatorTabs from './IndicatorTabs.svelte';
  import PreviewText from './PreviewText.svelte';
</script>

<div class="body">
  <!-- <List client:load /> -->
  <IndicatorTabs />
  <PreviewText />
  <Cards />
</div>

<style lang="scss">
  .body {
    display: grid;
    align-items: start;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'indicator-tabs cards'
      'preview-text cards';
    grid-template-columns: var(--left-panel-w) 1fr;
    gap: 30px 20px;
    @media (max-width: 767.98px) {
      grid-template-areas:
        'indicator-tabs '
        'cards'
        'preview-text';
      grid-template-columns: 1fr;
    }
  }
  /* .body {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  } */
</style>
