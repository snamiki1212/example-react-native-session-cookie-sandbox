import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { extractSessionId, buildNextSessionId } from "./lib.ts"

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";

  {
    // cookie
    const raw = ctx.request.headers.get('cookie');
    const reqSessionId = extractSessionId(raw);
    const resSessionId = buildNextSessionId(reqSessionId);
    ctx.response.headers.set('Set-Cookie', resSessionId);
  }
});

await app.listen({ port: 8000 });