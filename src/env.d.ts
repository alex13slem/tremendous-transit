/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare namespace NodeJS {
  export interface ProcessEnv {
    TG_BOT_BLOGERS_API_TOKEN: string;
    TG_BOT_BLOGERS_CHAT_ID: string;

    TG_BOT_SERVICES_API_TOKEN: string;
    TG_BOT_SERVICES_CHAT_ID: string;

    TG_BOT_PUBLISHING_API_TOKEN: string;
    TG_BOT_PUBLISHING_CHAT_ID: string;

    PORT: string;
  }
}
