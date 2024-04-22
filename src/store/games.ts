import { getCollection } from 'astro:content';
import type { GameMarketplace } from '../schemas/gameMarketplacesSchema';
import type { GameSelect } from '../schemas/gamesSchema';

const gameMarketplaces: GameMarketplace[] = await getCollection(
  'game-marketplaces'
).then((g) => g.map((g) => g.data));

export const gamesCollection = await getCollection('games');
export const favoriteGames = gamesCollection
  .filter((game) => game.data.favorites?.length)
  .map((game) => game.data);

export const gamesWithRelations: GameSelect[] = gamesCollection
  .map((game) => game.data)
  .map((game) => {
    const platforms =
      game.platforms?.map((platform) => ({
        ...platform,
        title: gameMarketplaces.find(
          (marketplace) => marketplace.slug === platform.marketplace
        )?.title!,
      })) ?? [];
    return { ...game, platforms };
  });
