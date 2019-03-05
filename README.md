# KITS Components

[![Build Status](https://travis-ci.org/kits-ab/react-components.svg?branch=master)](https://travis-ci.org/kits-ab/react-components) [![NPM Version](https://badge.fury.io/js/%40kokitotsos%2Freact-components.svg)](https://badge.fury.io/js/%40kokitotsos%2Freact-components)

This component library includes all of the components that are used to build <https://kits.se> and other React applications that we create and use at KITS.

To install the library, run `yarn add @kokitotsos/react-components`

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

- Install all required tools

  - Node 10.15 – <https://nodejs.org>
  - Yarn 1.13 – <https://yarnpkg.com>

- Checkout the code and fetch all dependencies
  ```
  $ git clone git@github.com:kits-ab/react-components.git
  $ yarn install
  ```

### Available scripts

When you've checked out the code and all dependencies have been fetched you probably want to run `yarn start` but you can run any of the the following scripts:

- `yarn build` – Creates a production ready builds in `dist/` and `dist-styleguide/`
- `yarn build:lib` – Creates a production ready build of the library in `dist/`
- `yarn build:styleguide` – Creates a production ready build of the styleguide in `dist-styleguide/`
- `yarn clean` – Removes all generated files
- `yarn format` – Format the entire codebase using [Prettier](https://prettier.io)
- `yarn icons` – Generate new icon-components from `resources/icons/*.svg`
- `yarn lint` – Lints all code with [TSLint](https://palantir.github.io/tslint) and [Stylelint](https://stylelint.io)
- `yarn start` – Starts a local styleguide server with hot reloading enabled on <http://localhost:6060>
- `yarn watch` – Watches the source for changes and rebuilds the library. It also optionally copies this library to one or more host projects.

### Host project development

Quite often you want to develop a new component for a host project. You could publish your changes to the repository after each change but that's not a very nice developer experience. In an ideal world you should be able to use `yarn link` but for some reason this no longer works so instead you can create an enviroment file with the name `.env` in the root of the project and add this row:

```
HOST_PROJECT_PATHS=<paths to hosting projects, comma separated, ie. /Users/Me/Project/kits>
```

Now if you run `yarn watch` it will watch for changes and copy the library to the hosting projects after build.

## Creating a release

All commits to master must go through a pull request and when all relavant pull requests have been merged Travis can build and release this library to NPM.

Travis triggers for all commits but to trigger a release the commit must be tagged. The easiest way to do this is to use `yarn version`. This will update `package.json`, create a Git tag and commit all changes. If everything looks as you expect, you can push the changes and Travis will do the rest.

## License

Copyright 2019 KITS AB

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
