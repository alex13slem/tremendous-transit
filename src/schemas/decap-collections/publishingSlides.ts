import type { CmsCollection } from 'decap-cms-core';

export const publishingSlidesCollection: CmsCollection = {
  name: 'publishing-slides',
  label: 'Слайды издательства',
  folder: 'src/content/publishing-slides',
  create: true,
  slug: '{{fields.slug}}',
  extension: 'yml',
  format: 'yml',
  fields: [
    {
      label: 'Заголовок',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
    },
    {
      label: 'Статья',
      name: 'article',
      widget: 'relation',
      collection: 'service-articles',
      search_fields: ['title'],
      value_field: '{{slug}}',
      display_fields: ['category', 'title'],
    },
    {
      label: 'Текст',
      name: 'text',
      widget: 'markdown',
    },
    {
      label: 'Изображение',
      name: 'image',
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
      label: 'Порядок в слайдах',
      name: 'order',
      widget: 'number',
      value_type: 'int',
    },
  ],
};
