<script lang="ts">
  import Checkbox from './ui/Checkbox.svelte';

  export let invalid: boolean | undefined = undefined;
  export let checked: boolean = false;
  export let name: string;
</script>

<div class="access">
  <Checkbox {name} bind:checked {invalid} />
  <p>
    <slot />
  </p>
</div>

<style lang="scss">
  .access {
    display: flex;
    align-items: center;
    font-size: 10px;
    gap: 10px;

    p {
      max-width: 360px;
    }

    :global(a) {
      color: rgb(var(--c-accent));
      text-decoration: underline;
    }
  }
</style>
