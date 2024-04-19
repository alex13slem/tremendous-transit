import type { CmsCollection } from 'decap-cms-core';

export const socialsCollection: CmsCollection = {
  name: 'socials',
  label: 'Соцсети',
  folder: 'src/content/socials',
  create: true,
  slug: '{{title}}',
  extension: 'yml',
  format: 'yml',
  fields: [
    {
      label: 'Название',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Ссылка',
      name: 'link',
      widget: 'string',
    },
    {
      label: 'Очередь',
      name: 'order',
      widget: 'number',
    },
  ],
};
