<script lang="ts">
  // import type { CollectionEntry } from "astro:content";
  import Modal from '../../components/modals/Modal.svelte';
  import QRCode from '@castlenine/svelte-qrcode';
  import { qrDonatModalIsOpen } from '../../store/modals';
  import Icon from '@iconify/svelte';

  // export let game: CollectionEntry<"games">;
  // const { platforms } = game.data;
</script>

<Modal bind:isOpen={$qrDonatModalIsOpen} title="Поддержи проект">
  <div class="qr-block">
    <div class="platform">
      <QRCode
        content="https://boosty.to/alex13slem/donate"
        backgroundColor="#fff"
        color="#1c1d2b"
        padding={0}
        size={250}
      />
      <p>
        <a href="https://boosty.to/alex13slem/donate" class="link">
          <Icon icon="simple-icons:boosty" class="icon" /> Boosty
        </a>
      </p>
    </div>
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
    gap: 10px;
    :global(.icon) {
      height: 1.5em;
      width: 1.5em;
    }
  }
</style>
