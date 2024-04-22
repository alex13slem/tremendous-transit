<script lang="ts">
  import type { CollectionEntry } from 'astro:content';
  import { getAndroidLink, getIOSLink, getRandom } from '../utils/helpers';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  // import { topGames } from "../store/games";
  import ModalTrigger from '../components/modals/ModalTrigger.svelte';
  import Portal from '../components/Portal.svelte';
  import BtnFirm from '../components/ui/BtnFirm.svelte';
  import type { Game } from '../schemas/gamesSchema';
  import { favoriteGames } from '../store/games';
  import { GamesQrModal } from '../components/modals/GamesQrModal';
  import { useragent } from '@sveu/browser';

  let game: Game;
  let steamLink: string | undefined;
  let iosLink: string | undefined;
  let googleLink: string | undefined;
  let huaweiLink: string | undefined;
  let rustoreLink: string | undefined;
  const { platform, mobile } = useragent();

  onMount(() => {
    game = getRandom(favoriteGames);

    steamLink = game.platforms?.find(
      ({ marketplace }) => marketplace === 'steam'
    )?.href;

    const iosAppId = game.platforms?.find(
      ({ marketplace }) => marketplace === 'apple'
    )?.appId;

    const googleAppId = game.platforms?.find(
      ({ marketplace }) => marketplace === 'google'
    )?.appId;

    const huaweiAppId = game.platforms?.find(
      ({ marketplace }) => marketplace === 'huawei'
    )?.appId;

    const rustoreAppId = game.platforms?.find(
      ({ marketplace }) => marketplace === 'ru-store'
    )?.appId;

    iosAppId && (iosLink = getIOSLink(iosAppId));
    googleAppId && (googleLink = getAndroidLink(googleAppId));
    huaweiAppId && (huaweiLink = getAndroidLink(huaweiAppId));
    rustoreAppId && (rustoreLink = getAndroidLink(rustoreAppId));
  });
</script>

<div class="games-hero">
  {#if game}
    <img
      transition:fade={{ duration: 300 }}
      src={game.heroImage.src}
      style="background-image: {game.heroImage.srcPlaceholder};"
      alt={game.title}
    />

    {#if $mobile}
      {#if $platform === 'ios' && iosLink}
        <a href={iosLink} target="_blank">
          <BtnFirm>Играть сейчас</BtnFirm>
        </a>
      {:else if $platform === 'android' && (googleLink || huaweiLink || rustoreLink)}
        <a href={googleLink || huaweiLink || rustoreLink} target="_blank">
          <BtnFirm>Играть сейчас</BtnFirm>
        </a>
      {:else if game.isBrowser && game.browserLink}
        <a href={game.browserLink} target="_blank">
          <BtnFirm>Играть сейчас</BtnFirm>
        </a>
      {/if}
    {/if}

    {#if !$mobile}
      {#if game.isMobile}
        <ModalTrigger type={'qrGame'} slug={game.slug}
          >Играть сейчас</ModalTrigger
        >
        <GamesQrModal />
      {:else if game.isBrowser && (game.browserLink || steamLink)}
        <a href={game.browserLink || steamLink} target="_blank">
          <BtnFirm>Играть сейчас</BtnFirm>
        </a>
      {/if}
    {/if}
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
