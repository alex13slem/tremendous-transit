<script lang="ts">
  import type { Artist } from '../../schemas/artistsSchema';
  import { makeAbsoluteURL } from '../../utils/helpers';
  import Icon from '@iconify/svelte';
  import { getProfession } from '../../store/professions';
  import { getSocial } from '../../store/socials';

  export let artist: Artist;

  const { image, title, profession, about } = artist;
  const professions = profession.map((p) => getProfession(p));
  const contacts = !artist.contacts?.length
    ? null
    : artist.contacts.map((c) => ({ ...c, ...getSocial(c.slug) }));
</script>

<div class="root">
  <img src={image} alt={title} />
  <h2>{title}</h2>
  <p class="profession">{professions.map((p) => p.title).join(' / ')}</p>
  <div class="about prose min"><p>{about}</p></div>
  {#if contacts}
    <div class="share">
      Контакты:
      <div class="socials-icons">
        {#each contacts as { href, iconifyId }}
          <a href={makeAbsoluteURL(href)} target="_blank">
            <Icon width="24" height="24" icon={iconifyId} />
          </a>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  @import './index.scss';
</style>
