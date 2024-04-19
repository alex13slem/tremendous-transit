<form on:submit data-astro-reload><slot /></form>

<style lang="scss">
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  form :global(textarea) {
    min-height: 118px;
  }
  form :global(button) {
    align-self: flex-start;
  }
</style>
