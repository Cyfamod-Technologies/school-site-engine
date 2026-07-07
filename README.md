# School Public Web

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Zod](https://img.shields.io/badge/Zod-4-3e67b1?logo=zod&logoColor=white)](https://zod.dev)
[![pnpm](https://img.shields.io/badge/pnpm-10-f69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![License](https://img.shields.io/badge/license-UNLICENSED-lightgrey)](#)

Public-facing marketing website renderer for schools on the Cyfamod platform. Each school gets a themeable site at `/schools/{schoolSlug}`, rendered server-side from published website configuration served by the [Laravel backend](https://github.com/Cyfamod-Technologies/school-be-laravel).

## How it works

```
GET /schools/bright-future
        │
        ▼
Next.js server component
        │
        ▼
GET {LARAVEL_API_BASE_URL}/public/schools/bright-future/website
        │
        ▼
Response validated against the PublicSchoolWebsite contract (Zod)
        │
        ▼
Resolved theme component renders the page
```

- The backend is the source of truth. Only **published** school websites are served — missing schools, draft websites, and unpublished websites all return `404` from Laravel and are rendered through the Next.js `not-found` flow here.
- Every response is validated at runtime against a Zod schema (`src/lib/api/public-school-website.ts`) before it reaches a theme component. A backend response that drifts from the contract fails loudly instead of rendering broken UI.
- Themes are resolved by `themeKey` via a registry (`src/lib/themes/theme-registry.ts`), so adding a new theme doesn't require changing the page route.

## Requirements

- Node.js version matching [`.nvmrc`](./.nvmrc) (if present) — otherwise a current LTS release
- [pnpm](https://pnpm.io) 10+
- A running instance of the [Laravel backend](https://github.com/Cyfamod-Technologies/school-be-laravel), reachable from this app

## Getting started

```bash
pnpm install
cp .env.example .env.local
```

Fill in `.env.local` — see [Environment variables](#environment-variables) below.

```bash
pnpm dev
```

Open [http://localhost:3000/schools/bright-future](http://localhost:3000/schools/bright-future).

## Environment variables

All variables are documented in [`.env.example`](./.env.example). Copy it to `.env.local` and fill in real values — never commit `.env.local`.

| Variable | Scope | Description |
|---|---|---|
| `LARAVEL_API_BASE_URL` | Server-only | Base URL of the Laravel API (including `/api/v1`), e.g. `http://127.0.0.1:8000/api/v1`. Deliberately **not** prefixed with `NEXT_PUBLIC_` — this app never calls the Laravel API from the browser, only from server components, so the base URL has no reason to be exposed to the client. |

## Running the full stack locally

This app doesn't work in isolation — it needs a running Laravel backend with at least one published school website to render anything.

**Terminal 1 — Laravel backend**

```bash
cd path/to/school-be-laravel/backend
git switch dev
git pull --ff-only origin dev
php artisan serve
```

Verify it's up and the public contract responds correctly:

```bash
# Published website → 200 with the website payload
curl -i http://127.0.0.1:8000/api/v1/public/schools/bright-future/website

# Missing / draft / unpublished website → 404
curl -i http://127.0.0.1:8000/api/v1/public/schools/does-not-exist/website
```

**Terminal 2 — this app**

```bash
pnpm dev
```

Then check both the happy path and the not-found path:

- [http://localhost:3000/schools/bright-future](http://localhost:3000/schools/bright-future) — renders the themed site
- [http://localhost:3000/schools/does-not-exist](http://localhost:3000/schools/does-not-exist) — renders the Next.js not-found page

## Project structure

```
src/
├─ app/
│  └─ schools/[schoolSlug]/   # Public route — fetches + renders a school's site
├─ components/
│  └─ themes/                 # Theme implementations (e.g. kidza-home-2)
├─ lib/
│  ├─ api/                    # Server-side fetch layer + Zod validation
│  ├─ contracts/              # Shared PublicSchoolWebsite TypeScript contract
│  ├─ mock/                   # Sample fixtures for local dev/tests without a backend
│  └─ themes/                 # Theme registry (themeKey → component)
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build |
| `pnpm start` | Run the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run the TypeScript compiler in check-only mode |

## Related repositories

- [`school-be-laravel`](https://github.com/Cyfamod-Technologies/school-be-laravel) — Laravel API that owns school and website data, including the public endpoint this app consumes
- `school-fe-nextjs` — authenticated admin frontend where schools manage their website content
