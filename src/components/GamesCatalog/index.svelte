<script lang="ts">
  import FormField from '../ui/FormField.svelte';
  import { Select } from '../ui/Select';
  import Icon from '@iconify/svelte';
  import { GameCard } from '../GameCard';
  import { blur } from 'svelte/transition';
  import { paginate, PaginationNav } from 'svelte-paginate';

  import ArrowFirmLeft from '../svg/ArrowFirmLeft.svelte';
  import ArrowFirmRight from '../svg/ArrowFirmRight.svelte';
  import { gamesWithRelations } from '../../store/games';
  import type { GameSelect } from '../../schemas/gamesSchema';
  import {
    filterByGameType,
    filterByGenre,
    filterByMarketplace,
    filterByTitle,
    genresOptions,
    marketplacesOptions,
  } from '.';
  import GenresSlider from './GameGenresSlider.svelte';

  const pageSizeVariant = [16, 24, 40];
  let filteredItems: GameSelect[];

  let searchValue: string | undefined = undefined;
  let genreValue: string | undefined = undefined;
  let marketplaceValue: string | undefined = undefined;
  let gameTypeValue = 'isMobile';

  let currentPage = 1;
  let pageSize = pageSizeVariant[0];

  let genreSelectIsOpen = false;
  let marketplaceSelectIsOpen = false;

  $: minVisibleGame = 1 + pageSize * (currentPage - 1);
  $: maxVisibleGame = pageSize + pageSize * (currentPage - 1);

  $: filteredItems = gamesWithRelations
    .filter((game) => filterByTitle(game, searchValue))
    .filter((game) => filterByGenre(game, genreValue))
    .filter((game) => filterByMarketplace(game, marketplaceValue))
    .filter((game) => filterByGameType(game, gameTypeValue));

  $: paginatedItems = paginate<GameSelect>({
    items: filteredItems,
    pageSize,
    currentPage,
  });

  $: if (currentPage !== 1 && (searchValue || genreValue || marketplaceValue)) {
    currentPage = 1;
  }
</script>

<div class="root">
  <fieldset>
    <div class="marketplace-filter-mobile">
      <button
        class:active={gameTypeValue === 'isDesktop'}
        on:click={() => (gameTypeValue = 'isDesktop')}
      >
        <Icon icon="bx:desktop" width="36" height="36" />
      </button>
      <button
        class:active={gameTypeValue === 'isMobile'}
        on:click={() => (gameTypeValue = 'isMobile')}
      >
        <Icon icon="bx:mobile-alt" width="36" height="36" />
      </button>
      <button
        class:active={gameTypeValue === 'isConsole'}
        on:click={() => (gameTypeValue = 'isConsole')}
      >
        <Icon icon="bx:joystick" width="36" height="36" />
      </button>
    </div>

    <FormField
      placeholder="Поиск по названию"
      size="sm"
      variant="dark"
      bind:value={searchValue}
    >
      <Icon icon="bi:search" slot="left" />
    </FormField>

    <div class="genre-filter-desktop">
      <Select
        size="sm"
        variant="dark"
        placeholder="Жанр"
        options={genresOptions}
        bind:value={genreValue}
        bind:open={genreSelectIsOpen}
      >
        <button
          class="select-icon-btn"
          slot="left"
          on:click|stopPropagation={() => {
            genreValue = undefined;
            genreSelectIsOpen = false;
          }}
        >
          {#if genreValue}
            <Icon icon="bi:x" />
          {:else}
            <Icon icon="bi:filter-left" />
          {/if}
        </button>
      </Select>
    </div>
    <div class="genre-filter-mobile">
      <GenresSlider genres={genresOptions} bind:value={genreValue} />
    </div>

    <div class="marketplace-filter-desktop">
      <Select
        size="sm"
        variant="dark"
        placeholder="Платформа"
        options={marketplacesOptions}
        bind:value={marketplaceValue}
        bind:open={marketplaceSelectIsOpen}
      >
        <button
          class="select-icon-btn"
          slot="left"
          on:click|stopPropagation={() => {
            marketplaceValue = undefined;
            marketplaceSelectIsOpen = false;
          }}
        >
          {#if marketplaceValue}
            <Icon icon="bi:x" />
          {:else}
            <Icon icon="bi:filter-left" />
          {/if}
        </button>
      </Select>
    </div>
  </fieldset>

  <div class="catalog">
    {#each paginatedItems as game (game.slug)}
      <GameCard {game} />
    {:else}
      <div in:blur class="placeholder">
        <p>Игр нет</p>
      </div>
    {/each}
  </div>

  <div class="nav-panel">
    <PaginationNav
      totalItems={filteredItems.length}
      {pageSize}
      {currentPage}
      limit={1}
      showStepOptions={true}
      on:setPage={(e) => {
        currentPage = e.detail.page;
        window.location.hash = '';
        window.location.hash = 'games-catalog';
      }}
    >
      <span slot="prev"><ArrowFirmLeft /></span>
      <span slot="next"><ArrowFirmRight /></span>
    </PaginationNav>

    <div class="display-now">
      Показано
      {minVisibleGame}-{maxVisibleGame > filteredItems.length
        ? filteredItems.length
        : maxVisibleGame}
      из
      {filteredItems.length}
    </div>

    <div class="page-size">
      <span>Показывать по:</span>
      {#each pageSizeVariant as num}
        <span
          role="presentation"
          class="option number"
          class:active={num === pageSize}
          on:click={() => {
            if (num === pageSize) return;
            pageSize = num;
            currentPage = 1;
            window.location.hash = '';
            window.location.hash = 'games-catalog';
          }}><span>{num}</span></span
        >
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @import './index.scss';
</style>
