import { z } from 'astro:content';

export const gameGenresSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
