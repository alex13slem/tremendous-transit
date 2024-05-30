<script lang="ts">
  import { getRandom } from '../utils/helpers';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import type { GameSelect } from '../schemas/gamesSchema';
  import { topGames } from '../store/games';
  import GameActionButton from '../components/GameActionButton.svelte';
  import { useragent } from '@sveu/browser';

  const { mobile } = useragent();

  export let game: GameSelect | undefined = undefined;

  onMount(() => {
    if (!game) game = getRandom(topGames);
  });
</script>

<div class="games-hero">
  {#if game}
    <!-- <img transition:fade={{ duration: 300 }} src={game.icon} alt={game.title} /> -->
    {#if $mobile}
      <img
        transition:fade={{ duration: 300 }}
        src={game.icon}
        alt={game.title}
      />
    {:else}
      <img
        transition:fade={{ duration: 300 }}
        src={game.heroImage.src}
        style="background-image: {game.heroImage.srcPlaceholder};"
        alt={game.title}
      />
    {/if}
    <GameActionButton {game} />
  {/if}
</div>

<style lang="scss">
  .games-hero {
    z-index: 0;
    height: 100svh;
    margin-top: -60px;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-block: 80px;

    @media (max-width: 1023.98px) {
      height: 100vmax;
    }

    &::after {
      z-index: -1;
      position: absolute;
      content: '';
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(28, 29, 43, 0) 50%,
        rgba(28, 29, 43, 0.31) 80%,
        #1c1d2b calc(100% - 20px),
        #1c1d2b 100%
      );
    }

    img {
      z-index: -1;
      position: absolute;
      inset: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
      object-position: center;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
</style>
