import { getCollection } from 'astro:content';
import type { GameSelect } from '../schemas/gamesSchema';
import { gameMarketplaces } from './gameMarketplaces';

export const gamesWithRelations: GameSelect[] = (await getCollection('games'))
  .map((game) => game.data)
  .map((game) => {
    const platforms =
      game.platforms?.map((platform) => ({
        ...platform,
        ...gameMarketplaces.find(
          (marketplace) => marketplace.slug === platform.marketplace
        )!,
      })) ?? [];
    return { ...game, platforms };
  });

export const fakeGames: GameSelect[] = Array.from(
  { length: 50 },
  (_, index) => {
    const game = gamesWithRelations[index % gamesWithRelations.length];
    const newSlug = `${index}-fake-${game.slug}`;
    const newGame = {
      ...game,
      slug: newSlug,
    };
    return newGame;
  }
);
export const fakeBestGames: GameSelect[] = Array.from(
  { length: 4 },
  (_, index) => {
    const game = gamesWithRelations[index % gamesWithRelations.length];
    const newSlug = `${index}-fake-${game.slug}`;
    const newGame = {
      ...game,
      slug: newSlug,
    };
    return newGame;
  }
);

export const bestGames: GameSelect[] = gamesWithRelations.filter((game) =>
  game.favorites?.includes('best')
);
export const topGames: GameSelect[] = gamesWithRelations.filter((game) =>
  game.favorites?.includes('top')
);
