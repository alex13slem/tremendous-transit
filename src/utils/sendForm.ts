import axios from "axios";
import { getAxiosErrorText } from "./axios";

export type SubmittingStatus = {
  ok: boolean;
  error: string;
};

type SendFormOptions<Values> = {
  url: string;
  values: Values;
};

/**
 * @param {Object} options
 * @param {String} options.url URL для отправки формы
 * @param {FormValues} options.values поля формы
 * @return {SubmittingStatus} { ok, error } - Состояние отправки
 */
export const sendForm = async <FormValues>({
  url,
  values,
}: SendFormOptions<FormValues>): Promise<SubmittingStatus> => {
  try {
    await axios.post(url, values);
    return { ok: true, error: "" };
  } catch (error) {
    const { errorText, message } = getAxiosErrorText(error, url);
    console.error(new Error(errorText));
    return { ok: false, error: message };
  }
};
