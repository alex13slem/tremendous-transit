<script lang="ts">
  import Modal from '../Modal.svelte';
  import type { Game, GameSelect } from '../../../schemas/gamesSchema';
  import QRCode from '@castlenine/svelte-qrcode';
  import { targetSlug, isOpen } from '.';
  import { beforeUpdate, onMount } from 'svelte';
  import { gamesWithRelations } from '../../../store/games';
  import { getAndroidLink, getIOSLink } from '../../../utils/helpers';

  let game: GameSelect | undefined;
  beforeUpdate(() => {
    game = gamesWithRelations.find(({ slug }) => slug === $targetSlug);
  });

  $: game?.platforms?.forEach((platform) => {});

  const qrSize = 278;
</script>

<Modal bind:isOpen={$isOpen} title="Играть сейчас">
  <div class="qr-block">
    {#if game?.platforms}
      {#each game.platforms as { title, marketplace, appId }}
        {#if appId}
          {#if marketplace === 'google' || marketplace === 'app_gallery' || marketplace === 'ru_store'}
            <div class="platform">
              <QRCode
                content={getAndroidLink(appId)}
                backgroundColor="#fff"
                color="#1c1d2b"
                padding={0}
                size={qrSize}
              />
              <p>{title}</p>
            </div>
          {/if}
          {#if marketplace === 'apple'}
            <div class="platform">
              <QRCode
                content={getIOSLink(appId)}
                backgroundColor="#fff"
                color="#1c1d2b"
                padding={0}
                size={qrSize}
              />
              <p>{title}</p>
            </div>
          {/if}
        {/if}
      {/each}
    {/if}
  </div>
</Modal>

<style lang="scss">
  .qr-block {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  .platform {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
    font-size: 20px;
  }
</style>
