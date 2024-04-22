import { z } from 'astro:content';

export const translationsSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
