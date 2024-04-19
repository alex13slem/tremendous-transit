import { getCollection } from 'astro:content';

const data = await getCollection('games');

const getDataByLang = (lang: 'ru' | 'en') =>
  data.filter(({ id }) => id.split('/').at(0) === lang);

export const games =
  'ru' === 'ru'
    ? getDataByLang('ru')
    : // : siteLang.get() === "en"
      //   ? getDataLang("en")
      [];

// export const topGames = games.filter(({ data }) =>
//   data.favorites?.includes("top"),
// );
// export const bestGames = games.filter(({ data }) =>
//   data.favorites?.includes("best"),
// );

// export const genresMap =
//   "ru" === "ru"
//     ? new Map(Object.entries(genresRus))
//     : new Map(Object.entries(genresRus));

// const gamesGenres = [...new Set(games.flatMap(({ data }) => data.genre))];

// export const genresOptions = gamesGenres.map((genre) => ({
//   slug: genre,
//   value: genresMap.get(genre) || "Добавь перевод",
//   disabled: false,
// }));

// const gamesPlatforms = games
//   .flatMap(({ data }) => data.platforms)
//   .filter((platform, idx, self) => {
//     return (
//       idx ===
//       self.findIndex(
//         (_platform) => _platform?.slug === platform?.slug && _platform?.href,
//       )
//     );
//   });

// export const platformsOptions = gamesPlatforms.map((platform) => ({
//   slug: platform?.slug || "",
//   value: platform?.title || "",
//   disabled: false,
// }));

// export const gameQrTargetId = atom("");
