import { getCollection } from 'astro:content';

export const gamesStages = (await getCollection('game-stages')).map(
  (s) => s.data
);
