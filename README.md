# parzec_deno

[parzec_deno] is a Deno port of the [Parzec][parzec] NPM package. This module
was created because currently the module at
[deno.land/x/parzec](https://deno.land/x/parzec) does not seem to support Deno
out of the box.

> [Parzec] is a parser combinator library adapted from Haskell's famous
> [Parsec][Parsec] library. A parser combinator library consist of
> [higher order functions][higher order functions] which make it easy to build
> [recursive descent parsers][recursive descent parsers].
>
> <cite>-- [johtela/parzec][parzec]</cite>

[![License][license-shield]](LICENSE)
[![Deno module][deno-land-shield]][deno-land]
[![Github
tag][github-shield]][github] [![Build][build-shield]][build]
[![Code
coverage][coverage-shield]][coverage]

# Usage

```ts
import * as pz from "https://deno.land/x/parzec_deno/mod.ts";
```

# Changes

In order to make the NPM based [Parzec] compatible with Deno, some changes have
to be made. [Parzec] fortunately has no run-time dependencies, so only local
imports need to be updated. These are [parzec_deno]'s contributions to the
original [Parzec] repository:

- Update docs and metadata.
  - Removed all files that were not TypeScript source file.
  - Added the [README.md](README.md) file (which you are reading right now).
  - Added the GitHub compatible [LICENSE](LICENSE) file with the original
    license text.
- Translated the NPM project structure to Deno.
  - Added the [mod.ts](mod.ts) module that exports everything.
  - **Replaced all NPM style `import` statements with ES module imports.**
  - Removed property-based tests in [src/test](src/test).
  - Replaced all tests in [src/test](src/test) with Deno compatible unit tests.
  - Renamed all test files to ensure a `_test.ts` suffix.
- Fixed errors discovered by `deno fmt` and `deno lint`.
  - Formatted all files with `deno fmt`.
  - Added `// deno-lint-ignore no-explicit-any` where necessary.
  - Replaced `let` with `const` where possible.
  - Removed unnecessary `async` keywords in tests.
- Added new build and CI tools.
  - Added [dev.ts](dev.ts) which uses [edcb] for running checks.
  - Added the GitHub Action [ci](.github/workflows/ci.yml) workflow which runs
    [dev.ts](dev.ts).
  - Added code coverage reporting.

[Parsec]: http://hackage.haskell.org/package/parsec
[higher order functions]: https://en.wikipedia.org/wiki/Higher-order_function
[recursive descent parsers]: https://en.wikipedia.org/wiki/Recursive_descent_parser
[PEG]: https://en.wikipedia.org/wiki/Parsing_expression_grammar
[LL(1)]: https://en.wikipedia.org/wiki/LL_parser
[interface]: src/input.html
[lexical analyzers]: https://en.wikipedia.org/wiki/Lexical_analysis
[regular expressions]: https://en.wikipedia.org/wiki/Regular_expression
[parzec]: https://github.com/johtela/parzec
[parzec_deno]: https://github.com/eibens/parzec
[edcb]: https://github.com/eibens/edcb

<!-- badges -->

[github]: https://github.com/eibens/parzec
[github-shield]: https://img.shields.io/github/v/tag/eibens/parzec?label&logo=github
[coverage-shield]: https://img.shields.io/codecov/c/github/eibens/parzec?logo=codecov&label
[license-shield]: https://img.shields.io/github/license/eibens/parzec?color=informational
[coverage]: https://codecov.io/gh/eibens/parzec
[build]: https://github.com/eibens/parzec/actions/workflows/ci.yml
[build-shield]: https://img.shields.io/github/workflow/status/eibens/parzec/ci?logo=github&label
[deno-land]: https://deno.land/x/parzec_deno
[deno-land-shield]: https://img.shields.io/badge/x/parzec__deno-informational?logo=deno&label
