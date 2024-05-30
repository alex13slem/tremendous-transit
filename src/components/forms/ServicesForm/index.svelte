<script lang="ts">
  import localforage from 'localforage';
  import { servicesFormSchema } from '../../../schemas/forms';
  import { toasterHub } from '../../../store/toasterHub';
  import { formatErrors } from '../../../utils/helpers';
  import { sendForm } from '../../../utils/sendForm';
  import { getErrors } from '../../../utils/zod';
  import BtnFirm from '../../ui/BtnFirm.svelte';
  import FormField from '../../ui/FormField.svelte';
  import FormTextarea from '../../ui/FormTextarea.svelte';
  import { Select } from '../../ui/Select';
  import { servicesOptions, formValuesInit } from '.';
  import AccessBlock from '../../AccessBlock.svelte';
  import Fieldset from '../../ui/Fieldset.svelte';
  import Form from '../../ui/Form.svelte';
  import { onMount } from 'svelte';
  import { isOpen as modalIsOpen } from '../../modals/DevServModal';
  import { isSubmitted } from '.';
  import { urlQuery } from '@sveu/browser';

  const query = urlQuery('history');

  let formValues = { ...formValuesInit };
  let submitting = false;
  let sendingAttempt = false;
  let selectIsOpen: boolean;

  $: validationResult = servicesFormSchema.safeParse(formValues);
  $: errors = getErrors(validationResult);
  $: if (!formValues.info) formValues.info = null;

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    sendingAttempt = true;
    submitting = true;

    if (errors?.selectedService) selectIsOpen = true;
    if (!validationResult.success || !formValues.access)
      return (submitting = false);

    const { ok, error } = await sendForm({
      url: '/api/services-form',
      values: formValues,
    }).finally(() => {
      submitting = false;
    });

    if (!ok) {
      toasterHub.set([error, ...$toasterHub]);
    } else {
      toasterHub.set(['Ваша заявка отправлена!', ...$toasterHub]);
      sendingAttempt = false;
      formValues = { ...formValuesInit };
      await localforage.setItem('servFormSubmitted', 'true').then(() => {
        $isSubmitted = true;
        $modalIsOpen = false;
      });
    }
  };

  onMount(() => {
    if ($query['development-slug']) {
      formValues.selectedService =
        servicesOptions.find(
          (option) => option.slug === $query['development-slug']
        )?.value || null;
    }
  });
</script>

<Form on:submit={handleSubmit}>
  <input
    name="bot-field"
    aria-hidden="true"
    type="hidden"
    bind:value={formValues.botField}
  />
  <Fieldset>
    <FormField
      placeholder="Имя"
      name="name"
      bind:value={formValues.name}
      error={sendingAttempt && errors?.name ? formatErrors(errors.name) : null}
    />
    <FormField
      placeholder="E-mail"
      name="email"
      bind:value={formValues.email}
      error={sendingAttempt && errors?.email
        ? formatErrors(errors.email)
        : null}
    />
    <FormTextarea
      placeholder="Ссылка на документацию проекта или иные данные ..."
      name="info"
      bind:value={formValues.info}
      error={sendingAttempt && errors?.info && formValues.info
        ? formatErrors(errors.info)
        : null}
    />
  </Fieldset>

  <Select
    options={servicesOptions}
    bind:value={formValues.selectedService}
    placeholder="Выбрать направление"
    bind:open={selectIsOpen}
  />

  <AccessBlock
    name="access"
    bind:checked={formValues.access}
    invalid={sendingAttempt && !formValues.access}
  >
    Нажимая на кнопку, вы соглашаетесь с
    <a href="/">политикой конфиденциальности</a>
    и на обработку персональных данных
  </AccessBlock>

  <BtnFirm variant="contrast" disabled={submitting}>Отправить</BtnFirm>
</Form>
