<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import { getRandom } from "@/utils/helpers";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { topGames } from "@/store/games";
  import ModalTrigger from "../components/modals/ModalTrigger.svelte";
  import Portal from "../components/Portal.svelte";
  import GamesQrModal from "../components/modals/GamesQrModal.svelte";
  import BtnFirm from "../components/ui/BtnFirm.svelte";

  let bannerGame: CollectionEntry<"games">;
  onMount(() => {
    bannerGame = getRandom(topGames);
  });
  $: id = bannerGame?.id;
  $: steam = bannerGame?.data.platforms?.find(({ slug }) => slug === "steam");
</script>

<div class="games-hero">
  {#if bannerGame?.data.hero_image.src_phd}
    <img
      transition:fade={{ duration: 300 }}
      src={bannerGame.data.hero_image.src}
      style="background-image: {bannerGame.data.hero_image.src_phd};"
      alt={bannerGame.data.hero_image.alt}
    />
  {/if}
  {#if id}
    {#if bannerGame.data.isMobile}
      <ModalTrigger type={"qrGame"} {id}>Играть сейчас</ModalTrigger>
    {:else if steam}
      <a href={steam.href} target="_blank">
        <BtnFirm>Играть сейчас</BtnFirm>
      </a>
    {/if}
  {/if}
</div>

<!-- {#if bannerGame}
  <Portal><GamesQrModal game={bannerGame} /></Portal>
{/if} -->

<style lang="scss">
  .games-hero {
    z-index: 0;
    height: 100svh;
    margin-top: -60px;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-block: 80px;

    @media (max-width: 1023.98px) {
      height: 100vmax;
    }

    &::after {
      z-index: -1;
      position: absolute;
      content: "";
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(28, 29, 43, 0) 50%,
        rgba(28, 29, 43, 0.31) 80%,
        #1c1d2b calc(100% - 20px),
        #1c1d2b 100%
      );
    }

    img {
      z-index: -1;
      position: absolute;
      inset: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
      object-position: center;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
</style>
