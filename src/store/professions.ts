import { getCollection } from 'astro:content';

export const professions = (await getCollection('professions')).map(
  (p) => p.data
);

export const getProfession = (slug: string) =>
  professions.find((p) => p.slug === slug)!;
