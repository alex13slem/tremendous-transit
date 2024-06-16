<script lang="ts">
  import Modal from '../Modal.svelte';
  import { ServicesForm } from '../../forms/ServicesForm';
  import { isOpen } from '.';
</script>

<Modal bind:isOpen={$isOpen} title="СВЯЗЬ С НАМИ" wLinks>
  <ServicesForm />
</Modal>
