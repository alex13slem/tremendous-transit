<script lang="ts">
  import { isOpen } from './modals/DevServModal';
  import BtnFirm from './ui/BtnFirm.svelte';
</script>

<div class="root">
  <BtnFirm on:click={() => ($isOpen = true)}>Создать новый мир</BtnFirm>
</div>

<style lang="scss">
  .root {
    display: flex;
    justify-content: center;
  }
</style>
