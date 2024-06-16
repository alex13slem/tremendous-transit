import type { HandlerContext, HandlerEvent } from '@netlify/functions';
import type { BlogersFormSchema } from '../../src/schemas/forms';
import { notifyViaTelegramBot } from '../../src/utils/notifyViaTelegramBot';
import handleNetlifyPost from '../handleNetlifyPost';

const { TG_BOT_BLOGERS_API_TOKEN, TG_BOT_BLOGERS_CHAT_ID } = process.env;

async function sendBlogerForm(
  data: BlogersFormSchema,
  event: HandlerEvent,
  context: HandlerContext
): Promise<Response> {
  const { botFlaggedSpam, access, name, email, fromLink, contact, comment } =
    data;

  if (!access) {
    const statusText =
      'There is no agreement with the privacy policy on the processing of personal data';
    console.error(new Error(statusText));
    return new Response(JSON.stringify({ error: statusText }), {
      status: 400,
      statusText,
    });
  }

  if (botFlaggedSpam) {
    const statusText = 'Spam detected';
    console.error(new Error(statusText));
    return new Response(JSON.stringify({ error: statusText }), {
      status: 400,
      statusText,
    });
  }

  const htmlMessage = /* html */ `
<b>Заявка от блогера</b>:

<b>Имя</b>: ${name}
<b>Почта</b>: <a href="mailto:${email}">${email}</a>
<b>Откуда</b>: <a href="${fromLink}">${fromLink}</a>
<b>Способ связи</b>: ${contact || 'нет'}
<b>Комментарий</b>: ${comment || 'нет'}
  `;

  try {
    const { status } = await notifyViaTelegramBot({
      text: htmlMessage,
      apiToken: TG_BOT_BLOGERS_API_TOKEN!,
      chatId: TG_BOT_BLOGERS_CHAT_ID!,
    });

    return new Response(JSON.stringify({ data }), { status });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
    });
  }
}

export const handler = handleNetlifyPost(sendBlogerForm);
