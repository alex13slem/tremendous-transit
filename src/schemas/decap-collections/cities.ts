import type { CmsCollection } from 'decap-cms-core';

export const citiesCollection: CmsCollection = {
  name: 'cities',
  label: 'Города',
  folder: 'src/content/cities',
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
