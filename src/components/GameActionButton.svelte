<script lang="ts">
  import BtnFirm from '../components/ui/BtnFirm.svelte';
  import type { GameSelect } from '../schemas/gamesSchema';
  import GamesQrModal from '../components/modals/GamesQrModal.svelte';
  import { useragent } from '@sveu/browser';
  import { onMount } from 'svelte';
  import { getAndroidLink, getIOSLink } from '../utils/helpers';
  const { platform, mobile } = useragent();

  export let game: GameSelect;

  let modalIsOpen = false;

  let steamLink: string | undefined;
  let iosLink: string | undefined;
  let googleLink: string | undefined;
  let huaweiLink: string | undefined;
  let rustoreLink: string | undefined;

  onMount(() => {
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

{#if $mobile}
  {#if $platform.toLowerCase() === 'ios' && iosLink}
    <a href={iosLink} target="_blank">
      <BtnFirm>Играть сейчас</BtnFirm>
    </a>
  {:else if $platform.toLowerCase() === 'android' && (googleLink || huaweiLink || rustoreLink)}
    <a href={googleLink || huaweiLink || rustoreLink} target="_blank">
      <BtnFirm>Играть сейчас</BtnFirm>
    </a>
  {:else if game.type === 'isBrowser' && game.browserLink}
    <a href={game.browserLink} target="_blank">
      <BtnFirm>Играть сейчас</BtnFirm>
    </a>
  {/if}
{/if}

{#if !$mobile}
  {#if game.type === 'isMobile'}
    <BtnFirm on:click={() => (modalIsOpen = true)}>Играть сейчас</BtnFirm>
    <GamesQrModal bind:isOpen={modalIsOpen} {game} />
  {:else if (game.type === 'isBrowser' && game.browserLink) || steamLink}
    <a href={game.browserLink || steamLink} target="_blank">
      <BtnFirm>Играть сейчас</BtnFirm>
    </a>
  {/if}
{/if}

<style lang="scss">
  a {
    display: contents;
  }
</style>
