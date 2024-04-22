import { z } from 'astro:content';

export const gameFavoritesSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
