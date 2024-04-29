import { z } from 'astro:content';

export const languagesSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
