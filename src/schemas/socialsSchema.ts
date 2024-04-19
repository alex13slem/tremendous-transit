import { z } from "astro/zod";

export const socialsSchema = z.object({
  title: z.string(),
  link: z.string().nullish(),
  order: z.number().optional(),
});
