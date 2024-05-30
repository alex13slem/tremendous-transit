<script lang="ts">
  import { PublishingForm } from '../../forms/PublishingForm';
  import Modal from '../Modal.svelte';
  import { isOpen } from '.';
</script>

<Modal
  bind:isOpen={$isOpen}
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
