import type { BlogersFormSchema } from "../../src/schemas/forms";
import { notifyViaTelegramBot } from "../../src/utils/notifyViaTelegramBot";
import { post } from "../post";

const { TG_BOT_BLOGERS_API_TOKEN, TG_BOT_BLOGERS_CHAT_ID } = process.env;

async function sendBlogerForm(data: BlogersFormSchema) {
  const { botFlaggedSpam, access, name, email, fromLink, contact, comment } =
    data;

  let error = false;
  let statusText;

  if (!access) {
    error = true;
    statusText =
      "There is no agreement with the privacy policy on the processing of personal data";
  }
  if (botFlaggedSpam) {
    error = true;
    statusText = "Spam detected";
  }

  if (error) {
    console.error(new Error(statusText));
    return Promise.reject({ status: 400, statusText });
  }

  const htmlMessage = /* html */ `<i>имя</i>: ${name}
<i>почта</i>: <a href="mailto:${email}">${email}</a>
<i>откуда</i>: <a href="${fromLink}">${fromLink}</a>
<i>способ связи</i>: ${contact || "нет"}
<i>комментарий</i>: ${comment || "нет"}`;

  const { status } = await notifyViaTelegramBot({
    htmlMessage,
    apiToken: TG_BOT_BLOGERS_API_TOKEN,
    chatId: TG_BOT_BLOGERS_CHAT_ID,
  });

  return new Response(JSON.stringify({ data }), { status });
}

export default post(sendBlogerForm);
