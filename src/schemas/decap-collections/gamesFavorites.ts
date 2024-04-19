import type { CmsCollection } from 'decap-cms-core';

export const gamesFavoritesCollection: CmsCollection = {
  name: 'games-favorites',
  label: 'Варианты избранного',
  folder: 'src/content/games-favorites',
  create: true,
  slug: '{{fields.value}}',
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
      name: 'value',
      widget: 'string',
    },
  ],
};
