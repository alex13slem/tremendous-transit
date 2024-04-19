import type { CmsCollection } from 'decap-cms-core';

export const pagesCollection: CmsCollection = {
  label: 'Страницы',
  name: 'pages',
  files: [
    {
      label: 'Вакансии',
      name: 'vacancy',
      file: 'src/pages/career/_data.yml',
      fields: [
        {
          label: 'SEO',
          name: 'seo',
          widget: 'object',
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'text',
            },
          ],
        },
      ],
    },
  ],
};
