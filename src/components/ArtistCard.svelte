<script lang="ts">
  import type { Artist } from '../schemas/artistsSchema';
  import { ArtistModal } from './modals/ArtistModal';

  export let artist: Artist;
  const { title, image } = artist;
  let isOpen = false;
</script>

<button on:click={() => (isOpen = !isOpen)}>
  <img src={image} alt={title} />
  <p>{title}</p>
</button>
<ArtistModal bind:isOpen {artist} />

<style lang="scss">
  button {
    --clip: polygon(20px 0, 100% 0%, calc(100% - 20px) 100%, 0% 100%);
    position: relative;
    z-index: 0;

    @media (min-width: 1024px) {
      filter: grayscale(80%);
      transition: var(--trans-default);
      transition-property: transform, filter;
      &:hover {
        transform: scale(107%);
        filter: grayscale(0%) drop-shadow(var(--box-shadow-active));

        &::after {
          opacity: 1;
        }
        &::before {
          opacity: 0;
        }
      }
    }

    &::before,
    &::after {
      position: absolute;
      content: '';
      inset: 0;
      transition: var(--trans-default);
      transition-property: opacity;
      clip-path: var(--clip);
    }
    &::before {
      opacity: 1;
      background-image: linear-gradient(
        172deg,
        rgba(25, 31, 44, 0.5) 2%,
        rgba(25, 31, 44, 0) 100%
      );
    }
    &::after {
      opacity: 0;
      background-image: linear-gradient(
        172deg,
        rgba(239, 129, 27, 0.2) 0%,
        rgba(239, 129, 27, 0) 40%
      );
    }
  }
  img {
    position: relative;
    z-index: -1;
    width: 210px;
    height: 460px;
    object-fit: cover;
    object-position: center;
    clip-path: var(--clip);
  }
  p {
    margin-top: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>
