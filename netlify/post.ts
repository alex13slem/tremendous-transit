import type { Context } from "@netlify/functions";

export function post<T>(fn: (data: T) => Promise<Response>) {
  return async (request: Request, context: Context) => {
    try {
      if (request.method.toUpperCase() !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
          status: 405,
        });
      }

      const data = await request.json();

      await fn(data);

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
