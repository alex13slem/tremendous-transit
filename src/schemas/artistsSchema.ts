import { z } from 'astro:content';

export const artistsSchema = z.object({
  title: z.string(),
  about: z.string(),
  profession: z.array(z.string()),
  image: z.string(),
  contacts: z
    .object({
      slug: z.string(),
      href: z.string(),
    })
    .array(),
});
