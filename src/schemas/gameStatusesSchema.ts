import { z } from 'astro:content';

export const gameStatusesSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
