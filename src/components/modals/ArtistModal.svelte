<script lang="ts">
  import Modal from '../../components/modals/Modal.svelte';
  import { artistModal } from '../../store/modals';
  import Icon from '@iconify/svelte';
  import type { Artist } from '../../types/project';

  export let artists: Artist[];
  $: artist = artists.find(({ id }) => id === $artistModal.id);
</script>

<Modal bind:isOpen={$artistModal.isOpen} title="Участник команды">
  {#if artist}
    <div class="body">
      <img
        style="background-image: url({artist.thumbnail.src_phd});"
        src={artist.thumbnail.src}
        alt={artist.thumbnail.alt}
      />
      <h2>{artist.name}</h2>
      <p class="profession">{artist.profession.name}</p>
      <div class="about prose min"><p>{artist.about}</p></div>
      {#if artist.contacts}
        <div class="share">
          Контакты:
          <div class="socials-icons">
            {#each artist.contacts as { href, iconify_id }}
              <a {href} target="_blank">
                {#if iconify_id}
                  <Icon width="24" height="24" icon={iconify_id} />
                {/if}
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/if}
</Modal>

<style lang="scss">
  .body {
    display: grid;
    grid-template-columns: 225px 635px;
    grid-template-rows: auto auto 1fr auto;
    column-gap: 30px;
    row-gap: 20px;

    img {
      grid-row: span 4;
    }

    h2 {
      font-size: 20px;
      text-transform: uppercase;
    }

    .profession {
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .about {
      margin-bottom: 20px;
    }
  }
  .share {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    font-size: 10px;
    color: rgb(var(--c-text), 30%);
    a {
      transition: var(--trans-default);
      transition-property: color;
      &:hover {
        color: rgb(var(--c-text), 50%);
      }
    }
  }
  .socials-icons {
    display: flex;
    gap: 5px;
  }
</style>
