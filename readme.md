# Framer Fx Starter Template

This is a starter template that shows you how to use production components inside Framer X

## Structure

The repository is divided into two folders: `components/` and `components.framerfx/`:

### `components/`

This is just a regular NPM package, created using `npx create-react-library`. You can see which options
I chose

```
$ npx create-react-library
npx: installed 748 in 14.806s
? Package Name components
? Package Description This package is a regular npm package that contains the code for your production components
? Author's GitHub Handle your-github-handle
? GitHub Repo Path my-company/this-repository
? License UNLICENCED
? Package Manager yarn
? Template typescript
? Copying typescript template to ~/FramerFxTemplate/components
? Running yarn install and yarn link
? Initializing git repo


Your module has been created at ~/FramerFxTemplate/components.

To get started, in one tab, run:
$ cd components && yarn start

And in another tab, run the create-react-app dev server:
$ cd components/example && yarn start
```

### `components.framerfx`

This is a `framerfx` project created by following these steps:

1. Open Framer X
2. Create a new Framer X project
3. While holding the `option` key, click on File -> Save as and make sure to select the Framer Fx format.

See [here](https://framer.gitbook.io/teams/integrations#folder-projects) fore more information on Framer Fx projects.

Your production components should live under `components/` and that project shouldn't know anything about
Framer X.

## Development Mode

To start development mode:

```
$ cd components/
$ yarn run start
```

That will start a process that will watch your code for changes and compile your code into `components/dist/index`

To import components into your FramerFX project make sure you import components from this file. Example:

```jsx
import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as components from "../../components/dist/index";

export class ExampleComponent extends React.Component<components.ExampleComponentProps> {
```
