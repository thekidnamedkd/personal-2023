# UI Migration Plan: Chakra -> Base UI + Tailwind

## 1) Baseline Audit (Current UI)
- Capture accessibility snapshot(s) and key computed styles from `http://localhost:5173`.
- Document main screens/components and visual tokens (fonts, colors, spacing, borders).

## 2) Codebase Audit (Chakra Usage)
- Locate Chakra usage: providers, theme config, layout, pages, components.
- Map Chakra components to Base UI primitives + Tailwind classes.
- Identify reusable patterns (list clusters, link styles, buttons, layout containers).

## 3) Tailwind + Base UI Setup
- Add Tailwind config, base styles, and CSS entry.
- Add Base UI package and wire required provider/context if needed.
- Replace Chakra theme/fonts with Tailwind CSS variables or utilities.

## 4) Migration (Incremental)
- Layout shell: `Layout`, `Header`, `Footer`, `Navigation`.
- Primitives: `Button`, `Link`, `Heading`, `Text`, `Box`, `Stack`.
- Pages: `home`, `snapshot`, `404`.
- Icons and custom components (`IconPack`, `LinkOut`, `ListCluster`).

## 5) Validation
- Re-run snapshots and compare computed styles.
- Confirm accessibility and interaction behavior (navigation, focus styles).
- Note any styling regressions and fix.

## 6) Cleanup
- Remove Chakra dependencies and theme files.
- Ensure Tailwind is the only styling system in use.
- Run lint/typecheck if requested.
