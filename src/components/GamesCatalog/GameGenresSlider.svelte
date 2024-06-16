<script lang="ts">
  import type { SelectOption } from '../ui/Select';

  export let genres: SelectOption[];
  export let value: string | undefined = undefined;
</script>

<swiper-container slides-per-view="auto">
  {#each genres as genre}
    <swiper-slide>
      <button
        on:click={() => {
          if (value === genre.value) return (value = undefined);
          value = genre.value;
        }}
        class:active={value === genre.value}>{genre.text}</button
      >
    </swiper-slide>
  {/each}
</swiper-container>

<style lang="scss">
  swiper-slide {
    width: fit-content;
    margin-right: 10px;
  }
  button {
    font-size: 12px;
    line-height: 2;
    padding-inline: 1em;
    background-color: rgb(var(--c-card));
    border-radius: 0.25em;
    transition: var(--trans-default);
    transition-property: background-color;
    &.active {
      background-color: rgb(var(--c-white), 30%);
    }
  }
</style>
