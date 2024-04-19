<script lang="ts">
  export let lock: boolean = false;
  let ref: HTMLDivElement;
  $: ref && document.body.appendChild(ref);
</script>

<svelte:head>
  {#if ref && lock}
    <style>
      :root {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<div class="portal" bind:this={ref}>
  <slot />
</div>
