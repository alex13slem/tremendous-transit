<script lang="ts">
  import Icon from '@iconify/svelte';

  export let href: string;
  export let iconifyId: string;
  export let title: string | null = null;
</script>

<a {href} {title} target="_blank">
  <button><Icon icon={iconifyId} /></button>
</a>

<style lang="scss">
  a {
    display: contents;
  }
  button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: rgb(var(--c-bg));
    background-color: rgb(var(--c-text), 20%);
    transition: background-color var(--trans-default);

    &:hover {
      background-color: rgb(var(--c-text), 50%);
    }
    font-size: 24px;
  }
</style>
