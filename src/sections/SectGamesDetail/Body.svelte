<script lang="ts">
  import type { CollectionEntry } from 'astro:content';
  import { parse } from 'marked';
  import BtnFirm from '../../components/ui/BtnFirm.svelte';
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';
  import { cn } from '../../utils/helpers';
  import DetailSlider from '../../components/ArticleSlider/DetailSlider.svelte';
  import PreviewSlider from '../../components/ArticleSlider/PreviewSlider.svelte';
  import type { GameSelect } from '../../schemas/gamesSchema';

  export let game: GameSelect;

  const { body, gallery } = game;
  const descriptionMD = parse(body);

  let root: HTMLDivElement;

  let open: boolean = false;
  let maxHeight: number;

  onMount(() => {
    maxHeight = root.scrollHeight;
  });
</script>

<svelte:window
  on:resize={() => {
    maxHeight = root.scrollHeight;
  }}
/>

<div class="body">
  <DetailSlider data={gallery} />
  <PreviewSlider data={gallery} />
  <div
    class="prose detail"
    class:open
    class:scrollable={maxHeight > 500}
    bind:this={root}
    style="--max-height: {maxHeight}px;"
  >
    <!-- {@html descriptionMD} -->
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet
      quidem eos inventore culpa reprehenderit aut! Nobis voluptas, quas facere
      recusandae beatae quia neque animi quisquam. Repudiandae optio minima
      architecto.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet
      quidem eos inventore culpa reprehenderit aut! Nobis voluptas, quas facere
      recusandae beatae quia neque animi quisquam. Repudiandae optio minima
      architecto.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet
      quidem eos inventore culpa reprehenderit aut! Nobis voluptas, quas facere
      recusandae beatae quia neque animi quisquam. Repudiandae optio minima
      architecto.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet
      quidem eos inventore culpa reprehenderit aut! Nobis voluptas, quas facere
      recusandae beatae quia neque animi quisquam. Repudiandae optio minima
      architecto.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet
      quidem eos inventore culpa reprehenderit aut! Nobis voluptas, quas facere
      recusandae beatae quia neque animi quisquam. Repudiandae optio minima
      architecto.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet
      quidem eos inventore culpa reprehenderit aut! Nobis voluptas, quas facere
      recusandae beatae quia neque animi quisquam. Repudiandae optio minima
      architecto.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet
      quidem eos inventore culpa reprehenderit aut! Nobis voluptas, quas facere
      recusandae beatae quia neque animi quisquam. Repudiandae optio minima
      architecto.
    </p>
  </div>
  {#if maxHeight > 500}
    <BtnFirm size="sm" variant="transparent" on:click={() => (open = !open)}>
      {#if open}СКРЫТЬ{:else}ПОКАЗАТЬ БОЛЬШЕ{/if}
      <Icon
        class={cn('btn-arrow', open && 'open')}
        icon="solar:alt-arrow-down-bold-duotone"
      />
    </BtnFirm>
  {/if}
</div>

<style lang="scss">
  .body {
    grid-area: body;
    :global(.btn-arrow) {
      display: inline-flex;
      color: rgb(var(--c-text), 50%);
      width: 2em;
      height: 2em;
      transition: var(--trans-slow);
      transition-property: transform;
    }
    :global(.btn-arrow.open) {
      transform: rotateX(180deg);
    }
    :global(.btn-firm) {
      width: 100%;
    }
  }

  .prose {
    margin-top: 30px;
    position: relative;
    overflow: hidden;
    transition: var(--trans-slow);
    transition-property: height, margin-bottom;

    &.scrollable {
      height: 500px;
      &::after {
        position: absolute;
        content: '';
        height: 1.75em;
        width: 100%;
        bottom: 0;
        background-image: linear-gradient(
          to top,
          rgb(var(--c-bg)),
          transparent
        );
        transition: var(--trans-slow);
        transition-property: opacity;
      }
      &.open {
        margin-bottom: 30px;
        height: var(--max-height);
        &::after {
          opacity: 0;
        }
      }
    }
  }
</style>
