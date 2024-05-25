import { z } from 'astro:content';
import { articlesSchema } from './articlesSchema';

export const publishingSlidesSchema = z.object({
  title: z.string(),
  article: z.string(),
  text: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  order: z.number(),
});

export const publishingSlidesSchemaSelect = publishingSlidesSchema.extend({
  article: articlesSchema.extend({ slug: z.string() }).optional(),
  slug: z.string(),
});

export type PublishingSlide = z.infer<typeof publishingSlidesSchema>;
export type PublishingSlideSelect = z.infer<
  typeof publishingSlidesSchemaSelect
>;
