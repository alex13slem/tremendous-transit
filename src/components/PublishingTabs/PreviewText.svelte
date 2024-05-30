<script lang="ts">
  import { parse } from 'marked';
  import { publishingSlides } from '../../store/publishing-slides';
  import { activeIdx } from '.';
  import { PublishingModal } from '../modals/PublishingModal';
  import BtnFirm from '../ui/BtnFirm.svelte';

  let isOpen = false;
</script>

{#each $publishingSlides as { slug, article }, idx}
  {#if idx === $activeIdx}
    <div class="preview">
      {#if article.description}
        <div class="body prose">
          {@html parse(article.description)}
        </div>
      {/if}
      <div class="buttons">
        <BtnFirm on:click={() => (isOpen = true)}>Подать заявку</BtnFirm>
      </div>
    </div>
    <PublishingModal />
  {/if}
{/each}

<style lang="scss">
  .preview {
    position: relative;

    grid-area: preview-text;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .body {
    --lines: 6;
    flex: 1 1 auto;
    line-height: 1.4em;
    height: calc(var(--lines) * 1.4em);
    overflow: hidden;
  }
  @media (max-width: 767.98px) {
    .buttons {
      display: flex;
      justify-content: center;
    }
  }
</style>
