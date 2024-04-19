<script lang="ts">
  import { navLinks } from '../store/nav-links';
</script>

{#each navLinks as { text, href }}
  <a class="nav-link" {href}>
    {text}
  </a>
{/each}
