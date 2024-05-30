<script lang="ts">
  import Modal from '../Modal.svelte';
  import { ServicesForm } from '../../forms/ServicesForm';
  import { isOpen } from '.';
</script>

<Modal
  bind:isOpen={$isOpen}
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
