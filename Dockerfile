FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1-slim AS runner
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends nginx \
    && rm -rf /var/lib/apt/lists/* \
    && rm -f /etc/nginx/sites-enabled/default
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./
COPY --from=builder /app/bun.lock ./
RUN bun install --production --frozen-lockfile
COPY --from=builder /app/dist ./dist
COPY nginx.conf /etc/nginx/conf.d/app.conf
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh
EXPOSE 3000
CMD ["./entrypoint.sh"]