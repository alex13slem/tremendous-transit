import { z } from 'astro:content';
import { stageCrowdfundingPlatformSchema } from './gameStagesSchema';

export const crowdfundingPlatformsSchema = z.object({
  title: z.string(),
  slug: z.string(),
  image: z.string().optional(),
  iconifyId: z.string().optional(),
});

const crowdfundingPlatformsSelectSchema = crowdfundingPlatformsSchema.merge(
  stageCrowdfundingPlatformSchema
);

export type CrowdfundingPlatforms = z.infer<typeof crowdfundingPlatformsSchema>;
export type CrowdfundingPlatformsSelect = z.infer<
  typeof crowdfundingPlatformsSelectSchema
>;
