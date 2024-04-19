import type { CmsCollection } from 'decap-cms-core';

export const articlesCollection: CmsCollection = {
  name: 'service-articles',
  label: 'Статьи',
  folder: 'src/content/service-articles',
  create: true,
  slug: '{{fields.category}}-{{fields.slug}}',
  extension: 'md',
  format: 'frontmatter',
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
      hint: 'Уникальный идентификатор статьи',
      name: 'slug',
      widget: 'string',
    },
    {
      // Категория
      label: 'Категория',
      name: 'category',
      widget: 'relation',
      collection: 'service-categories',
      search_fields: ['title'],
      value_field: 'slug',
      display_fields: ['title'],
    },
    {
      // Дата публикации
      label: 'Дата публикации',
      name: 'date',
      widget: 'datetime',
      date_format: 'YYYY-MM-DD',
      time_format: 'HH:mm:ss',
      required: false,
    },
    {
      // Краткое описание
      label: 'Краткое описание',
      name: 'description',
      widget: 'markdown',
    },
    {
      // Подробное описание
      label: 'Подробное описание',
      name: 'body',
      widget: 'markdown',
    },
    {
      // Обложка
      label: 'Обложка',
      name: 'thumbnail',
      widget: 'object',
      fields: [
        {
          label: 'Источник',
          name: 'src',
          widget: 'image',
        },
        {
          label: 'Описание',
          name: 'alt',
          widget: 'string',
        },
      ],
    },
    {
      // Порядок в секции
      label: 'Порядок в секции',
      name: 'order',
      widget: 'number',
      value_type: 'int',
      required: false,
    },
    {
      // Галлерея
      label: 'Галлерея',
      name: 'gallery',
      widget: 'list',
      summary: '{{fields.alt}}',
      label_singular: 'Добавить картинку',
      fields: [
        {
          label: 'Источник',
          name: 'src',
          widget: 'image',
        },
        {
          label: 'Описание',
          name: 'alt',
          widget: 'string',
        },
      ],
    },
  ],
};
