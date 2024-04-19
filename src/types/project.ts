type Workplace = 'office' | 'remote';

// enum Social {
//   "twitter",
//   "facebook",
//   "vk",
//   "telegram",
// }

// export type GamePlatform = {
//   slug: string;
//   title: string;
//   iconify_id?: string;
//   games: Game[];
// };

export type Image = {
  src: string;
  alt: string;
};
export type ImageWPhd = Image & {
  src_phd: string;
};

export type Lang = {
  slug: string;
  name: string;
};

export type GameLang = {
  lang: Lang;
  voise: boolean;
  text: boolean;
};

// export type Game = {
//   name: string;
//   genres: GameCategory[];
//   developer: string;
//   publisher?: string;
//   dateOfRelease?: string;
//   description: string;
//   body: string;
//   langs: GameLang[];
//   thumbnail: Image;
//   hero_image: Image;
//   ad_banner: Image;
//   gallery?: Image[];
//   status?: GameStatus;
//   favorites?: GameFavorite;
//   platforms: GamePlatform[];
// };

export type Profession = {
  id: string;
  name: string;
};

type ListItem = {
  order: number;
  text: string;
};

export type Vacancy = {
  id: string;
  profession: Profession;
  description: string;
  officeCity: string;
  workplace: Workplace[];
  tasks: ListItem[];
  skills: ListItem[];
  proposes: ListItem[];
};

export type SocialLink = {
  slug: string;
  href: string;
  iconify_id?: string;
};

export type Artist = {
  id: string;
  name: string;
  profession: Profession;
  about: string;
  thumbnail: Image;
  contacts?: SocialLink[];
};

export type Stage = {
  name: string;
  num: number;
  description?: string;
  currentCash?: number;
  totalCash?: number;
  isPlanned?: boolean;
  gameId: string;
};

export type Link = { href: string; text: string };

export type NavLink = Link & { order?: number; slug: string };
