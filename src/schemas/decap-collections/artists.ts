import type { CmsCollection } from 'decap-cms-core';

export const artistsCollection: CmsCollection = {
  name: 'artists',
  label: 'Труженики',
  folder: 'src/content/artists',
  create: true,
  slug: '{{fields.slug}}',
  extension: 'yml',
  format: 'yml',
  fields: [
    {
      // Имя
      label: 'Имя',
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
      // О труженике
      label: 'О труженике',
      name: 'about',
      widget: 'string',
    },
    {
      // Изображение
      label: 'Изображение',
      name: 'image',
      widget: 'image',
    },
    {
      // Контакты
      label: 'Контакты',
      name: 'contacts',
      widget: 'list',
      fields: [
        {
          label: 'Ссылка',
          name: 'href',
          widget: 'string',
        },
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
      ],
    },
    {
      // Профессия
      label: 'Профессия',
      name: 'profession',
      widget: 'relation',
      collection: 'professions',
      multiple: true,
      search_fields: ['title'],
      value_field: 'slug',
      display_fields: ['title'],
    },
  ],
};
