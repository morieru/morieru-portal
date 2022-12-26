FROM node:16 AS builder

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:16 AS runner
ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/.env ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/.next/standalone ./

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
