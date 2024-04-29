import type { GameSelect } from '../../schemas/gamesSchema';
import { gamesGenres, getGenreTitle } from '../../store/gameGenres';
import {
  gameMarketplaces,
  getMarketplaceTitle,
} from '../../store/gameMarketplaces';

import type { SelectOption } from '../ui/Select';
import Root from './index.svelte';

export const genresOptions: SelectOption[] = gamesGenres.map((genre) => ({
  slug: genre.slug,
  value: genre.title,
  disabled: false,
}));

export const marketplacesOptions: SelectOption[] = gameMarketplaces.map(
  (marketplace) => ({
    slug: marketplace.slug,
    value: marketplace.title,
    disabled: false,
  })
);

export function filterByTitle(game: GameSelect, searchValue: string) {
  const { title } = game;
  return title.toLowerCase().includes(searchValue.trim().toLowerCase());
}

export function filterByGenre(game: GameSelect, genreValue: string) {
  if (!genreValue) return true;
  return game.genre.find((genre) => genreValue === getGenreTitle(genre));
}

export function filterByMarketplace(
  game: GameSelect,
  marketplaceValue: string
) {
  if (!marketplaceValue) return true;
  return game.platforms?.find(
    (platform) => marketplaceValue === getMarketplaceTitle(platform.marketplace)
  );
}

export function filterByGameType(game: GameSelect, gameTypeValue: string) {
  if (gameTypeValue === 'isDesktop')
    return game.type === gameTypeValue || game.type === 'isBrowser';
  return gameTypeValue === game.type;
}

export { Root as GamesCatalog, Root };
