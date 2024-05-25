<script lang="ts">
  import { navigate } from 'astro:transitions/client';
  import type { Artist } from '../../schemas/artistsSchema';
  import { ArtistModal } from '../modals/ArtistModal';
  import { useragent } from '@sveu/browser';
  const { mobile } = useragent();
  export let artist: Artist;
  const { title, image } = artist;
  let isOpen = false;

  function handleClick() {
    if (!$mobile) {
      isOpen = true;
    } else {
      navigate('/artists/' + artist.slug);
    }
  }
</script>

<button on:click={handleClick}>
  <img src={image} alt={title} />
  <p>{title}</p>
</button>
<ArtistModal bind:isOpen {artist} />

<style lang="scss">
  @import './style.scss';
</style>
