<script lang="ts">
  import { blur } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import Portal from '../Portal.svelte';
  import type { Link } from '../../types/project';
  import Overlay from '../../layouts/Overlay.svelte';

  type Links = {
    contacts: Link[];
    other: Link[];
  };

  export let title: string = '';
  export let links: Links | null = null;
  export let isOpen = false;
</script>

{#if isOpen}
  <Portal lock>
    <Overlay onClose={() => (isOpen = false)}>
      <div class="inner">
        <div class="window">
          <div class="header">
            <h2>{title}</h2>
            <button class="btn-x" on:click={() => (isOpen = false)}>
              <Icon icon="mdi:close" width="24" />
            </button>
          </div>

          <div class="body">
            <slot />

            {#if links}
              <aside>
                {#if links?.contacts.length}
                  <h3>Можете написать нам сами:</h3>
                  {#each links.contacts as { href, text }}
                    <a {href}>{text}</a>
                  {/each}
                {/if}
                {#if links?.other.length}
                  <h3>Как мы работаем | полезное:</h3>
                  {#each links.other as { href, text }}
                    <a {href}>{text}</a>
                  {/each}
                {/if}
              </aside>
            {/if}
          </div>

          <div class="footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Overlay>
  </Portal>
{/if}

<style lang="scss">
  .inner {
    --padding: 2rem;
    --window-width: 960px;

    padding: 4rem 1rem;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    pointer-events: none;
  }

  .window {
    pointer-events: all;
    width: min(var(--window-width), 100%);

    background-color: rgb(var(--c-bg));
    border: var(--border-card);
  }
  .header {
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--padding);
    padding-top: 3rem;

    border-bottom: var(--border-card);
    h2 {
      flex: 1 1 auto;
      margin: 0;
      text-transform: uppercase;
    }
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 10px;
      transform-origin: bottom;
      top: -3px;
      right: -3px;

      transform: rotate(45deg);
      background-color: rgb(var(--c-white), 30%);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  }
  .btn-x {
    padding: 0;
    border: 0;
    background-color: transparent;

    position: absolute;
    right: 1rem;
    top: 1rem;
    transform: rotate(45deg);
    color: white;

    transition: var(--trans-default);
    transition-property: transform, color;

    &:hover {
      transform: rotate(0);
      color: rgb(var(--c-accent));
    }
  }
  .body {
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: var(--padding);
  }
  aside {
    &:empty {
      display: none;
    }
    flex: 0 0 250px;
    display: flex;
    flex-direction: column;

    a {
      margin-top: 20px;
      color: rgb(var(--c-text));
      font-size: 12px;
      font-weight: 600;

      transition: var(--trans-default);
      transition-property: color;

      &:hover {
        color: rgb(var(--c-accent));
      }
    }
  }
  h3 {
    margin: 0;
    color: rgb(var(--c-label));
    font-size: 10px;

    &:not(:first-child) {
      margin-top: 50px;
    }
  }
  .footer {
    padding: var(--padding);
    border-top: var(--border-card);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &:empty {
      display: none;
    }
  }
</style>
