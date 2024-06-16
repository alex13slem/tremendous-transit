import axios, { AxiosError } from 'axios';

function escapeMarkdown(text: string) {
  return text.replace(/([\_\*\[\]\(\)\~\`\>\#\+\-\=\|\{\}\.\!])/g, '\\$1');
}

export async function notifyViaTelegramBot({
  text,
  apiToken,
  chatId,
  parseMode = 'HTML',
}: {
  text: string;
  apiToken: string;
  chatId: string;
  parseMode?: 'HTML' | 'MarkdownV2';
}) {
  if (parseMode === 'MarkdownV2') {
    text = escapeMarkdown(text);
  }
  try {
    return await axios.post(
      `https://api.telegram.org/bot${apiToken}/sendMessage`,
      {
        chat_id: chatId,
        text: text,
      },
      {
        params: {
          parse_mode: parseMode,
        },
      }
    );
  } catch (error: any) {
    let status: number;
    let errorText: string;
    if (error instanceof AxiosError) {
      if (error.response) {
        const { error_code, description } = error.response.data;
        errorText = `Telegram server error: ${description}`;
        status = error_code;
      } else {
        errorText = `No Telegram response received`;
        status = 500;
      }
    } else {
      errorText = `Error setting up telegram response: ${error.message}`;
      status = 400;
    }

    return Promise.reject({ status, statusText: errorText });
  }
}
