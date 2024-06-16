import localforage from 'localforage';
import { writable } from 'svelte/store';
import { devArticles } from '../../../store/articles';
import Root from './index.svelte';

type DevelopmentFormValues = {
  access: boolean;
  botField: boolean;
  name: string | undefined;
  email: string | undefined;
  info: string | undefined;
  selectedService: string | undefined;
};

const formValuesInit: DevelopmentFormValues = {
  botField: false,
  access: false,
  name: undefined,
  email: undefined,
  info: undefined,
  selectedService: undefined,
};

const isSubmitted = writable<boolean>(false);

try {
  const localeSubmitted = await localforage.getItem('servFormSubmitted');
  if (localeSubmitted) {
    isSubmitted.set(true);
  }
} catch (error) {}

const servicesOptions = devArticles.map(({ slug, data: { title } }) => ({
  value: slug,
  text: title,
  disabled: false,
}));

export {
  Root,
  Root as ServicesForm,
  formValuesInit,
  isSubmitted,
  servicesOptions,
  type DevelopmentFormValues,
};
