# cra-templates

## Packages

- cra-template scripts
- template-stocky37
  - cra-template-stocky37 (generated)

## Scripts

### build:fresh

As `build` fails if run when the generated template workspaces do not exist yet,
this script aims to run a build that should always succeed.

## Templates

### cra-template-stocky37

This is my own personal template and includes the following on top of the base cra-template:

- [`react-router`]() v6 for routing
- [`react-query`](https://react-query.tanstack.com/) for fetching data
- [`json-server`](https://github.com/typicode/json-server) for mocking JSON APIs locally
- allow absolute imports from the `src` directory
- `Dockerfile`s for both development and production use
- can pull envvars from `window.env` (set in `/config.js`) or `process.env`
- [`eslint`](https://eslint.org/) configured with airbnb base and sane defaults
- [`prettier`](https://prettier.io/) configured with my own preferred configuration
- [`pretty-package-json`](https://github.com/cameronhunter/prettier-package-json) configured with defaults for keeping `package.json`s prettified and deterministically ordered
- [`husky`](https://github.com/typicode/husky) & [`lint-staged`](https://github.com/okonet/lint-staged) configured to run `eslint`, `prettier` and `pretty-package-json` in a pre-commit hook
- [`@welldone-software/why-did-you-render`](https://github.com/welldone-software/why-did-you-render) for helping debug rerender issues in development
