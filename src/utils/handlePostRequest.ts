import type { APIContext } from "astro";

export function handlePostRequest<T>(
  fn: (data: T, ctx: APIContext) => Promise<Response>,
) {
  return async (ctx: APIContext): Promise<Response> => {
    const { request } = ctx;
    try {
      if (request.method.toUpperCase() !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
          status: 405,
        });
      }

      const data = await request.json();

      await fn(data, ctx);

      return new Response(JSON.stringify({ data }));
    } catch (error: any) {
      if (error.status) {
        const { status, statusText } = error;

        console.error(new Error(statusText));

        return new Response(JSON.stringify({ error: statusText }), {
          status,
          statusText,
        });
      }

      console.error(new Error("Unknown error on server"));
      return new Response(
        JSON.stringify({ error: "Unknown error on server" }),
        {
          status: 500,
          statusText: error.message || error,
        },
      );
    }
  };
}
