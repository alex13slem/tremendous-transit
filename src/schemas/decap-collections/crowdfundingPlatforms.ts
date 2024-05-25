import type { CmsCollection } from 'decap-cms-core';

export const crowdfundingPlatformsCollection: CmsCollection = {
  name: 'crowdfunding-platforms',
  label: 'Краудфандинг платформы',
  folder: 'src/content/crowdfunding-platforms',
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
