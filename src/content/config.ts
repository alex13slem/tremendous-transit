import { defineCollection } from 'astro:content';
import { articleCategoriesSchema } from '../schemas/articleCategories';
import { articlesSchema } from '../schemas/articlesSchema';
import { artistsSchema } from '../schemas/artistsSchema';
import { citiesSchema } from '../schemas/citiesSchema';
import { companyInfoSchema } from '../schemas/companyInfo';
import { crowdfundingPlatformsSchema } from '../schemas/crowdfundingPlatformsSchema';
import { gameDevStageSchema } from '../schemas/gameDevStagesSchema';
import { developersSchema } from '../schemas/gameDevelopersSchema';
import { gameFavoritesSchema } from '../schemas/gameFavoritesSchema';
import { gameGenresSchema } from '../schemas/gameGenresSchema';
import { marketplacesSchema } from '../schemas/gameMarketplacesSchema';
import { publishersSchema } from '../schemas/gamePublishersSchema';
import { gameStatusesSchema } from '../schemas/gameStatusesSchema';
import { gamesSchema } from '../schemas/gamesSchema';
import { languagesSchema } from '../schemas/languagesSchema';
import { navLinksSchema } from '../schemas/navLinks';
import { professionsSchema } from '../schemas/professionsSchema';
import { publishingSlidesSchema } from '../schemas/publishingSlidesSchema';
import { socialsSchema } from '../schemas/socialsSchema';
import { vacancySchema } from '../schemas/vacancySchema';

const gamesCollection = defineCollection({
  type: 'data',
  schema: gamesSchema,
});

const developersCollection = defineCollection({
  type: 'data',
  schema: developersSchema,
});

const gameStatusesCollection = defineCollection({
  type: 'data',
  schema: gameStatusesSchema,
});

const gameFavoritesCollection = defineCollection({
  type: 'data',
  schema: gameFavoritesSchema,
});

const gameMarketplacesCollection = defineCollection({
  type: 'data',
  schema: marketplacesSchema,
});

const gameGenresCollection = defineCollection({
  type: 'data',
  schema: gameGenresSchema,
});

const publishersCollection = defineCollection({
  type: 'data',
  schema: publishersSchema,
});

const socialsCollection = defineCollection({
  type: 'data',
  schema: socialsSchema,
});

const articleCategoriesCollection = defineCollection({
  type: 'data',
  schema: articleCategoriesSchema,
});

const languagesCollection = defineCollection({
  type: 'data',
  schema: languagesSchema,
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: articlesSchema,
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

const companyInfoCollection = defineCollection({
  type: 'data',
  schema: companyInfoSchema,
});

const professionsCollection = defineCollection({
  type: 'data',
  schema: professionsSchema,
});

const artistsCollection = defineCollection({
  type: 'data',
  schema: artistsSchema,
});

const gameDevStagesCollection = defineCollection({
  type: 'data',
  schema: gameDevStageSchema,
});

const crowdfundingPlatformsCollection = defineCollection({
  type: 'data',
  schema: crowdfundingPlatformsSchema,
});

export const collections = {
  artists: artistsCollection,
  professions: professionsCollection,
  'company-info': companyInfoCollection,
  games: gamesCollection,
  'crowdfunding-platforms': crowdfundingPlatformsCollection,
  'game-genres': gameGenresCollection,
  'game-statuses': gameStatusesCollection,
  'game-favorites': gameFavoritesCollection,
  'game-marketplaces': gameMarketplacesCollection,
  'game-dev-stages': gameDevStagesCollection,
  languages: languagesCollection,
  developers: developersCollection,
  publishers: publishersCollection,
  articles: articlesCollection,
  'article-categories': articleCategoriesCollection,
  'publishing-slides': publishingSlidesCollection,
  socials: socialsCollection,
  'nav-links': navLinksCollection,
  vacancies: vacanciesCollection,
  cities: citiesCollection,
};
