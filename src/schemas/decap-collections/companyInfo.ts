import type { CmsCollection } from 'decap-cms-core';

export const companyInfoCollection: CmsCollection = {
  name: 'company-info',
  label: 'О компании',
  folder: 'src/content/company-info',
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
    {
      label: 'Соцсети',
      name: 'socials',
      widget: 'list',
      fields: [
        {
          label: 'Соцсеть',
          name: 'slug',
          widget: 'relation',
          collection: 'socials',
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
        {
          label: 'Порядок',
          name: 'order',
          widget: 'number',
          default: 0,
        },
      ],
    },
    {
      label: 'Мы на платформах',
      name: 'marketplaces',
      widget: 'list',
      fields: [
        {
          label: 'Платформа',
          name: 'slug',
          widget: 'relation',
          collection: 'game-marketplaces',
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
        {
          label: 'Порядок',
          name: 'order',
          widget: 'number',
          default: 0,
        },
      ],
    },
  ],
};
