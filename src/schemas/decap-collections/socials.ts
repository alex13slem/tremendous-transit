import type { CmsCollection } from 'decap-cms-core';

export const socialsCollection: CmsCollection = {
  name: 'socials',
  label: 'Соцсети',
  folder: 'src/content/socials',
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
      label: 'Iconify ID',
      name: 'iconifyId',
      widget: 'string',
    },
  ],
};
