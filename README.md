# React / Vite Starter Project

![img](./public/cover.png)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Includes:

- React / Typescript
- Vite
- CSS Modules
- [clsx](https://github.com/lukeed/clsx)
- [Design Tokens](https://github.com/andreortiz82/ao-design-tokens)
- [React UI Lib](https://github.com/andreortiz82/ao-ui-lib)

## Get Started

```
gh repo clone andreortiz82/react-vite-template
cd react-vite-template/
npm i
npm run dev
```

The project runs on [localhost:3000](http://localhost:3000/)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
