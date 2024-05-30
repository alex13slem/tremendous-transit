<script lang="ts">
  import { useragent } from '@sveu/browser';
  import { isOpen } from './modals/DevServModal';
  import BtnFirm from './ui/BtnFirm.svelte';
  import { navigate } from 'astro:transitions/client';

  const { mobile } = useragent();
</script>

<div class="root">
  <BtnFirm
    on:click={() => {
      if ($mobile) navigate('/development/form');
      else $isOpen = true;
    }}>Создать новый мир</BtnFirm
  >
</div>

<style lang="scss">
  .root {
    display: flex;
    justify-content: center;
  }
</style>
