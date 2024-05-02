import { z } from 'astro:content';

export const stageCrowdfundingPlatformSchema = z.object({
  slug: z.string(),
  href: z.string(),
});

const stageSchema = z.object({
  name: z.string(),
  num: z.number(),
  description: z.string(),
  crowdfundingPlatforms: stageCrowdfundingPlatformSchema.array().optional(),
  currentCash: z.number().optional(),
  totalCash: z.number().optional(),
  isPlanned: z.boolean().optional(),
});

export const gameStagesSchema = z.object({
  title: z.string(),
  stages: z.array(stageSchema),
});

export type Stage = z.infer<typeof stageSchema>;
export type GameStages = z.infer<typeof gameStagesSchema>;
