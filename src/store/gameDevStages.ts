import { getCollection } from 'astro:content';
import { crowdfundingPlatforms as $crowdfundingPlatforms } from './crowdfundingPlatforms';

export const gamesDevStages = (await getCollection('game-dev-stages'))
  .map((s) => s.data)
  .map((stage) => {
    const crowdfundingPlatforms = stage.crowdfundingPlatforms?.map(
      (platform) => ({
        ...platform,
        ...$crowdfundingPlatforms.find(({ slug }) => slug === platform.slug)!,
      })
    );

    return { ...stage, crowdfundingPlatforms };
  });
