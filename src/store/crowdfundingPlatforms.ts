import { getCollection } from 'astro:content';

export const crowdfundingPlatforms = (
  await getCollection('crowdfunding-platforms')
).map((c) => c.data);
