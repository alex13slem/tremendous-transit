<script lang="ts">
  import BtnFirm from '../ui/BtnFirm.svelte';
  import {
    artistModal,
    pubModalIsOpen,
    qrDonatModalIsOpen,
    servModalIsOpen,
  } from '../../store/modals';
  import { pubTargetSlug, servTargetSlug } from '../../store/forms';
  // import { gameQrTargetId } from '../../store/games';
  import { useragent } from '@sveu/browser';
  import { navigate } from 'astro:transitions/client';
  import {
    isOpen as gamesIsOpen,
    targetSlug as gamesTargetSlug,
  } from './GamesQrModal';

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
        return navigate(`/${type}/form`);
      }
      servModalIsOpen.set(true);
      servTargetSlug.set(slug);
    }
    if (type === 'publishing') {
      if ($mobile) {
        return navigate(`/${type}/form`);
      }
      pubModalIsOpen.set(true);
      pubTargetSlug.set(slug);
    }
    if (type === 'qrGame') {
      if (!slug) return;
      gamesTargetSlug.set(slug);
      gamesIsOpen.set(true);
    }
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
