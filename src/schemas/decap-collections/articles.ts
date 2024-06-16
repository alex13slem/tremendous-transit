import type { CmsCollection } from 'decap-cms-core';

export const articlesCollection: CmsCollection = {
  name: 'articles',
  label: 'Статьи',
  folder: 'src/content/articles',
  create: true,
  slug: '{{fields.category}}-{{fields.slug}}',
  summary: '{{fields.category}} • {{fields.title}}',
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
      collection: 'article-categories',
      search_fields: ['title'],
      value_field: 'slug',
      display_fields: ['title'],
    },
    {
      // Дата публикации
      label: 'Дата публикации',
      name: 'date',
      widget: 'datetime',
      required: false,
    },
    {
      // Краткое описание
      label: 'Краткое описание',
      name: 'description',
      hint: 'До 200 символов',
      widget: 'markdown',
      required: false,
      default: '',
    },
    {
      // Подробное описание
      label: 'Подробное описание',
      name: 'body',
      widget: 'markdown',
      hint: 'До 4000 символов',
    },
    {
      // Обложка
      label: 'Обложка',
      name: 'thumbnail',
      widget: 'object',
      required: false,
      fields: [
        {
          label: 'Источник',
          name: 'src',
          widget: 'image',
          required: false,
        },
        {
          label: 'Описание',
          name: 'alt',
          widget: 'string',
          required: false,
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
      default: 0,
    },
    {
      // Галлерея
      label: 'Галлерея',
      name: 'gallery',
      widget: 'list',
      summary: '{{fields.alt}}',
      required: false,
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
    {
      // Ссылки на кнопки
      label: 'Ссылки на кнопки',
      name: 'buttons',
      widget: 'list',
      summary: '{{fields.text}}',
      required: false,
      label_singular: 'Добавить ссылку',
      fields: [
        {
          label: 'Текст',
          name: 'text',
          widget: 'string',
        },
        {
          label: 'Ссылка',
          name: 'link',
          widget: 'string',
        },
      ],
    },
  ],
};
