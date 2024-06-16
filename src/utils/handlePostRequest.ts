import type { APIContext } from 'astro';

export default function handleAstroPost<T>(
  fn: (data: T, ctx: APIContext) => Promise<Response>
) {
  return async (ctx: APIContext): Promise<Response> => {
    const { request } = ctx;
    try {
      if (request.method.toUpperCase() !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
          status: 405,
        });
      }

      const data: T = await request.json();

      return await fn(data, ctx);
    } catch (error: any) {
      console.error(error);

      const status = error.status || 500;
      const statusText = error.statusText || 'Unknown error on server';

      return new Response(JSON.stringify({ error: statusText }), {
        status,
        statusText,
      });
    }
  };
}
