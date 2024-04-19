import type { CmsCollection } from 'decap-cms-core';

export const publishersCollection: CmsCollection = {
  name: 'publishers',
  label: 'Издатели',
  folder: 'src/content/publishers',
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
