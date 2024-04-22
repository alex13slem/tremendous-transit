import { z } from 'astro:content';

export const professionsSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
