import { z } from 'astro:content';
import { crowdfundingPlatformsSchema } from './crowdfundingPlatformsSchema';

const gameDevCrowdfundingPlatformsSchema = z.object({
  slug: z.string(),
  href: z.string(),
});

const gameDevCrowdfundingPlatformsSelectSchema =
  gameDevCrowdfundingPlatformsSchema.merge(crowdfundingPlatformsSchema);

export const gameDevStageSchema = z.object({
  title: z.string(),
  slug: z.string(),
  gameSlug: z.string(),
  description: z.string(),
  currentCash: z.number().optional(),
  totalCash: z.number().optional(),
  crowdfundingPlatforms: gameDevCrowdfundingPlatformsSchema.array().optional(),
  isPlanned: z.boolean().optional(),
});

export const gameDevStageSelectSchema = gameDevStageSchema.extend({
  crowdfundingPlatforms: gameDevCrowdfundingPlatformsSelectSchema
    .array()
    .optional(),
});

export type GameDevStage = z.infer<typeof gameDevStageSchema>;
export type GameDevCrowdfundingPlatformSelect = z.infer<
  typeof gameDevCrowdfundingPlatformsSelectSchema
>;
