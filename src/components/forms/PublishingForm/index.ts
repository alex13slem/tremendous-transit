import localforage from 'localforage';
import { writable } from 'svelte/store';
import { pubArticles } from '../../../store/articles';
import Root from './index.svelte';

type PublishingFormValues = {
  botField: boolean;
  access: {
    secure: boolean;
    user: boolean;
  };
  name: string | undefined;
  email: string | undefined;
  linkPreview: string | undefined;
  linkBuild: string | undefined;
  info: string | undefined;
  selectedDir: string | undefined;
};

const formValuesInit: PublishingFormValues = {
  botField: false,
  access: {
    secure: false,
    user: false,
  },
  name: undefined,
  email: undefined,
  linkPreview: undefined,
  linkBuild: undefined,
  info: undefined,
  selectedDir: undefined,
};

const isSubmitted = writable<boolean>(false);

try {
  const localeSubmitted = await localforage.getItem('pubFormSubmitted');

  if (localeSubmitted) {
    isSubmitted.set(true);
  }
} catch (error) {}

const publishingOptions = pubArticles.map(({ slug, data: { title } }) => ({
  value: slug,
  text: title,
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
