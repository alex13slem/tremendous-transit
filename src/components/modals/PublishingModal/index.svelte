<script lang="ts">
  import { PublishingForm } from '../../forms/PublishingForm';
  import Modal from '../Modal.svelte';
  import { isOpen } from '.';
</script>

<Modal bind:isOpen={$isOpen} title="ПОДАТЬ ЗАЯВКУ НА ИЗДАТЕЛЬСТВО" wLinks>
  <PublishingForm />
</Modal>
