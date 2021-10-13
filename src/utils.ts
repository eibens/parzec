/**
 * # Utility Functions
 *
 * This module contains general functions used elsewhere in the library.
 *
 * The first function initializes an object from an array of `[string, any]`
 * pairs. It is used to populate an object dynamically.
 */
// deno-lint-ignore no-explicit-any
export function initObject(members: [string, any][]): any {
  // deno-lint-ignore no-explicit-any
  const res: any = {};
  for (let i = 0; i < members.length; i++) {
    const [m, v] = members[i];
    res[m] = v;
  }
  return res;
}
/**
 * The `escapeWhitespace` function helps printing strings containing whitespace
 * characters. It replaces them with their escape codes.
 */
export function escapeWhitespace(text: string): string {
  return text.replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t");
}
