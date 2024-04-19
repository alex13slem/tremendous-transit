import type { CmsCollection } from 'decap-cms-core';

export const languagesCollection: CmsCollection = {
  name: 'languages',
  label: 'Языки',
  folder: 'src/content/languages',
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
  ],
};
