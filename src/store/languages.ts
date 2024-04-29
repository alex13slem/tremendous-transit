import { getCollection } from 'astro:content';

export const languages = (await getCollection('languages')).map((l) => l.data);
export const getLanguageTitle = (slug: string) =>
  languages.find((l) => l.slug === slug)!.title;
