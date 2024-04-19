import { getCollection } from "astro:content";

export const socials = [...(await getCollection("socials"))].sort(
  (a, b) => (a.data.order || 0) - (b.data.order || 0),
);
