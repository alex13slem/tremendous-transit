import { getCollection } from 'astro:content';

export const crowdfundingPlatforms = (
  await getCollection('crowdfunding-platforms')
).map((p) => p.data);

export const getCrowdfundingPlatformBySlug = (slug: string) =>
  crowdfundingPlatforms.find((p) => p.slug === slug)!;
