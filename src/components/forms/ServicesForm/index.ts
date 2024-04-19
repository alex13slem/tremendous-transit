import { devArticles } from '../../../store/service-articles';
import Root from './index.svelte';

type DevelopmentFormValues = {
  access: boolean;
  botField: boolean;
  name: string | null;
  email: string | null;
  info: string | null;
  selectedService: string | null;
};

const formValuesInit: DevelopmentFormValues = {
  botField: false,
  access: false,
  name: null,
  email: null,
  info: null,
  selectedService: null,
};

const servicesOptions = devArticles
  .get()
  .map(({ slug, data: { title: value } }) => ({
    slug,
    value,
    disabled: false,
  }));

export {
  Root,
  Root as ServicesForm,
  formValuesInit,
  servicesOptions,
  type DevelopmentFormValues,
};