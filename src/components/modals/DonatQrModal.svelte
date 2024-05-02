<script lang="ts">
  // import type { CollectionEntry } from "astro:content";
  import Modal from '../../components/modals/Modal.svelte';
  import QRCode from '@castlenine/svelte-qrcode';
  import { qrDonatModalIsOpen } from '../../store/modals';
  import Icon from '@iconify/svelte';
  import type { CrowdfundingPlatformsSelect } from '../../schemas/crowdfundingPlatformsSchema';
  import IndiegogoLogo from '../svg/indiegogo-logo.svelte';
  import PlanetaRuLogo from '../svg/planeta-ru-logo.svelte';

  export let crowdfundingPlatforms: CrowdfundingPlatformsSelect[];
</script>

<Modal bind:isOpen={$qrDonatModalIsOpen} title="Поддержи проект">
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
            {#if platform.slug === 'planeta-ru'}
              <PlanetaRuLogo />
            {:else if platform.iconifyId}
              <Icon icon={platform.iconifyId} class="icon" />
            {:else if platform.image}
              <img src={platform.image} alt={platform.title} />
            {/if}
            {#if platform.slug !== 'planeta-ru'}
              {platform.title}
            {/if}
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
    align-items: center;

    gap: 10px;
    :global(.icon) {
      height: 1.5em;
      width: 1.5em;
    }
  }
</style>
