import { z } from 'astro:content';

const gamesPlatformsSchema = z.object({
  marketplace: z.string(),
  href: z.string(),
  appId: z.string().optional(),
});

const gamesPlatformsSchemaSelect = gamesPlatformsSchema.extend({
  title: z.string(),
});

export const gamesSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  body: z.string(),
  genre: z.string().array(),
  isMobile: z.boolean(),
  isBrowser: z.boolean(),
  browserLink: z.string().optional(),
  developer: z.string(),
  publisher: z.string(),
  releaseDate: z.date(),
  translations: z
    .object({
      lang: z.string(),
      interface: z.boolean(),
      voice: z.boolean(),
    })
    .array(),
  platforms: gamesPlatformsSchema.array().nullish(),
  status: z.string().array().optional(),
  favorites: z.string().array().optional(),
  thumbnail: z.string(),
  heroImage: z.object({
    src: z.string(),
    srcPlaceholder: z.string(),
    alt: z.string(),
  }),
  adBanner: z.object({ src: z.string(), alt: z.string() }),
  gallery: z.object({ src: z.string(), alt: z.string() }).array(),
});

export const gamesSchemaSelect = gamesSchema.extend({
  platforms: gamesPlatformsSchemaSelect.array().nullish(),
});

export type Game = z.infer<typeof gamesSchema>;
export type GameSelect = z.infer<typeof gamesSchemaSelect>;
