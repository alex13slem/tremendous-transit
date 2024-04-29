import { getCollection } from 'astro:content';

export const artists = (await getCollection('artists')).map((p) => p.data);
export const getArtistBySlug = (slug: string) =>
  artists.find((a) => a.slug === slug)!;
