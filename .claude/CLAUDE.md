# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Monorepo for [degrasmees.nl](https://degrasmees.nl): a Next.js 16 (App Router) frontend backed by a
Strapi 5 headless CMS. It's a bilingual marketing site served on two domains — `degrasmees.nl` (nl) and
`degrasmees.com` (en) — via domain-based i18n routing rather than a `/locale` URL prefix.

## Repository layout

- `frontend/` — Next.js app.
- `backend/` — Strapi 5 CMS.
- `frontend/src/base/` and `backend/base/` — **git submodules, both pointing at the same upstream repo
  (`jaccovk/base.git`), but they are deliberately separate checkouts/repos.** They are a shared
  component/helper library reused across the author's other Strapi/Next projects. Do not assume a change
  made in one is reflected in the other, or that updating one submodule updates the other — each is
  pinned to its own commit and must be updated independently.
- `update.sh`, `get-base-folder.sh` — production-server maintenance scripts. They `source` functions from
  a sibling `../jaccos-bin` checkout that only exists on the deployed host; they are not runnable in a
  local dev checkout.

## Commands

- Install deps: `yarn --cwd frontend install` and `yarn --cwd backend install` (root `package.json` has
  no deps of its own beyond the dev-orchestration scripts below).
- Run both dev servers: `yarn develop` from repo root — starts Strapi (`develop:backend`) and, once
  `http://localhost:1339/admin` responds, starts Next.js (`develop:frontend`).
- Frontend only: `yarn --cwd frontend dev` (port 3000, see `frontend/.env.local`).
- Backend only: `yarn --cwd backend develop` (port **1339** locally, per `backend/.env` — not Strapi's
  default 1337).
- Build: `yarn --cwd frontend build` / `yarn --cwd backend build`.
- Lint: `yarn --cwd frontend lint` (ESLint + Prettier, runs `eslint --fix .`). No lint config or test
  suite exists for the backend; no test suite exists for either package.
- Note: the root `start` script (`yarn start`) invokes `bash ./start-development.sh`, which does not
  exist in this checkout — use `yarn develop` instead.

## Architecture

### Backend (Strapi 5, `backend/`)

- Content types (`backend/src/api/`): `home` (single type), `page` (collection type: `slug` +
  dynamiczone `sections`), `theme`, `global`, `form-builder`, `mail-template`, `submission`.
- Reusable Strapi components (`backend/src/components/`): `sections/*` (the dynamiczone blocks — hero,
  textarea, media-float, storyline-float, gallery, grid, form-selector, latest-content-types), `form/*`
  (form field types), `layout/*` (meta, colors, navigation, personaldata), `link/*`, `elements/*`.
- Adding a new section type requires **both** a component JSON schema here and a matching case in the
  frontend's `section-renderer.tsx` (see below) — the two are wired together by the `__component` string
  (e.g. `sections.hero`).
- `backend/base/` (submodule) holds cross-project helpers: `mail/send-mail.js` (invoked from
  `submission`'s `afterCreate` lifecycle in `backend/src/api/submission/content-types/submission/lifecycles.js`)
  and `functions/getGlobal.js` / `getSubmission.js`.
- DB is Postgres in dev/prod (`backend/config/database.js` reads `DATABASE_CLIENT` from `backend/.env`;
  sqlite is supported as a fallback client).
- Email via `@strapi/provider-email-nodemailer` pointed at local SMTP (`backend/config/plugins.js`).
- `strapi-dump-*.tgz` files at repo root are gitignored DB dumps, not source.

### Frontend (Next.js 16 App Router, `frontend/`)

- **i18n / routing**: `frontend/src/i18n/routing.ts` configures `next-intl` with domain-based locale
  selection (`degrasmees.nl` → nl, `degrasmees.com` → en) and `localePrefix: "never"`
  (toggle via `NEXT_PUBLIC_USE_LOCALE_PREFIX`). The `pathnames` map is generated at build time from
  `frontend/src/base/lib/core/route-resolver.ts`'s `RouteModels`, which defines per-locale URL segments
  per content model — to localize a new content model's URL, add it there.
- **Path aliasing / override layer** (`tsconfig.json`): `@/*` resolves to `app/[locale]/*` **first**,
  falling back to `base/*`. This means `frontend/src/app/[locale]/` is a project-specific override layer
  on top of the shared `frontend/src/base/` submodule: e.g. `app/[locale]/components/navigation/Navbar`
  overrides `base`'s version, while anything not overridden there is served straight from `base`. When
  looking for "where does component X actually come from," check the app-layer path before assuming it's
  in `base`.
- **Dynamic zone rendering**: `frontend/src/base/lib/core/section-renderer.tsx` maps a Strapi `sections`
  dynamiczone entry's `__component` string to a React component — mirrors the backend's
  `components/sections/*.json` list. `field-renderer.tsx` does the equivalent for dynamic form fields.
- **Data fetching**: `frontend/src/base/lib/core/fetch-api.ts` is the low-level Strapi fetch wrapper (adds
  the bearer token, `qs`-serializes params, sets `next.revalidate` from `DEFAULT_REVALIDATE_TIME`);
  `lib/models/*` (`fetch-page.ts`, `fetch-theme.ts`, `fetch-content-type.ts`) build on top of it per
  content type.
- **On-demand revalidation**: Strapi webhook → `frontend/src/app/api/revalidate/route.ts` →
  `base/lib/api/revalidate`.
- **Form submissions**: `frontend/src/app/api/submit/route.ts` → `base/form/utils/api/submit/post` →
  backend `submission` content type → triggers mail via the lifecycle hook above.
- Local dev frontend talks to Strapi at `NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1339`
  (`frontend/.env.local`).

### Deployment

- `.github/workflows/main.yml`: on push to `main`, SSHes into the production host and runs `git pull` —
  no build step in CI. Build/restart on the server is handled by `update.sh` in combination with the
  `jaccos-bin` tooling, which lives outside this repo.
- Per the project README, production-server operations (`setup-hosting`, `update`, `clone-project`, and
  `push-files.sh` for syncing `frontend/public/uploads`) also depend on that external `jaccos-bin` toolkit
  and are not runnable from a plain local checkout.

## Known open items (see README.md for the full/current list)

- Mail sending, revalidate hook reliability, and font ("Helvetica") are flagged as unresolved.
- Sections currently fetch data at the page level rather than each being an independent Server Component.
- The Strapi bold-title-editor plugin is broken on Strapi v5 and needs an alternative.
