<script lang="ts">
  export let genres: string[];
  export let value: string | null = null;
</script>

<swiper-container slides-per-view="auto" space-between="10">
  {#each genres as genre}
    <swiper-slide>
      <button
        on:click={() => {
          if (value === genre) return (value = null);
          value = genre;
        }}
        class:active={value === genre}>{genre}</button
      >
    </swiper-slide>
  {/each}
</swiper-container>

<style lang="scss">
  swiper-slide {
    width: fit-content;
  }
  button {
    font-size: 0.75em;
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
