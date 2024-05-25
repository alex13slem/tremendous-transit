<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { GameDevCrowdfundingPlatformSelect } from '../schemas/gameDevStagesSchema';

  export let platform: GameDevCrowdfundingPlatformSelect;
</script>

<a href={platform.href} target="_blank">
  <Icon icon={platform.iconifyId} class="icon" />
  {platform.title}
</a>

<style lang="scss">
  a {
    display: flex;
    gap: 0.5em;

    :global(.icon) {
      transition: var(--trans-default);
      transition-property: color;
    }

    &:hover {
      :global(.icon) {
        color: rgb(var(--c-accent));
      }
    }
  }
</style>
