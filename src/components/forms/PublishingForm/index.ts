import localforage from 'localforage';
import { atom } from 'nanostores';
import { pubArticles } from '../../../store/service-articles';
import Root from './index.svelte';

type PublishingFormValues = {
  botField: boolean;
  access: {
    secure: boolean;
    user: boolean;
  };
  name: string | null;
  email: string | null;
  linkPreview: string | null;
  linkBuild: string | null;
  info: string | null;
  selectedDir: string | null;
};

const formValuesInit: PublishingFormValues = {
  botField: false,
  access: {
    secure: false,
    user: false,
  },
  name: null,
  email: null,
  linkPreview: null,
  linkBuild: null,
  info: null,
  selectedDir: null,
};

const isSubmitted = atom<boolean>(false);

try {
  const localeSubmitted = await localforage.getItem('pubFormSubmitted');

  if (localeSubmitted) {
    isSubmitted.set(true);
  }
} catch (error) {}

const publishingOptions = pubArticles
  .get()
  .map(({ slug, data: { title: value } }) => ({
    slug,
    value,
    disabled: false,
  }));

export {
  Root as PublishingForm,
  Root,
  formValuesInit,
  isSubmitted,
  publishingOptions,
  type PublishingFormValues,
};
