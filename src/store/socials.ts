import { getCollection } from 'astro:content';

export const socials = (await getCollection('socials')).map((s) => s.data);
export const getSocial = (slug: string) =>
  socials.find((s) => s.slug === slug)!;

export const companySocials = await getCollection('company-info')
  .then((c) => c[0].data.socials)
  .then((s) => s.sort((a, b) => a.order - b.order))
  .then((s) =>
    s.map((s) => ({ ...s, ...socials.find((ss) => ss.slug === s.slug)! }))
  );

export type CompanySocial = (typeof companySocials)[number];
