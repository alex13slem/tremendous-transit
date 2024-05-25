import type { CmsCollection } from 'decap-cms-core';

export const articleCategoriesCollection: CmsCollection = {
  name: 'article-categories',
  label: 'Категории статей',
  folder: 'src/content/article-categories',
  create: true,
  slug: '{{fields.slug}}',
  extension: 'yml',
  format: 'yml',
  fields: [
    {
      label: 'Название',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
    },
  ],
};
