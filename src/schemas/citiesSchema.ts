import { z } from 'astro:content';

export const citiesSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
