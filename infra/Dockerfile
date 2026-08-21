# This app resolves each school's custom domain at request time via proxy
# middleware and renders their site through selectable themes, so unlike the
# purely static sites elsewhere in the org, it needs a running Node runtime
# in production (SSR), not just a static export.
FROM node:22-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

EXPOSE 3001

CMD ["pnpm", "run", "start"]
