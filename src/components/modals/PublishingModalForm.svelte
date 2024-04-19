<script lang="ts">
  import { pubModalIsOpen } from '../../store/modals';
  import Modal from './Modal.svelte';
  import { PublishingForm } from '../forms/PublishingForm';
</script>

<Modal
  bind:isOpen={$pubModalIsOpen}
  title="ПОДАТЬ ЗАЯВКУ НА ИЗДАТЕЛЬСТВО"
  links={{
    contacts: [{ href: 'mailto:mail@to.aw', text: 'mail@to.aw' }],
    other: [
      { href: 'asd.as', text: 'Ссылка' },
      { href: 'asd.as', text: 'Ссылка' },
    ],
  }}
>
  <PublishingForm />
</Modal>
