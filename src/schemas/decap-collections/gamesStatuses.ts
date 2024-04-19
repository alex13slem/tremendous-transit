import type { CmsCollection } from 'decap-cms-core';

export const gamesStatusesCollection: CmsCollection = {
  name: 'games-statuses',
  label: 'Статусы игр',
  folder: 'src/content/games-statuses',
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
