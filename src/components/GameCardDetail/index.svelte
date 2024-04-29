<script lang="ts">
  import CardBadge from '../ui/CardBadge.svelte';
  import type { GameSelect } from '../../schemas/gamesSchema';
  import GameActionButton from '../GameActionButton.svelte';
  import { parse } from 'marked';

  export let game: GameSelect;

  const { title, genre, thumbnail, status, favorites, slug, description } =
    game;
</script>

<article class="game-card-detail" {...$$restProps}>
  <a class="image" href="/games/{slug}">
    {#if status}
      <CardBadge type={status} />
    {/if}
    <img src={thumbnail} alt={title} width="336" height="163" />
    <div class="description">
      <div class="prose min">
        {@html parse(description)}
      </div>
    </div>
  </a>

  <div class="body">
    <h3>{title}</h3>

    <p class="tags">
      <span>{genre.join(' ')}</span>
      {#if favorites}
        <span>{favorites.join(' ')}</span>
      {/if}
    </p>
    <div class="btn">
      <GameActionButton {game} />
    </div>
  </div>
</article>

<style lang="scss">
  @import './index.scss';
</style>
