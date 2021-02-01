# React Typescript Template

React Typescript Project Boilerplate

## Get Started

`yarn`

## Local Development

> Start the development server

`yarn start`

## Run Tests

> Run all yours test files

`yarn test`

## Build

> Build the site into `build` folder

`yarn build`

## Eslint

> Extend **react-app** configs & **react-app/jest** configs

> Check for the linting errors

`yarn lint`

> Check & automatically fix the linting errors

`yarn lint:fix`

## Prettier

> Used in conjuction with Eslint with `eslint-plugin-prettier` &
> `eslint-config-prettier`

> Format the workspace files

`yarn format`

> Format the `package.json` file

`yarn format:package`

## Commit

`git add . && yarn commit`

> Uses **[gacp](https://github.com/vivaxy/gacp#readme)**

- Runs [Husky](https://github.com/typicode/husky) to improve the commits.
- Husky runs [Lint Staged](https://github.com/okonet/lint-staged) as a
  pre-commit hook to run lintes & formatters
- Husky lints the commit message with
  [Commitlint](https://github.com/conventional-changelog/commitlint)
