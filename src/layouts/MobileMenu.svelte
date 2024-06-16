<script lang="ts">
  import { onMount } from 'svelte';
  import { siteMenuStore } from '../store/site-menu';
  import Overlay from './Overlay.svelte';
  import Portal from '../components/Portal.svelte';
  import { mobileMenuNavLinks as navLinks } from '../store/nav-links';

  const isOpen = siteMenuStore;
  const { close } = siteMenuStore;

  let category: string | null = null;
  let subCategory: string | null = null;

  onMount(() => {
    const pathname = window.location.pathname;
    category = pathname.split('/')[1] || null;
    subCategory = pathname.split('/')[2] || null;
  });
</script>

{#if $isOpen}
  <Portal lock>
    <Overlay>
      <div class="inner">
        {#each navLinks as link}
          <div class="link-block">
            <a
              href={link.href}
              class="nav-link"
              on:click={close}
              class:active={category === link.slug}>{link.text}</a
            >
            {#if link.categoriesLinks.length}
              <div class="categories-links">
                {#each link.categoriesLinks as categoryLink}
                  <a
                    href={categoryLink.href}
                    class="category-link"
                    on:click={close}
                    class:active={subCategory === categoryLink.slug}
                    >{categoryLink.text}</a
                  >
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </Overlay>
  </Portal>
{/if}

<style lang="scss">
  .inner {
    padding: 30px 20px;

    display: grid;
    gap: 40px;
  }

  .link-block {
    display: grid;
    gap: 20px;
  }

  .nav-link {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .categories-links {
    display: grid;
    gap: 16px;
    padding-left: 10px;
  }

  .category-link {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: 700;
    // text-transform: lowercase;
    text-transform: uppercase;
  }
</style>
