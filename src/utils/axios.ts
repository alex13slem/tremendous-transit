import { AxiosError } from 'axios';

export function getAxiosErrorText(error: any, url: string) {
  let message: string;
  let errorText: string;
  if (error instanceof AxiosError) {
    if (error.response) {
      message = `Ошибка сервера`;
      errorText = `[API Error]: ${error.message}`;
    } else {
      message = `Сервер не отвечает`;
      errorText = `[Network Error]: No Response Received At ${url}`;
    }
  } else {
    message = `Критическая ошибка`;
    errorText = '[Non-HTTP Error]:' + (error.message || error);
  }

  return { errorText, message };
}
