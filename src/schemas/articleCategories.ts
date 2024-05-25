import { z } from 'astro:content';

export const articleCategoriesSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
