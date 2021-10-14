import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.111.0/testing/asserts.ts";
import { Lexer } from "./lexer.ts";

Deno.test("Lexer preserves existing flags on regular expressions", () => {
  const lexer = new Lexer(
    [/abc/i, "xyz"],
  );
  const t = lexer.matchToken("ABC", -1);
  assertNotEquals(t, null);
  assertEquals(t?.token, "xyz");
  assertEquals(t?.text, "ABC");
});

Deno.test("Lexer does not break if u and y flags are used", () => {
  const lexer = new Lexer(
    [/abc/uy, "xyz"],
  );
  const t = lexer.matchToken("abc", -1);
  assertNotEquals(t, null);
});
