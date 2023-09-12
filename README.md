# KITS Components

[![Build Status](https://github.com/kits-ab/react-components/workflows/build/badge.svg?branch=master)](https://github.com/kits-ab/react-components/actions?query=workflow%3Abuild) [![NPM Version](https://badge.fury.io/js/%40kokitotsos%2Freact-components.svg)](https://badge.fury.io/js/%40kokitotsos%2Freact-components)

This component library includes all of the components that are used to build <https://kits.se> and other React applications that we create and use at KITS.

To install the library, run `npm install --save @kokitotsos/react-components`

Checkout <https://react-components.kits.se> for examples and documentation.

## Development

You can use any editor for development (Visual Studio Code, Atom, WebStorm, IntelliJ, Vim, ...) but you should make sure that it supports the following technologies:

- [TypeScript](https://www.typescriptlang.org) – Since the project is written in TypeScript
- [EditorConfig](https://editorconfig.org) – To help the editor use the correct encoding, indentation, ...
- [Styled Components](https://www.styled-components.com) – To support styled component that we use for styling our components
- [Prettier](https://prettier.io) – To format the code according to our coding conventions

**The code is automatically formatted when you commit code. It is also linted before you push the commits to the server.**

For debugging purposes you should install [React Developer Tools](https://github.com/facebook/react-devtools).

### Preparations

- Install Node 18 – <https://nodejs.org>
- Checkout the code and fetch all dependencies
  ```
  $ git clone git@github.com:kits-ab/react-components.git
  $ npm install
  ```

### Available scripts

When you've checked out the code and all dependencies have been fetched you probably want to run `npm start` but you can run any of the the following scripts:

- `npm run build` – Creates a production ready builds in `dist/` and `dist-styleguide/`
- `npm run build:lib` – Creates a production ready build of the library in `dist/`
- `npm run build:styleguide` – Creates a production ready build of the styleguide in `dist-styleguide/`
- `npm run clean` – Removes all generated files
- `npm run format` – Format the entire codebase using [Prettier](https://prettier.io)
- `npm run icons` – Generate new icon-components from `resources/icons/*.svg`
- `npm lint` – Lints all code with [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io)
- `npm start` – Starts a local styleguide server with hot reloading enabled on <http://localhost:6006>
  to one or more host projects.

## Creating a release

All commits to master must go through a pull request and when all relavant pull requests have been merged you can create a release in GitHub and that will automatically trigger a publish to NPM.

Before you do a release, make sure you've updated the version. The easiest way to do this is to use `npm version`. This will update `package.json`, create a Git tag and commit all changes. If everything looks as you expect, you can push the changes.

## License

Copyright 2022 KITS AB

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
