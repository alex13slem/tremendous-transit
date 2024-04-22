import { z } from 'astro:content';

export const genresSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
