import { z } from 'astro:content';
import { gameDevStageSelectSchema } from './gameDevStagesSchema';
import { marketplacesSchema } from './gameMarketplacesSchema';

const gamesPlatformsSchema = z.object({
  marketplace: z.string(),
  href: z.string(),
  appId: z.string().optional(),
});
const gamesPlatformsSelectSchema =
  gamesPlatformsSchema.merge(marketplacesSchema);

const gameTranslationsSchema = z.object({
  lang: z.string(),
  interface: z.boolean(),
  voice: z.boolean(),
});

const gameDevStagesSchema = z.object({
  stageSlug: z.string(),
  num: z.number(),
});

const gameDevStagesSelectSchema = gameDevStagesSchema.merge(
  gameDevStageSelectSchema
);

export const gamesSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  body: z.string(),
  genre: z.string().array(),
  type: z.enum(['isMobile', 'isBrowser', 'isDesktop', 'isConsole']),
  browserLink: z.string().optional(),
  developer: z.string(),
  publisher: z.string(),
  releaseDate: z.date().optional(),
  team: z.string().array().optional(),
  translations: gameTranslationsSchema.array(),
  platforms: gamesPlatformsSchema.array().optional(),
  devStages: gameDevStagesSchema.array().optional(),
  status: z.string().optional(),
  favorites: z.string().array().optional(),
  thumbnail: z.string(),
  icon: z.string(),
  heroImage: z.object({
    src: z.string(),
    srcPlaceholder: z.string(),
    alt: z.string(),
  }),
  adBanner: z.object({ src: z.string(), alt: z.string() }),
  gallery: z.object({ src: z.string(), alt: z.string() }).array().optional(),
});

export const gamesSchemaSelect = gamesSchema.extend({
  platforms: gamesPlatformsSelectSchema.array().optional(),
  devStages: gameDevStagesSelectSchema.array().nullish(),
});

export type Game = z.infer<typeof gamesSchema>;
export type GameSelect = z.infer<typeof gamesSchemaSelect>;
export type GamePlatform = z.infer<typeof gamesPlatformsSelectSchema>;
export type GameTranslation = z.infer<typeof gameTranslationsSchema>;
export type GameDevStageSelect = z.infer<typeof gameDevStagesSelectSchema>;
