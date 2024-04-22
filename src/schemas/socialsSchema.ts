import { z } from 'astro:content';

export const socialsSchema = z.object({
  title: z.string(),
  slug: z.string(),
  iconifyId: z.string(),
});
