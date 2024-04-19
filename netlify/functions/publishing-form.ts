import type { PublishingFormSchema } from "../../src/schemas/forms";
import { notifyViaTelegramBot } from "../../src/utils/notifyViaTelegramBot";
import { post } from "../post";

const { TG_BOT_PUBLISHING_API_TOKEN, TG_BOT_PUBLISHING_CHAT_ID } = process.env;

async function sendBlogerForm(data: PublishingFormSchema) {
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

  let error = false;
  let statusText;

  if (!access.secure) {
    error = true;
    statusText =
      "There is no agreement with the privacy policy on the processing of personal data";
  }
  if (!access.user) {
    error = true;
    statusText = "There is no user agreement";
  }
  if (botFlaggedSpam) {
    error = true;
    statusText = "Spam detected";
  }

  if (error) {
    console.error(new Error(statusText));
    return Promise.reject({ status: 400, statusText });
  }

  const htmlMessage = /* html */ `<b>${selectedDir}</b>

<i>имя</i>: ${name}
<i>почта</i>: <a href="mailto:${email}">${email}</a>
<i>ссылка на геймплей</i>: ${
    linkPreview ? `<a href="${linkPreview}">${linkPreview}</a>` : "нет"
  }
<i>ссылка на билд</i>: <a href="${linkBuild}">${linkBuild}</a>
<i>описание</i>: ${info}`;

  const { status } = await notifyViaTelegramBot({
    htmlMessage,
    apiToken: TG_BOT_PUBLISHING_API_TOKEN,
    chatId: TG_BOT_PUBLISHING_CHAT_ID,
  });

  return new Response(JSON.stringify({ data }), { status });
}

export default post(sendBlogerForm);
