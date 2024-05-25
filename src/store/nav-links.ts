import { getCollection } from 'astro:content';
import type { NavLink } from '../types/project';
import { aboutUsArticles } from './about-us-articles';
import { devArticles, pubArticles } from './service-articles';

const navLinksCollection = await getCollection('nav-links');

const devArticlesNavLinks: NavLink[] = devArticles.get().map((article) => ({
  href: `/development/${article.slug}`,
  text: article.data.title,
  slug: article.slug,
}));

const pubArticlesNavLinks: NavLink[] = pubArticles.get().map((article) => ({
  href: `/publishing/${article.slug}`,
  text: article.data.title,
  slug: article.slug,
}));

const aboutUsNavLinks: NavLink[] = aboutUsArticles
  .get()
  .filter((a) => a.slug !== 'about-us')
  .map((article) => ({
    href: `/about-us/${article.slug}`,
    text: article.data.title,
    slug: article.slug,
  }));

const navLinks = [...navLinksCollection]
  .map(({ data }) => {
    if (data.slug === 'development') {
      return {
        ...data,
        href: devArticlesNavLinks.at(0)?.href,
      };
    }
    if (data.slug === 'publishing') {
      return {
        ...data,
        href: pubArticlesNavLinks.at(0)?.href,
      };
    }
    return data;
  })
  .sort((a, b) => (a.order || 0) - (b.order || 0));

const mobileMenuNavLinks = navLinks.map((siteLink) => ({
  ...siteLink,
  categoriesLinks:
    siteLink.slug === 'publishing'
      ? pubArticlesNavLinks
      : siteLink.slug === 'development'
      ? devArticlesNavLinks
      : siteLink.slug === 'about-us'
      ? aboutUsNavLinks
      : [],
}));

export {
  aboutUsNavLinks,
  devArticlesNavLinks,
  mobileMenuNavLinks,
  navLinks,
  pubArticlesNavLinks,
};
