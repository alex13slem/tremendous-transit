import { getCollection } from 'astro:content';
import { atom } from 'nanostores';

const publishingSlidesCollection = await getCollection('publishing-slides');
const servicesArticlesCollection = await getCollection('articles');

export const publishingSlides = atom(
  publishingSlidesCollection
    .map(({ data: d, id }) => {
      const article = servicesArticlesCollection.find(
        ({ slug }) => slug === d.article
      );

      return {
        ...d,
        slug: id,
        article: {
          ...article?.data!,
          slug: article?.slug!,
        },
      };
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0))
);
