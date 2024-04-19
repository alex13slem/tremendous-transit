import { z } from 'astro:content';
import { citiesSchema } from './citiesSchema';

const vacancyInfo = z.object({
  name: z.string(),
  description: z.string(),
  salary: z.number().nullish(),
});

const vacancyWorkplace = z.object({
  remote: z.boolean(),
  city: z.string().nullish(),
});

const vacancyWorkplaceSelect = vacancyWorkplace.extend({
  city: citiesSchema.nullish(),
});

const listItem = z.object({
  text: z.string(),
});

const vacancyLinks = z.object({
  form: z.string(),
  test: z.string().nullish(),
});

export const vacancySchema = z.object({
  info: vacancyInfo,
  workplace: vacancyWorkplace,
  links: vacancyLinks,
  requirements: z.array(listItem).nullish(),
  tasks: z.array(listItem).nullish(),
  offers: z.array(listItem).nullish(),
});

export const vacancySchemaSelect = vacancySchema.extend({
  slug: z.string(),
  workplace: vacancyWorkplaceSelect,
});

export type VacancyWorkplace = z.infer<typeof vacancyWorkplaceSelect>;

export type VacancySelect = z.infer<typeof vacancySchemaSelect>;

export type Vacancy = z.infer<typeof vacancySchema>;
