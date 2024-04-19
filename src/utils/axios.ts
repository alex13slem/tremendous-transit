import { AxiosError } from "axios";

export function getAxiosErrorText(error: any, url: string) {
  let message: string;
  let errorText: string;
  if (error instanceof AxiosError) {
    if (error.response) {
      if (error.response.status === 500) {
        message = `Ошибка сервера`;
        errorText = `[API Error]: ${error.message}`;
      } else {
        message = `Ошибка отправки`;
        errorText = `[API Error]: ${error.response.data}`;
      }
    } else {
      message = `Сервер не отвечает`;
      errorText = `[Network Error]: No Response Received At ${url}`;
    }
  } else {
    message = `Критическая ошибка`;
    errorText = "[Non-HTTP Error]:" + (error.message || error);
  }

  return { errorText, message };
}
