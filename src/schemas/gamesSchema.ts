import { z } from "astro:content";

export const gamesSchema = z.object({
  title: z.string(),
  description: z.string(),
  body: z.string(),
  genre: z.string().array(),
  isMobile: z.boolean(),
  isBrowser: z.boolean(),
  developer: z.string(),
  publisher: z.string(),
  releaseDate: z.string(),
  translations: z
    .object({
      lang: z.string(),
      interface: z.boolean(),
      voice: z.boolean(),
    })
    .array(),
  platforms: z
    .object({
      marketplace: z.string(),
      href: z.string(),
      appId: z.string().optional(),
    })
    .array()
    .nullish(),
  status: z.string().optional(),
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
