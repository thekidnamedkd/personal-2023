# KD Personal Site (2023)

Personal site built with TypeScript, Vite, React, Base UI + Tailwind.

## Stack
- React 18 + Vite
- Base UI (headless components)
- Tailwind CSS
- TanStack Query
- Biome

## Quick Start
```bash
pnpm install
pnpm dev
```

## Scripts
```bash
pnpm dev          # local dev server
pnpm build        # production build
pnpm serve        # preview build
pnpm lint         # biome check
pnpm format       # biome format
pnpm type-check   # tsc --noEmit
```

## Commit Hooks
- `pre-commit` runs Biome check/format and type-check.
- `pre-push` is a no-op (intentionally light for a personal site).

## Notes
- Gas price is pulled from Etherscan v2 Gas Oracle (chainid=1).
- Tailwind utilities live in `src/index.css`.
