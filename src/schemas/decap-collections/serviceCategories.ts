import type { CmsCollection } from 'decap-cms-core';

export const serviceCategoriesCollection: CmsCollection = {
  name: 'service-categories',
  label: 'Категории статей',
  folder: 'src/content/service-categories',
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
