import type { CmsCollection } from 'decap-cms-core';

export const gameStagesCollection: CmsCollection = {
  name: 'game-stages',
  label: 'Игровые этапы',
  folder: 'src/content/game-stages',
  create: true,
  slug: '{{title}}',
  extension: 'yml',
  format: 'yml',
  fields: [
    {
      label: 'Игра',
      name: 'title',
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
          label: 'Краундфайдинговые платформы',
          name: 'crowdfundingPlatforms',
          widget: 'list',
          required: false,
          fields: [
            {
              label: 'Платформа',
              name: 'slug',
              widget: 'relation',
              collection: 'crowdfunding-platforms',
              multiple: false,
              search_fields: ['title'],
              value_field: 'slug',
              display_fields: ['title'],
            },
            {
              label: 'Ссылка',
              name: 'href',
              widget: 'string',
            },
          ],
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
