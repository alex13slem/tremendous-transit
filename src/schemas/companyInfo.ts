import { z } from 'astro:content';

export const companyInfoSchema = z.object({
  title: z.string(),
  slug: z.string(),
  socials: z
    .object({
      slug: z.string(),
      href: z.string(),
      order: z.number(),
    })
    .array(),
});
