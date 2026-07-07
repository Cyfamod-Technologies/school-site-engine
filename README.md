# School Public Web

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Zod](https://img.shields.io/badge/Zod-4-3e67b1?logo=zod&logoColor=white)](https://zod.dev)
[![pnpm](https://img.shields.io/badge/pnpm-10-f69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![License](https://img.shields.io/badge/license-UNLICENSED-lightgrey)](#)

Public marketing website renderer for schools on the Cyfamod platform. Each school gets a themeable site at `/schools/{schoolSlug}`, rendered server-side from published website configuration served by [`school-be-laravel`](https://github.com/Cyfamod-Technologies/school-be-laravel).

## How it works

```
GET /schools/{schoolSlug}
        │
        ▼
Next.js server component
        │
        ▼
GET {LARAVEL_API_BASE_URL}/public/schools/{schoolSlug}/website
        │
        ▼
Response validated against the PublicSchoolWebsite contract (Zod)
        │
        ▼
Resolved theme component renders the page
```

- Only **published** websites are served. Missing schools, draft websites, and unpublished websites all return `404` from Laravel and render through the Next.js `not-found` flow.
- Every response is validated at runtime against a Zod schema (`src/lib/api/public-school-website.ts`) before it reaches a theme component. A backend response that drifts from the contract fails loudly instead of rendering broken UI.
- Themes are resolved by `themeKey` via a registry (`src/lib/themes/theme-registry.ts`), so adding a new theme doesn't require changing the route.

## Requirements

- Node.js 20+
- [pnpm](https://pnpm.io) 10+
- A running instance of [`school-be-laravel`](https://github.com/Cyfamod-Technologies/school-be-laravel) with at least one school that has a **published** `school_websites` record — this app has no data of its own

## Setup

```bash
pnpm install
cp .env.example .env.local
```

`.env.local` needs one variable — see [Environment variables](#environment-variables).

## Running locally

**Terminal 1 — backend**

```bash
cd path/to/school-be-laravel/backend
php artisan serve
```

Confirm it responds correctly:

```bash
# a real, published school slug → 200 with the website payload
curl -i http://127.0.0.1:8000/api/v1/public/schools/{schoolSlug}/website

# a missing, draft, or unpublished website → 404
curl -i http://127.0.0.1:8000/api/v1/public/schools/does-not-exist/website
```

**Terminal 2 — this app**

```bash
pnpm dev
```

Open `http://localhost:3000/schools/{schoolSlug}`, using a slug that actually exists (and is published) in your local Laravel database — check via `php artisan tinker` (`App\Models\SchoolWebsite::with('school')->get()`) if you're not sure what's there.

## Environment variables

All variables are documented in [`.env.example`](./.env.example).

| Variable | Scope | Description |
|---|---|---|
| `LARAVEL_API_BASE_URL` | Server-only | Base URL of the Laravel API including `/api/v1`, e.g. `http://127.0.0.1:8000/api/v1`. Not prefixed with `NEXT_PUBLIC_` — this app only calls Laravel from server components, never the browser, so there's no reason to expose it client-side. |

## Project structure

```
src/
├─ app/
│  └─ schools/[schoolSlug]/   # Public route — fetches + renders a school's site
├─ components/
│  └─ themes/                 # Theme implementations (e.g. kidza-home-2)
└─ lib/
   ├─ api/                    # Server-side fetch layer + Zod validation
   ├─ contracts/              # Shared PublicSchoolWebsite TypeScript contract
   └─ themes/                 # Theme registry (themeKey → component)
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build |
| `pnpm start` | Run the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run the TypeScript compiler in check-only mode |

## 🔗 Related Projects

- Backend API: [school-be-laravel](https://github.com/Cyfamod-Technologies/school-be-laravel) — owns school and website data, including the public endpoint this app consumes
- Admin Frontend: [school-fe-nextjs](https://github.com/Cyfamod-Technologies/school-fe-nextjs) — where schools manage their website content

## 💬 Support

- 📫 [Open an Issue](https://github.com/Cyfamod-Technologies/school-public-web/issues)
