<script lang="ts">
  import localforage from 'localforage';
  import { publishingFormSchema } from '../../../schemas/forms';
  import { toasterHub } from '../../../store/toasterHub';
  import { formatErrors } from '../../../utils/helpers';
  import { sendForm } from '../../../utils/sendForm';
  import BtnFirm from '../../ui/BtnFirm.svelte';
  import FormField from '../../ui/FormField.svelte';
  import FormTextarea from '../../ui/FormTextarea.svelte';
  import { getErrors } from '../../../utils/zod';
  import { formValuesInit, publishingOptions } from '.';
  import { Select } from '../../ui/Select';
  import AccessBlock from '../../AccessBlock.svelte';
  import Fieldset from '../../ui/Fieldset.svelte';
  import Form from '../../ui/Form.svelte';
  import { onMount } from 'svelte';
  import { isSubmitted } from '.';

  import { isOpen as modalIsOpen } from '../../modals/PublishingModal';
  import { urlQuery } from '@sveu/browser';

  const query = urlQuery('history');

  let formValues = { ...formValuesInit };
  let submitting = false;
  let sendingAttempt = false;

  $: validationResult = publishingFormSchema.safeParse(formValues);
  $: errors = getErrors(validationResult);
  $: if (!formValues.linkPreview) formValues.linkPreview = null;

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    sendingAttempt = true;
    submitting = true;

    if (
      !validationResult.success ||
      !Object.values(formValues.access).every(Boolean)
    )
      return (submitting = false);

    const { ok, error } = await sendForm({
      url: '/api/publishing-form',
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
      await localforage.setItem('pubFormSubmitted', 'true').then(() => {
        $isSubmitted = true;
        $modalIsOpen = false;
      });
    }
  };

  onMount(() => {
    if ($query['publishing-slug']) {
      formValues.selectedDir =
        publishingOptions.find(
          (option) => option.slug === $query['publishing-slug']
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
    <FormField
      placeholder="Ссылка на трейлер или запись геймплея (не обязательно)"
      name="linkPreview"
      bind:value={formValues.linkPreview}
      error={sendingAttempt && errors?.linkPreview && formValues.linkPreview
        ? formatErrors(errors.linkPreview)
        : null}
    />
    <FormField
      placeholder="Ссылка на билд"
      name="linkBuild"
      bind:value={formValues.linkBuild}
      error={sendingAttempt && errors?.linkBuild
        ? formatErrors(errors.linkBuild)
        : null}
    />
    <FormTextarea
      placeholder="Описание игры"
      name="info"
      bind:value={formValues.info}
      error={sendingAttempt && errors?.info ? formatErrors(errors.info) : null}
    />
  </Fieldset>

  <Select
    options={publishingOptions}
    bind:value={formValues.selectedDir}
    placeholder="Выбрать направление"
  />

  <AccessBlock
    name="access_secure"
    bind:checked={formValues.access.secure}
    invalid={sendingAttempt && !formValues.access.secure}
  >
    Нажимая на кнопку, вы соглашаетесь с
    <a href="/">политикой конфиденциальности</a>
    и на обработку персональных данных
  </AccessBlock>

  <AccessBlock
    name="access_user"
    bind:checked={formValues.access.user}
    invalid={sendingAttempt && !formValues.access.user}
  >
    Нажимая на кнопку, вы соглашаетесь с <a href="/"
      >пользовательстким соглашением</a
    >
  </AccessBlock>

  <BtnFirm variant="contrast" disabled={submitting}>Отправить</BtnFirm>
</Form>
