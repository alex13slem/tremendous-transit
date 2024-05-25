import { z } from 'astro:content';

export const articlesSchema = z.object({
  title: z.string(),
  // slug: z.string(),
  category: z.string(),
  date: z.date(),
  description: z.string().optional(),
  thumbnail: z
    .object({ src: z.string().optional(), alt: z.string().optional() })
    .optional(),
  gallery: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .array()
    .optional(),
  order: z.number().optional(),
  buttons: z
    .object({
      text: z.string(),
      link: z.string(),
    })
    .array()
    .optional(),
});
