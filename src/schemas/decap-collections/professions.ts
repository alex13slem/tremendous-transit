import type { CmsCollection } from 'decap-cms-core';

export const professionsCollection: CmsCollection = {
  name: 'professions',
  label: 'Профессии',
  folder: 'src/content/professions',
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
