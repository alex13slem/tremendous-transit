import { z } from 'astro:content';

export const marketplacesSchema = z.object({
  title: z.string(),
  slug: z.string(),
  iconifyId: z.string(),
});

export type GameMarketplace = z.infer<typeof marketplacesSchema>;
