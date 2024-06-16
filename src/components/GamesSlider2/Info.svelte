<script lang="ts">
  import PlatformsSlider from '../PlatformsSlider.svelte';
  import { parse } from 'marked';
  import BtnFirm from '../ui/BtnFirm.svelte';
  import type { GameSelect } from '../../schemas/gamesSchema';
  import GameActionButton from '../GameActionButton.svelte';

  export let game: GameSelect;

  const { platforms, title, description, slug } = game;
</script>

<article>
  <h3><a href="/games/{slug}">{title}</a></h3>
  {#if platforms?.length}
    <PlatformsSlider {platforms} />
  {/if}
  <div class="prose">
    {@html parse(description)}
  </div>
  <div class="btns">
    <GameActionButton {game} />
    <a href="/games/{game.slug}">
      <BtnFirm variant="transparent">Подробнее</BtnFirm>
    </a>
  </div>
</article>

<style lang="scss">
  @import './info.scss';
</style>
