import { getCollection } from 'astro:content';
import { atom } from 'nanostores';

type ServiceArticleCategory = 'development' | 'publishing';

export const getServiceArticles = async (category: ServiceArticleCategory) =>
  await getCollection('articles', (article) => {
    return article.data.category === category;
  });

export const devArticles = atom(await getServiceArticles('development'));
export const pubArticles = atom(await getServiceArticles('publishing'));
