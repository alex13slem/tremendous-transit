import type { CmsCollection } from 'decap-cms-core';

export const gameStagesCollection: CmsCollection = {
  name: 'game-stages',
  label: 'Игровые этапы',
  folder: 'src/content/game-stages',
  create: true,
  slug: '{{gameSlug}}',
  extension: 'yml',
  format: 'yml',
  fields: [
    {
      label: 'Игра',
      name: 'gameSlug',
      widget: 'relation',
      collection: 'games',
      multiple: false,
      search_fields: ['title'],
      value_field: 'slug',
      display_fields: ['title'],
    },
    {
      label: 'Этапы',
      name: 'stages',
      widget: 'list',

      fields: [
        {
          label: 'Название',
          name: 'name',
          widget: 'string',
        },
        {
          label: 'Номер',
          name: 'num',
          widget: 'number',
        },
        {
          label: 'Описание',
          name: 'description',
          widget: 'markdown',
          required: false,
        },
        {
          label: 'Текущий баланс',
          name: 'currentCash',
          widget: 'number',
          required: false,
        },
        {
          label: 'Общий баланс',
          name: 'totalCash',
          widget: 'number',
          required: false,
        },
        {
          label: 'Планируется',
          name: 'isPlanned',
          widget: 'boolean',
          required: false,
        },
      ],
    },
  ],
};
