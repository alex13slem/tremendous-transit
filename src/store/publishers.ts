import { getCollection } from 'astro:content';

export const publishers = (await getCollection('publishers')).map(
  (p) => p.data
);
export const getPublisherTitle = (slug: string) =>
  publishers.find((p) => p.slug === slug)!.title;
