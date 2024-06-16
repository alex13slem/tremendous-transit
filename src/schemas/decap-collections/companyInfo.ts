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
      // Название
      label: 'Название',
      name: 'title',
      widget: 'string',
    },
    {
      // Slug
      label: 'Slug',
      name: 'slug',
      widget: 'string',
    },
    {
      // О компании
      label: 'О компании',
      name: 'description',
      widget: 'text',
    },
    {
      // Почта
      label: 'Почты',
      name: 'emails',
      widget: 'list',
      fields: [
        {
          label: 'Название',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Почта',
          name: 'email',
          widget: 'string',
        },
      ],
    },
    {
      // Телефоны
      label: 'Телефоны',
      name: 'phones',
      widget: 'list',
      fields: [
        {
          label: 'Название',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Телефон',
          name: 'phone',
          widget: 'string',
        },
      ],
    },
    {
      // Адрес
      label: 'Адрес',
      name: 'address',
      widget: 'object',
      fields: [
        {
          label: 'Город',
          name: 'city',
          widget: 'string',
        },
        {
          label: 'Адрес',
          name: 'address',
          widget: 'string',
        },
      ],
    },
    {
      // Полезные ссылки
      label: 'Полезные ссылки',
      name: 'links',
      widget: 'list',
      fields: [
        {
          label: 'Название',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Ссылка',
          name: 'href',
          widget: 'string',
        },
      ],
    },
    {
      // Socials
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
      // Marketplaces
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
