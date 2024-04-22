import { getCollection } from 'astro:content';

const socials = await getCollection('socials');

export const companySocials = await getCollection('company-info')
  .then((c) => c[0].data.socials)
  .then((s) => s.sort((a, b) => a.order - b.order))
  .then((s) =>
    s.map((s) => ({ ...s, ...socials.find((ss) => ss.id === s.slug)?.data! }))
  );

export type CompanySocial = (typeof companySocials)[number];
