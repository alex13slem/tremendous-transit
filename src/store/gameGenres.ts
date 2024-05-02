import { getCollection } from 'astro:content';

export const gamesGenres = (await getCollection('game-genres')).map(
  (g) => g.data
);
// const genresMap = new Map(
//   gamesGenres.map((genre) => [genre.slug, genre.title])
// );
export const getGenreTitle = (slug: string) =>
  gamesGenres.find((g) => g.slug === slug)!.title;
