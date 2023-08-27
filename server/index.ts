import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { extractSessionId } from "./lib.ts"

const app = new Application();

const key = "session";

app.use((ctx) => {
  const raw = ctx.request.headers.get('cookie');
  const sessionIdNum = extractSessionId(raw, new RegExp(`${key}=(.+);`))
  ctx.response.body = "Hello World!";
  ctx.response.headers.set('Set-Cookie', `${key}=${sessionIdNum + 1}; `);
});

await app.listen({ port: 8000 });