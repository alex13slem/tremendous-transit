import type { CmsCollection } from 'decap-cms-core';

export const marketplacesCollection: CmsCollection = {
  name: 'marketplaces',
  label: 'Маркетплейсы',
  folder: 'src/content/marketplaces',
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
