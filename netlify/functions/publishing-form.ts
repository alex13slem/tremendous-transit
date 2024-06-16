import type { HandlerContext, HandlerEvent } from '@netlify/functions';
import type { PublishingFormSchema } from '../../src/schemas/forms';
import { notifyViaTelegramBot } from '../../src/utils/notifyViaTelegramBot';
import handleNetlifyPost from '../handleNetlifyPost';

const { TG_BOT_PUBLISHING_API_TOKEN, TG_BOT_PUBLISHING_CHAT_ID } = process.env;

async function sendPublishingForm(
  data: PublishingFormSchema,
  event: HandlerEvent,
  context: HandlerContext
): Promise<Response> {
  const {
    botFlaggedSpam,
    access,
    name,
    email,
    info,
    linkBuild,
    selectedDir,
    linkPreview,
  } = data;

  if (!access.secure) {
    const statusText =
      'There is no agreement with the privacy policy on the processing of personal data';
    console.error(new Error(statusText));
    return new Response(JSON.stringify({ error: statusText }), {
      status: 400,
      statusText,
    });
  }

  if (!access.user) {
    const statusText = 'There is no user agreement';
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
<b>Заявка на публикацию:</b> ${selectedDir}

<b>Имя</b>: ${name}
<b>Почта</b>: <a href="mailto:${email}">${email}</a>
<b>Ссылка на геймплей</b>: ${
    linkPreview ? `<a href="${linkPreview}">${linkPreview}</a>` : 'нет'
  }
<b>Ссылка на билд</b>: <a href="${linkBuild}">${linkBuild}</a>
<b>Описание</b>: ${info}`;

  try {
    const { status } = await notifyViaTelegramBot({
      text: htmlMessage,
      apiToken: TG_BOT_PUBLISHING_API_TOKEN!,
      chatId: TG_BOT_PUBLISHING_CHAT_ID!,
    });

    return new Response(JSON.stringify({ data }), { status });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
    });
  }
}

export const handler = handleNetlifyPost(sendPublishingForm);
