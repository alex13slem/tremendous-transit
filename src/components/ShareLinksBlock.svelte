<script lang="ts">
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';

  export let text = 'Поделиться:';
  export let textOff = false;
  export let title: string;
  export let imgSrc: string | null = null;
  export let to: string | null = null;

  let twitterHref: string;
  let facebookHref: string;
  let vkHref: string;
  let telegramHref: string;

  onMount(() => {
    const url = to ? location.origin + to : location.href;
    twitterHref = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
    facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`;
    vkHref =
      `https://vk.com/share.php?url=${url}&title=${title}` +
      (imgSrc ? `&image=${location.origin}${imgSrc}` : '');
    telegramHref = `https://t.me/share/url?url=${url}&text=${title}`;
  });
</script>

<div class="share-links-block">
  {#if !textOff}{text}{/if}
  <div class="socials-icons">
    <a href={twitterHref} target="_blank">
      <Icon width="24" height="24" icon="ri:twitter-fill" />
    </a>
    <a href={facebookHref} target="_blank">
      <Icon width="24" height="24" icon="ri:facebook-circle-fill" />
    </a>
    <a href={vkHref} target="_blank">
      <Icon icon="uil:vk" width="24" height="24" />
    </a>
    <a href={telegramHref} target="_blank">
      <Icon width="24" height="24" icon="ri:telegram-fill" />
    </a>
  </div>
</div>

<style lang="scss">
  .share-links-block {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: clamp(0.313rem, 0.014rem + 1.27vw, 0.625rem);
    font-size: 10px;
    color: rgb(var(--c-text), 30%);
    a {
      transition: var(--trans-default);
      transition-property: color;
      &:hover {
        color: rgb(var(--c-text), 50%);
      }
    }
  }
  .socials-icons {
    display: flex;
    gap: 5px;
  }
</style>
