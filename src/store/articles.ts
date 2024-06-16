import { getCollection } from 'astro:content';

const articles = await getCollection('articles');
const devArticles = articles.filter((a) => a.data.category === 'development');
const pubArticles = articles.filter((a) => a.data.category === 'publishing');
const aboutUsArticles = articles.filter((a) => a.data.category === 'about-us');

function getArticleTitle(slug: string) {
  const article = articles.find((a) => a.slug === slug);
  return article?.data.title;
}

export { aboutUsArticles, devArticles, getArticleTitle, pubArticles };
