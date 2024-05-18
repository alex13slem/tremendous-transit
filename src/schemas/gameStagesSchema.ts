import { z } from 'astro:content';

const stageSchema = z.object({
  name: z.string(),
  num: z.number(),
  description: z.string(),
  currentCash: z.number().optional(),
  totalCash: z.number().optional(),
  isPlanned: z.boolean().optional(),
});

export const gameStagesSchema = z.object({
  gameSlug: z.string(),
  stages: z.array(stageSchema),
});

export type Stage = z.infer<typeof stageSchema>;
export type GameStages = z.infer<typeof gameStagesSchema>;
