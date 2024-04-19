<script lang="ts">
  import { authFormSchema, type AuthFormSchema } from "../../schemas/authForm";
  import { toasterHub } from "../../store/toasterHub";
  import { formatErrors } from "../../utils/helpers";
  import { sendForm } from "../../utils/sendForm";
  import { getErrors } from "../../utils/zod";
  import BtnFirm from "../ui/BtnFirm.svelte";
  import FormField from "../ui/FormField.svelte";

  const formValuesInit: AuthFormSchema = {
    email: "",
    password: "",
  };

  let formValues = { ...formValuesInit };
  let submitting = false;
  let sendingAttempt = false;

  $: validationResult = authFormSchema.safeParse(formValues);
  $: errors = getErrors(validationResult);

  const handleSubmit = async () => {
    sendingAttempt = true;
    submitting = true;

    if (!validationResult.success) return (submitting = false);

    const { ok, error } = await sendForm({
      url: "/api/auth",
      values: formValues,
    }).finally(() => {
      submitting = false;
    });

    if (!ok) {
      toasterHub.set([error, ...$toasterHub]);
    } else {
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <FormField
    className="email"
    name="email"
    type="email"
    bind:value={formValues.email}
    placeholder="E-mail"
    error={errors?.email && sendingAttempt ? formatErrors(errors.email) : null}
  />
  <FormField
    className="password"
    name="password"
    type="password"
    bind:value={formValues.password}
    placeholder="Пароль"
    error={errors?.password && sendingAttempt
      ? formatErrors(errors.password)
      : null}
  />
  <BtnFirm type="submit" disabled={submitting}>
    {#if submitting}Вход...{:else}Войти{/if}
  </BtnFirm>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    gap: 30px;
  }
</style>
