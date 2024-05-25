<script lang="ts">
  import type { Artist } from '../../../schemas/artistsSchema';
  import { ArtistCard } from '../../ArtistCard';

  import Modal from '../Modal.svelte';

  export let artist: Artist;
  export let isOpen: boolean;
</script>

<Modal bind:isOpen title="Участник команды">
  <ArtistCard {artist} />
</Modal>
