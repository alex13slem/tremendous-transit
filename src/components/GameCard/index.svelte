<script lang="ts">
  import CardBadge from '../ui/CardBadge.svelte';
  import BtnFirm from '../ui/BtnFirm.svelte';
  import PlatformsSlider from '../PlatformsSlider.svelte';
  import type { GameSelect } from '../../schemas/gamesSchema';

  export let game: GameSelect;

  const { title, genre, thumbnail, status, favorites, platforms, slug } = game;
</script>

<article class="game-card" {...$$restProps}>
  <a class="image" href="/games/{slug}">
    {#if status}
      <CardBadge type={status} />
    {/if}

    <img src={thumbnail} alt={title} width="336" height="163" />
    <BtnFirm variant="transparent" size="sm">ПОДРОБНЕЕ</BtnFirm>
  </a>

  <div class="body">
    <h3>{title}</h3>

    <p class="tags">
      {#if favorites}
        <span class="favorites">{favorites.join(' · ')}</span>
      {/if}
      <br />
      <span>{genre.join(' · ')}</span>
    </p>

    {#if platforms?.length}
      <PlatformsSlider {platforms} num={4} />
    {/if}
  </div>
</article>

<style lang="scss">
  @import './index.scss';
</style>
