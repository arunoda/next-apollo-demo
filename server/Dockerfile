FROM node:19.6-alpine AS base

FROM base AS builder
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY . .
RUN yarn install
RUN yarn run build

## this is stage two , where the app actually runs
FROM base AS runner
WORKDIR /usr
COPY package.json ./
RUN yarn install --only=production
COPY --from=builder /usr/dist .
RUN yarn global add pm2
CMD ["pm2-runtime", "server.js"]