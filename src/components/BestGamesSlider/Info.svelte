<script lang="ts">
  import type { CollectionEntry } from 'astro:content';
  import GameCardPlatformsSlider from './GameCardPlatformsSlider.svelte';
  import { parse } from 'marked';
  import ModalTrigger from '../modals/ModalTrigger.svelte';
  import BtnFirm from '../ui/BtnFirm.svelte';

  const { platforms, title, description, isMobile } = game.data;

  const steam = platforms?.find(({ slug }) => slug === 'steam');
</script>

<article>
  <h3>{title}</h3>
  {#if platforms?.length}
    <GameCardPlatformsSlider {platforms} />
  {/if}
  <div class="prose">
    {@html parse(description)}
  </div>
  <div class="btns">
    {#if isMobile}
      <ModalTrigger type={'qrGame'} id={game.id}>Играть сейчас</ModalTrigger>
    {:else if steam}
      <a href={steam.href} target="_blank">
        <BtnFirm>Играть сейчас</BtnFirm>
      </a>
    {/if}
    <a href="/{game.collection}/{game.id.split('/')[1]}">
      <BtnFirm variant="transparent">Подробнее</BtnFirm>
    </a>
  </div>
</article>

<style lang="scss">
  article {
    padding: 2px;
    // background-color: rgb(var(--c-card));
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;

    h3 {
      font-size: 30px;
      line-height: 1;
      text-transform: uppercase;
    }
  }

  .prose {
    --lh: 1.5625em;
    max-height: calc(6 * var(--lh));

    overflow: hidden;
    overflow: clip;
    text-overflow: ellipsis;

    :global(p) {
      line-height: var(--lh);
    }
  }

  .btns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;

    a {
      display: contents;
    }
  }
</style>
