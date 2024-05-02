<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { CrowdfundingPlatformsSelect } from '../schemas/crowdfundingPlatformsSchema';
  import PlanetaRuLogo from './svg/planeta-ru-logo.svelte';
  export let platform: CrowdfundingPlatformsSelect;
</script>

<a href={platform.href} class="link">
  <span class="icon">
    {#if platform.slug === 'planeta-ru'}
      <PlanetaRuLogo />
    {:else if platform.iconifyId}
      <Icon icon={platform.iconifyId} class="icon" />
    {:else if platform.image}
      <img src={platform.image} alt={platform.title} />
    {/if}
  </span>
  <span class="title">
    {#if platform.slug !== 'planeta-ru'}
      {platform.title}
    {/if}
  </span>
</a>

<style lang="scss">
  .link {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .title {
    font-size: 1em;
    color: rgb(var(--c-text), 70%);
  }

  .icon {
    color: rgb(var(--c-accent));
    font-size: 1.5em;
    &:empty {
      display: none;
    }
  }
</style>
