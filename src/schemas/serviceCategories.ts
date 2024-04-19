import { z } from 'astro:content';

export const serviceCategoriesSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
