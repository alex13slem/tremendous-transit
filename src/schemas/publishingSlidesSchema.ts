import { z } from 'astro:content';
import { serviceArticlesSchema } from './serviceArticlesSchema';

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
  article: serviceArticlesSchema.extend({ slug: z.string() }).optional(),
  slug: z.string(),
});

export type PublishingSlide = z.infer<typeof publishingSlidesSchema>;
export type PublishingSlideSelect = z.infer<
  typeof publishingSlidesSchemaSelect
>;
