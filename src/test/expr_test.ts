/**
 * ---
 * {
 *  "visualizers": [
 *      {
 *          "path": "./src/visualizers/run-expr-tests.ts",
 *          "includeStyles": true
 *      }
 *  ]
 * }
 * ---
 *
 * # Testing the Expression Parser
 *
 * The easiest way to test our parser is to manually input some expressions
 * (press `Enter` to calculate).
 *
 * <<v:calculator>>
 *
 * But this becomes tedious soon, so let's write some automatic tests as well.
 * We use the `test` function from the **lits-extras** package.
 */
import * as ep from "./exprparser.ts";
import * as pz from "../index.ts";
import { assertEquals, assertThrows } from "../deps/test.ts";

/**
 * First, let's test some valid expressions. Since our expressions are valid
 * in JavaScript too, we can use the `eval` function as the baseline.
 */
Deno.test("Test parsing of predefined expressions", () => {
  const testset: string[] = [
    "1 + -1",
    "2 + 3 * 3",
    "1 - 1 / 2",
    "(1 - 1) / 2",
    "(1) + (((2)) + 3)",
  ];
  for (let i = 0; i < testset.length; i++) {
    const expr = testset[i];
    const res = eval(expr);
    const calcres = ep.evaluateExpression(expr);
    assertEquals(
      calcres,
      res,
      `expression '${expr}' should evaluate to ${res}`,
    );
  }
});

/**
 * Then we test expression that should not be valid.
 */
Deno.test("Test failing expressions", () => {
  const testset: string[] = [
    "1 + ",
    "2 ++ 3 * 3",
    "- 1 - 1",
    "",
    "a + 1",
  ];
  for (let i = 0; i < testset.length; i++) {
    const expr = testset[i];
    assertThrows(
      () => ep.evaluateExpression(expr),
      pz.ParseError,
    );
  }
});
