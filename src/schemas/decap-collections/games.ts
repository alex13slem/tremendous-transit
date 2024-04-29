import type { CmsCollection } from 'decap-cms-core';

export const gamesCollection: CmsCollection = {
  name: 'games',
  label: 'Игры',
  folder: 'src/content/games',
  create: true,
  extension: 'yml',
  format: 'yml',

  slug: '{{fields.slug}}',
  fields: [
    {
      // Название
      label: 'Название',
      hint: '(до 30 символов)',
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
      // Краткое описание
      label: 'Краткое описание',
      hint: '(до 300 символов)',
      name: 'description',
      widget: 'markdown',
      default: `Банальные, но неопровержимые выводы, а также независимые государства призывают нас к новым свершениям, которые, в свою очередь, должны быть преданы социально-демократической анафеме. Противоположная точка зрения подразумевает, что некоторые особенности внутренней политики будут функционально разнесены на независимые элементы.`,
    },
    {
      // Подробное описание
      label: 'Подробное описание',
      hint: '(до 4000 символов)',
      name: 'body',
      widget: 'markdown',
      default: `## Заголовок \n Текст \n### Подзаголовок \n Текст`,
    },
    {
      // Жанр
      label: 'Жанр',
      name: 'genre',
      widget: 'relation',
      collection: 'game-genres',
      multiple: true,
      search_fields: ['title'],
      value_field: 'slug',
      display_fields: ['title'],
    },
    {
      // Тип
      label: 'Тип',
      name: 'type',
      widget: 'select',
      options: [
        { value: 'isMobile', label: 'Мобильная игра' },
        { value: 'isBrowser', label: 'Браузерная игра' },
        { value: 'isDesktop', label: 'Десктопная игра' },
        { value: 'isConsole', label: 'Консольная игра' },
      ],
    },
    {
      label: 'Ссылка на игру (если браузерная)',
      name: 'browserLink',
      widget: 'string',
      required: false,
    },
    {
      // Разработчик
      label: 'Разработчик',
      name: 'developer',
      widget: 'relation',
      collection: 'developers',
      multiple: false,
      search_fields: ['title'],
      value_field: 'slug',
      display_fields: ['title'],
    },
    {
      // Издатель
      label: 'Издатель',
      name: 'publisher',
      widget: 'relation',
      collection: 'publishers',
      multiple: false,
      search_fields: ['title'],
      value_field: 'slug',
      display_fields: ['title'],
    },
    {
      // Дата выхода
      label: 'Дата выхода',
      name: 'releaseDate',
      widget: 'datetime',
      date_format: 'DD-MM-YYYY',
      default: '',
      picker_utc: true,
    },
    {
      // Комманда разработчиков
      label: 'Комманда разработчиков',
      name: 'team',
      widget: 'relation',
      collection: 'artists',
      multiple: true,
      search_fields: ['title'],
      value_field: 'slug',
      display_fields: ['title'],
      required: false,
    },
    {
      // Переводы
      label: 'Переводы',
      name: 'translations',
      widget: 'list',
      fields: [
        {
          label: 'Язык',
          name: 'lang',
          widget: 'relation',
          collection: 'languages',
          multiple: false,
          search_fields: ['title'],
          value_field: 'slug',
          display_fields: ['title'],
        },
        {
          label: 'Есть озвучка',
          name: 'voice',
          widget: 'boolean',
          default: false,
        },
        {
          label: 'Язык интерфейса',
          name: 'interface',
          widget: 'boolean',
          default: false,
        },
      ],
    },
    {
      // Площадки
      label: 'Игровые площадки',
      name: 'platforms',
      widget: 'list',
      fields: [
        {
          label: 'Площадка',
          name: 'marketplace',
          widget: 'relation',
          collection: 'game-marketplaces',
          multiple: false,
          search_fields: ['title'],
          value_field: 'slug',
          display_fields: ['title'],
        },
        {
          label: 'Ссылка',
          name: 'href',
          widget: 'string',
        },
        {
          label: 'appId',
          name: 'appId',
          hint: 'Идентификатор приложения',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      // Статус
      label: 'Статус',
      name: 'status',
      widget: 'relation',
      collection: 'games-statuses',
      search_fields: ['title'],
      value_field: 'value',
      display_fields: ['title'],
      required: false,
    },
    {
      // В избранном
      label: 'В избранном',
      name: 'favorites',
      widget: 'relation',
      collection: 'games-favorites',
      multiple: true,
      search_fields: ['title'],
      value_field: 'value',
      display_fields: ['title'],
    },
    {
      // Картинка для описания
      label: 'Картинка для описания',
      hint: '(Размер 1024 х 500) - строгие требования',
      name: 'thumbnail',
      widget: 'image',
    },
    {
      // Шапка для секции
      label: 'Шапка для секции',
      hint: '(1920 х 760) - строгие требования',
      name: 'heroImage',
      widget: 'object',
      fields: [
        {
          label: 'Источник',
          name: 'src',
          widget: 'image',
        },
        {
          label: 'Загрузка',
          hint: 'max 200kB',
          name: 'srcPlaceholder',
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
      // Рекламный баннер
      label: 'Рекламный баннер',
      hint: '(16:9 Лучше 1920х1080) - строгие требования',
      name: 'adBanner',
      widget: 'object',
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
      // Галлерея
      label: 'Галлерея',
      hint: '(от 4 до 10, Размер 16:9 или 9:16, длина каждой стороны – от 320 до 3840) - строгие требования',
      name: 'gallery',
      widget: 'list',
      summary: '{{fields.alt}}',
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
  ],
};
