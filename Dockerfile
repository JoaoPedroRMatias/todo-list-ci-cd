FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock
RUN bun install --production --frozen-lockfile
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["bun", "dist/server/server.js"]
