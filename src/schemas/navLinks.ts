import { z } from "astro/zod";

export const navLinksSchema = z.object({
  text: z.string(),
  slug: z.string(),
  href: z.string(),
  order: z.number().optional(),
});
