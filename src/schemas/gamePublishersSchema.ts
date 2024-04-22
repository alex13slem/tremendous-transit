import { z } from 'astro:content';

export const publishersSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
