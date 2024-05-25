<script lang="ts">
  import Modal from '../Modal.svelte';
  import { isOpen } from '.';
  import { ServicesForm } from '../../forms/ServicesForm';

  export let targetSlug: string | null = null;
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
  <ServicesForm {targetSlug} />
</Modal>
