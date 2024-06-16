import { getCollection } from 'astro:content';

const publishingSlidesCollection = await getCollection('publishing-slides');
const servicesArticlesCollection = await getCollection('articles');

export const publishingSlides = publishingSlidesCollection
  .map(({ data: d, id }) => {
    const article = servicesArticlesCollection.find(
      ({ slug, data: { category } }) => `${category}-${slug}` === d.article
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
  .sort((a, b) => (a.order || 0) - (b.order || 0));
