import { z } from 'astro:content';

export const crowdfundingPlatformsSchema = z.object({
  title: z.string(),
  slug: z.string(),
  iconifyId: z.string(),
});
