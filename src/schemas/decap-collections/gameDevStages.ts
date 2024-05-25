import type { CmsCollection } from 'decap-cms-core';

export const gameDevStagesCollection: CmsCollection = {
  name: 'game-dev-stages',
  label: 'Этапы разработки',
  folder: 'src/content/game-dev-stages',
  create: true,
  slug: '{{gameSlug}}-{{fields.slug}}',
  extension: 'yml',
  format: 'yml',
  summary: '{{gameSlug}} - {{fields.title}}',
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
      hint: 'Уникальный идентификатор этапа',
    },
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
      label: 'Краудфандинг платформы',
      name: 'crowdfundingPlatforms',
      widget: 'list',
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
      label: 'Планируется',
      name: 'isPlanned',
      widget: 'boolean',
      required: false,
    },
  ],
};
