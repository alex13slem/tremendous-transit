import { z } from 'astro:content';

export const serviceArticlesSchema = z.object({
  title: z.string(),
  // slug: z.string(),
  category: z.string(),
  date: z.date(),
  description: z.string(),
  thumbnail: z.object({ src: z.string(), alt: z.string() }),
  gallery: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .array(),
  order: z.number().optional(),
});
