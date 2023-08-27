import { assertEquals } from "https://deno.land/std@0.200.0/assert/mod.ts";
import { extractSessionId } from "./lib.ts";


Deno.test("extract session id from string", () => {
  assertEquals(extractSessionId("session=123"), 123);
  assertEquals(extractSessionId("session=123; "), 123);
  assertEquals(extractSessionId("a=1; session=123; b=2;"), 123);
  assertEquals(extractSessionId("a=1; session=123"), 123);
});