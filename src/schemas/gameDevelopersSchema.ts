import { z } from 'astro:content';

export const developersSchema = z.object({
  title: z.string(),
  slug: z.string(),
});
