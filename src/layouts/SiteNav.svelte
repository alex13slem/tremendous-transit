<script lang="ts">
  import NavLink from '../components/ui/NavLink.svelte';
  import { navLinks } from '../store/nav-links';
  import { onMount } from 'svelte';

  let category: string | null = null;

  onMount(() => {
    const pathname = window.location.pathname;
    category = pathname.split('/')[1] || null;
  });
</script>

<nav class="site-nav" {...$$restProps}>
  {#each navLinks as { text, slug, href }}
    <NavLink active={category === slug} {href}>{text}</NavLink>
  {/each}
</nav>

<style>
  .site-nav {
    position: relative;
    display: flex;
    gap: 5px;
  }

  @media (max-width: 1023.98px) {
    .site-nav {
      display: none;
    }
  }
</style>
