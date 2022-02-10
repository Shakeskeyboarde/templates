# Template

TODO: You should delete this file after setting up your project.

This template is pre-configured to work in NodeJS (commonjs) _and_ when bundled into a Webpack application (tree-shakable). Depending on what kind of library you're building, you may want to make some of the following changes.

## NodeJS only

- Add "node" to the [tsconfig.json](tsconfig.json) `types` array.

## Webpack only (React)

- Add "DOM" to the [tsconfig.json](tsconfig.json) `lib` array.
- Add "react" as a dependency.

## NodeJS ES Modules

- Switch the [ESLint](.eslintrc.cjs) `import/extensions` rule to `['error', 'ignorePackages']`.

At the time of this writing, TypeScript support for NodeJS native ES modules is incomplete at best. It's probably a good idea to wait on adopting them until TypeScript has officially released support.

However, you can use the `"type": "module"` package option if use import paths with `.js` extensions, _even when importing local `.ts` files!_ TypeScript will resolve the `.js` paths to `.ts` files during development.

For example, instead of the old TS import path:

```ts
import foo from './foo';
```

Use a JS path import:

```ts
import foo from './foo.js';
// Or, if foo is a directory...
import foo from './foo/index.js';
```
