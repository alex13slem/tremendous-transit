import type { GameSelect } from '../../schemas/gamesSchema';
import { gamesGenres } from '../../store/gameGenres';
import { gameMarketplaces } from '../../store/gameMarketplaces';

import type { SelectOption } from '../ui/Select';
import Root from './index.svelte';

export const genresOptions: SelectOption[] = gamesGenres.map((genre) => ({
  value: genre.slug,
  text: genre.title,
  disabled: false,
}));

export const marketplacesOptions: SelectOption[] = gameMarketplaces.map(
  (marketplace) => ({
    value: marketplace.slug,
    text: marketplace.title,
    disabled: false,
  })
);

export function filterByTitle(
  game: GameSelect,
  searchValue: string | undefined
) {
  if (!searchValue) return true;
  const { title } = game;
  return title.toLowerCase().includes(searchValue.trim().toLowerCase());
}

export function filterByGenre(
  game: GameSelect,
  genreValue: string | undefined
) {
  if (!genreValue) return true;
  return game.genre.find((slug) => genreValue === slug);
}

export function filterByMarketplace(
  game: GameSelect,
  marketplaceValue: string | undefined
) {
  if (!marketplaceValue) return true;
  return game.platforms?.find(({ slug }) => marketplaceValue === slug);
}

export function filterByGameType(game: GameSelect, gameTypeValue: string) {
  if (gameTypeValue === 'isDesktop')
    return game.type === gameTypeValue || game.type === 'isBrowser';
  return gameTypeValue === game.type;
}

export { Root as GamesCatalog, Root };
