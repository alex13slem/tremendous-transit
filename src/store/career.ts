import { getCollection } from 'astro:content';
import type { VacancyWorkplace } from '../schemas/vacancySchema';

export const cities = await getCollection('cities');
export const professions = await getCollection('professions');

export const getVacancies = async () =>
  await getCollection('vacancies').then((collection) =>
    collection.map(({ data: d, id }) => ({
      ...d,
      slug: id,
      workplace: {
        ...d.workplace,
        city: cities.find(({ id }) => id === d.workplace.city)?.data,
      },
    }))
  );

/**
 * Returns a string representing the workplace based on the given VacancyWorkplace object.
 *
 * @param {VacancyWorkplace} workplace - The VacancyWorkplace object to extract workplace information from.
 * @return {string} A string representing the workplace information.
 */
export const getWorkplaceString = (workplace: VacancyWorkplace): string =>
  (workplace.remote ? 'Удалённо' : '') +
  (workplace.city
    ? (workplace.remote ? ' // ' : '') + `Офиc (г. ${workplace.city.title})`
    : '');
