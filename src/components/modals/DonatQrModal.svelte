<script lang="ts">
  import Modal from '../../components/modals/Modal.svelte';
  import QRCode from '@castlenine/svelte-qrcode';
  import Icon from '@iconify/svelte';
  import type { GameDevCrowdfundingPlatformSelect } from '../../schemas/gameDevStagesSchema';

  export let crowdfundingPlatforms: GameDevCrowdfundingPlatformSelect[];
  export let isOpen: boolean = false;
</script>

<Modal bind:isOpen title="Поддержи проект">
  <div class="qr-block">
    {#each crowdfundingPlatforms as platform}
      <div class="platform">
        <QRCode
          content={platform.href}
          backgroundColor="#fff"
          color="#1c1d2b"
          padding={0}
          size={278}
        />
        <p>
          <a href={platform.href} class="link">
            <Icon icon={platform.iconifyId} class="icon" />
            {platform.title}
          </a>
        </p>
      </div>
    {/each}
  </div>
</Modal>

<style lang="scss">
  .qr-block {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-inline: auto;
  }
  .platform {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-transform: uppercase;
    font-size: 20px;
  }

  .link {
    display: flex;
    gap: 10px;
    :global(.icon) {
      height: 1.5em;
      width: 1.5em;
    }
  }
</style>
