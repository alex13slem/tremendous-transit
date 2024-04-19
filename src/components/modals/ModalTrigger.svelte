<script lang="ts">
  import BtnFirm from '../ui/BtnFirm.svelte';
  import {
    artistModal,
    pubModalIsOpen,
    qrDonatModalIsOpen,
    qrGamesModalIsOpen,
    servModalIsOpen,
  } from '../../store/modals';
  import { pubTargetSlug, servTargetSlug } from '../../store/forms';
  // import { gameQrTargetId } from '../../store/games';
  import { useragent } from '@sveu/browser';
  import { navigate } from 'astro:transitions/client';

  /**
   * @type {"services" | "publishing" | "qrGame" | "qrDonat" | "artist"} type
   */
  export let type: string | null = null;
  export let slug: string | null = null;
  export let id: string | null = null;
  export let variant: 'firm' | 'transparent' | 'contrast' = 'firm';
  export let flexPosition: 'start' | 'end' | 'center' | null = null;
  export let className = '';

  const { mobile } = useragent();

  function handleClick() {
    if (type === 'development') {
      if ($mobile) {
        return navigate(`/development/form`);
      }
      servModalIsOpen.set(true);
      servTargetSlug.set(slug);
    }
    if (type === 'publishing') {
      pubModalIsOpen.set(true);
      pubTargetSlug.set(slug);
    }
    // if (type === 'qrGame') {
    //   if (!id) return;
    //   qrGamesModalIsOpen.set(true);
    //   gameQrTargetId.set(id);
    // }
    if (type === 'qrDonat') {
      qrDonatModalIsOpen.set(true);
    }
    if (type === 'artist') {
      artistModal.set({ isOpen: true, id });
    }
  }
</script>

<BtnFirm {variant} {flexPosition} {className} on:click={handleClick}
  ><slot /></BtnFirm
>
