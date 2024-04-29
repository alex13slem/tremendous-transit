import { getCollection } from 'astro:content';
import type { GameMarketplace } from '../schemas/gameMarketplacesSchema';

export const gameMarketplaces: GameMarketplace[] = await getCollection(
  'game-marketplaces'
).then((g) => g.map((g) => g.data));
const marketplacesMap = new Map(
  gameMarketplaces.map((marketplace) => [marketplace.slug, marketplace.title])
);
export const getMarketplaceTitle = (slug: string) => marketplacesMap.get(slug);
