<script lang="ts">
  import Modal from './Modal.svelte';
  import type { GameSelect } from '../../schemas/gamesSchema';
  import QRCode from '@castlenine/svelte-qrcode';
  import { getAndroidLink, getIOSLink } from '../../utils/helpers';

  export let game: GameSelect;
  export let isOpen: boolean = false;

  const qrSize = 278;
</script>

<Modal bind:isOpen title="Играть сейчас">
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
    margin-inline: auto;
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
