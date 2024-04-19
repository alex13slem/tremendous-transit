import type { CmsCollection } from 'decap-cms-core';

export const developersCollection: CmsCollection = {
  name: 'developers',
  label: 'Разработчики',
  folder: 'src/content/developers',
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
