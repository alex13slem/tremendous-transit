import type { CmsCollection } from 'decap-cms-core';

export const navLinksCollection: CmsCollection = {
  name: 'nav-links',
  label: 'Навигационные ссылки',
  folder: 'src/content/nav-links',
  create: true,
  slug: '{{fields.slug}}',
  extension: 'yml',
  format: 'yml',
  fields: [
    {
      label: 'Текст',
      name: 'text',
      widget: 'string',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
    },
    {
      label: 'Ссылка',
      name: 'href',
      widget: 'string',
    },
    {
      label: 'Очередь',
      name: 'order',
      widget: 'number',
    },
  ],
};
