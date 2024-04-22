import type { CmsCollection } from 'decap-cms-core';
export const vacanciesCollection: CmsCollection = {
  name: 'vacancies',
  label: 'Вакансии',
  folder: 'src/content/vacancies',
  create: true,
  slug: '{{fields.info.name}}',
  extension: 'yml',
  format: 'yml',
  fields: [
    {
      label: 'Заголовок',
      name: 'title',
      widget: 'string',
      hint: 'Для удобства поиска',
    },
    {
      label: 'Базовая информация',
      name: 'info',
      widget: 'object',
      summary: '{{fields.name}}',
      fields: [
        {
          label: 'Профессия',
          name: 'profession',
          widget: 'relation',
          collection: 'professions',
          search_fields: ['title'],
          value_field: 'title',
          multiple: true,
          display_fields: ['title'],
        },
        {
          label: 'Уровень',
          name: 'level',
          widget: 'select',
          options: ['Intern', 'Junior', 'Middle', 'Senior', 'Lead'],
        },
        {
          label: 'Описание',
          name: 'description',
          widget: 'markdown',
        },
        {
          label: 'Зарплата',
          name: 'salary',
          widget: 'number',
          value_type: 'int',
          required: false,
        },
      ],
    },
    {
      label: 'Место работы',
      name: 'workplace',
      widget: 'object',
      fields: [
        {
          label: 'Город',
          name: 'city',
          widget: 'relation',
          required: false,
          collection: 'cities',
          search_fields: ['slug'],
          value_field: 'slug',
          display_fields: ['title'],
        },
        {
          label: 'Удалённая работа',
          name: 'remote',
          widget: 'boolean',
        },
      ],
    },
    {
      label: 'Ссылки',
      name: 'links',
      widget: 'object',
      fields: [
        {
          label: 'Тестовое',
          name: 'test',
          widget: 'string',
          required: false,
        },
        {
          label: 'Форма',
          name: 'form',
          widget: 'string',
        },
      ],
    },

    {
      label: 'Требования',
      name: 'requirements',
      widget: 'list',
      label_singular: 'Требование',
      fields: [
        {
          label: 'Требование',
          name: 'text',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Задачи',
      name: 'tasks',
      widget: 'list',
      label_singular: 'Задача',
      fields: [
        {
          label: 'Задача',
          name: 'text',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Предложения',
      name: 'offers',
      widget: 'list',
      label_singular: 'Предложение',
      fields: [
        {
          label: 'Предложение',
          name: 'text',
          widget: 'string',
        },
      ],
    },
  ],
};
