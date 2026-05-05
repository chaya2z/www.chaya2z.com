# Code Style

To maintain high code quality and consistency, this project uses a hybrid linting and formatting strategy.

## Commands

Run the following commands to automatically fix formatting and linting issues:

```shell
pnpm lint:fix
pnpm fmt:fix
```

## Tooling Strategy

We use a combination of **Biome**, **ESLint**, and **Prettier** based on their respective strengths and file support.

- **Biome:** Used as the primary tool for JavaScript, TypeScript, and JSON due to its exceptional speed.
- **ESLint & Prettier:** Used for `.astro` files (as Biome's support is currently experimental) and other formats like YAML.

| File type              | Formatter | Linter |
| ---------------------- | --------- | ------ |
| `.js` / `.ts` / `.tsx` | Biome     | Biome  |
| `.astro`               | Prettier  | ESLint |
| `.json`                | Biome     | Biome  |
| `.yaml`                | Prettier  | -      |

## Why Biome?

I have adopted Biome for its efficiency in personal development.
By integrating formatting and linting into a single, high-performance tool,
it minimizes configuration overhead and speeds up the development workflow.
