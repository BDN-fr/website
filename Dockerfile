FROM node:25-alpine AS builder
WORKDIR /app
COPY package*.json .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .
RUN npm i -g pnpm
RUN pnpm i
COPY . .
RUN pnpm run build
RUN pnpm prune --production

FROM node:25-alpine AS runner
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]