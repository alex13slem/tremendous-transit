<script lang="ts">
  import { parse } from 'marked';
  import ModalTrigger from '../modals/ModalTrigger.svelte';
  import { activeIdx } from '.';
  import { publishingSlides } from '../../store/publishing-slides';

  let currIdx: number;
  activeIdx.subscribe((idx) => {
    currIdx = idx;
  });
</script>

{#each $publishingSlides as { slug, article }, idx}
  {#if idx === currIdx}
    <div class="preview">
      {#if article}
        <div class="body prose">
          <!-- {@html parse(article.description)} -->
          <p>
            Наша цель – предоставить разработчикам творческую свободу и помогать
            в решении конкретных и индивидуальных для каждой команды задач. Мы
            отвечаем за полный цикл одготовки и продвижения игры.
          </p>
        </div>
      {/if}
      <div class="buttons">
        <ModalTrigger type="publishing" slug={article.slug}
          >Подать заявку</ModalTrigger
        >
      </div>
    </div>
  {/if}
{/each}

<style lang="scss">
  .preview {
    grid-area: preview-text;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .body {
    --lines: 6;
    flex: 1 1 auto;
    // height: calc(var(--lines) * 1.4em);
    overflow: hidden;
  }
  @media (max-width: 767.98px) {
    .buttons {
      display: flex;
      justify-content: center;
    }
  }
</style>
