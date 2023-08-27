import { assertEquals } from "https://deno.land/std@0.200.0/assert/mod.ts";
import { extractSessionId } from "./lib.ts";

Deno.test("extract session id from string", () => {
  assertEquals(extractSessionId("session=123; ", new RegExp("session=(.+);")), 123);
});