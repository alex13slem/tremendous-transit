<script lang="ts">
  import { PublishingForm } from '../../forms/PublishingForm';
  import Modal from '../Modal.svelte';
  import { isOpen } from '.';
  export let targetSlug: string | null = null;
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
  <PublishingForm {targetSlug} />
</Modal>
