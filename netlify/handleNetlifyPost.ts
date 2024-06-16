import type { Handler, HandlerContext, HandlerEvent } from '@netlify/functions';

interface ErrorResponse {
  status: number;
  statusText: string;
}

export default function handleNetlifyPost<T>(
  fn: (
    data: T,
    event: HandlerEvent,
    context: HandlerContext
  ) => Promise<Response>
): Handler {
  return async (event: HandlerEvent, context: HandlerContext) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    try {
      const data: T = JSON.parse(event.body || '{}');

      const response = await fn(data, event, context);
      const responseBody = await response.json();

      return {
        statusCode: response.status,
        body: JSON.stringify(responseBody),
      };
    } catch (error: any) {
      console.error(error);

      const status = error.status || 500;
      const statusText = error.statusText || 'Unknown error on server';

      return {
        statusCode: status,
        body: JSON.stringify({ error: statusText }),
      };
    }
  };
}
