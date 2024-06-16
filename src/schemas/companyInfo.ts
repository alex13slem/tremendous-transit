import { z } from 'astro:content';
import { marketplacesSchema as gameMarketplacesSchema } from './gameMarketplacesSchema';

const marketplacesSchema = z.object({
  slug: z.string(),
  href: z.string(),
  order: z.number(),
});

const marketplacesSchemaSelect = marketplacesSchema.merge(
  gameMarketplacesSchema
);

export const companyInfoSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  emails: z
    .object({
      title: z.string(),
      email: z.string(),
    })
    .array(),
  phones: z
    .object({
      title: z.string(),
      phone: z.string(),
    })
    .array(),
  address: z.object({
    city: z.string(),
    address: z.string(),
  }),
  links: z
    .object({
      title: z.string(),
      href: z.string(),
    })
    .array(),
  socials: z
    .object({
      slug: z.string(),
      href: z.string(),
      order: z.number(),
    })
    .array(),
  marketplaces: marketplacesSchema.array(),
});

const companyInfoSchemaSelect = companyInfoSchema.extend({
  marketplaces: marketplacesSchemaSelect.array(),
});

export type CompanyInfo = z.infer<typeof companyInfoSchema>;
export type CompanyInfoSelect = z.infer<typeof companyInfoSchemaSelect>;
export type MarketplaceSelect = z.infer<typeof marketplacesSchemaSelect>;
