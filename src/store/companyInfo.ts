import { getCollection } from 'astro:content';
import type { CompanyInfoSelect } from '../schemas/companyInfo';

const companyInfoCollection = await getCollection('company-info');
const marketplaces = await getCollection('game-marketplaces');

export const companyInfo = companyInfoCollection
  .filter((c) => c.data.slug === 'eisvil')
  .map((c) => c.data)[0];

export const companyInfoWRelations: CompanyInfoSelect = {
  ...companyInfo,
  marketplaces: companyInfo.marketplaces.map((marketplace) => ({
    ...marketplace,
    ...marketplaces.find((m) => m.data.slug === marketplace.slug)!.data,
  })),
};
