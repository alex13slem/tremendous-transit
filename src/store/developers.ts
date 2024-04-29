import { getCollection } from 'astro:content';

export const developers = (await getCollection('developers')).map(
  (p) => p.data
);
export const getDeveloperTitle = (slug: string) =>
  developers.find((d) => d.slug === slug)!.title;
