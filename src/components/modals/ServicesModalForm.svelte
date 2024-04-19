<script lang="ts">
  import { servModalIsOpen } from '../../store/modals';
  import Modal from './Modal.svelte';
  import { ServicesForm } from '../forms/ServicesForm';
</script>

<Modal
  bind:isOpen={$servModalIsOpen}
  title="СВЯЗЬ С НАМИ"
  links={{
    contacts: [{ href: 'mailto:mail@to.aw', text: 'mail@to.aw' }],
    other: [
      { href: 'asd.as', text: 'Ссылка' },
      { href: 'asd.as', text: 'Ссылка' },
    ],
  }}
>
  <ServicesForm />
</Modal>
