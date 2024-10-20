# Typescript Starter

This is a starter project for Typescript. It includes:

- typescript
- pnpm
- vitest
- biome
- husky
- lint-staged
- commitlint with Conventional Commits

Install dependencies:

```bash
pnpm install
```

Run tests:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Run tests with coverage:

```bash
pnpm test:coverage
```

Run lint:

```bash
pnpm lint:check
pnpm lint
```

Run format:

```bash
pnpm format:check
pnpm format
```

lint-staged and husky will run biome on staged files before commit.

# Conventional Commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

# License

MIT
