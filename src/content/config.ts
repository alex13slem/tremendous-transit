import { defineCollection } from 'astro:content';
import { citiesSchema } from '../schemas/citiesSchema';
import { navLinksSchema } from '../schemas/navLinks';
import { publishingSlidesSchema } from '../schemas/publishingSlidesSchema';
import { serviceArticlesSchema } from '../schemas/serviceArticlesSchema';
import { serviceCategoriesSchema } from '../schemas/serviceCategories';
import { socialsSchema } from '../schemas/socialsSchema';
import { vacancySchema } from '../schemas/vacancySchema';

// const gamesCollection = defineCollection({
//   type: "data",
//   schema: gamesSchema,
// });

const socialsCollection = defineCollection({
  type: 'data',
  schema: socialsSchema,
});

const serviceCategoriesCollection = defineCollection({
  type: 'data',
  schema: serviceCategoriesSchema,
});

const serviceArticlesCollection = defineCollection({
  type: 'content',
  schema: serviceArticlesSchema,
});

const citiesCollection = defineCollection({
  type: 'data',
  schema: citiesSchema,
});

const navLinksCollection = defineCollection({
  type: 'data',
  schema: navLinksSchema,
});

const vacanciesCollection = defineCollection({
  type: 'data',
  schema: vacancySchema,
});

const publishingSlidesCollection = defineCollection({
  type: 'data',
  schema: publishingSlidesSchema,
});

export const collections = {
  'service-articles': serviceArticlesCollection,
  'service-categories': serviceCategoriesCollection,
  'publishing-slides': publishingSlidesCollection,
  // games: gamesCollection,
  socials: socialsCollection,
  'nav-links': navLinksCollection,
  vacancies: vacanciesCollection,
  cities: citiesCollection,
};
