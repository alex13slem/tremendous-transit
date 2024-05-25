import { getCollection } from 'astro:content';
import { atom } from 'nanostores';

export const getAboutUsArticles = async () =>
  await getCollection('articles', (article) => {
    return article.data.category === 'about-us';
  });

export const aboutUsArticles = atom(await getAboutUsArticles());
