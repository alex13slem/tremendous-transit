<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import { parse } from "marked";
  import BtnFirm from "@/components/ui/BtnFirm.svelte";
  import SectSliderWThumbs from "@/components/SliderWThumbs.svelte";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import { cn } from "@/utils/helpers";

  export let game: CollectionEntry<"games">;

  const { body, gallery } = game.data;
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
  <SectSliderWThumbs data={gallery} />
  <div
    class="prose detail"
    class:open
    bind:this={root}
    style="--max-height: {maxHeight}px;"
  >
    {@html descriptionMD}
  </div>
  <BtnFirm size="sm" variant="transparent" on:click={() => (open = !open)}>
    {#if open}СКРЫТЬ{:else}ПОКАЗАТЬ БОЛЬШЕ{/if}
    <Icon
      class={cn("btn-arrow", open && "open")}
      icon="solar:alt-arrow-down-bold-duotone"
    />
  </BtnFirm>
</div>

<style lang="scss">
  .body {
    display: flex;
    flex-direction: column;
    gap: 30px;

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
  }

  .prose {
    position: relative;
    overflow: hidden;
    transition: var(--trans-slow);
    transition-property: height;
    height: 500px;

    &::after {
      position: absolute;
      content: "";
      height: 1.75em;
      width: 100%;
      bottom: 0;
      background-image: linear-gradient(to top, rgb(var(--c-bg)), transparent);
      transition: var(--trans-slow);
      transition-property: opacity;
    }

    &.open {
      height: var(--max-height);
      &::after {
        opacity: 0;
      }
    }
  }
</style>
