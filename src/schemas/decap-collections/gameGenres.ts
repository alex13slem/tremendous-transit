import type { CmsCollection } from 'decap-cms-core';

export const genresCollection: CmsCollection = {
  name: 'game-genres',
  label: 'Жанры',
  folder: 'src/content/game-genres',
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
