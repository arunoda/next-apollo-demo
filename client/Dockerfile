FROM node:19.6-alpine AS base

FROM base AS builder
WORKDIR /usr
COPY package.json ./
COPY . .
RUN yarn install
RUN yarn run build

FROM base AS runner
WORKDIR /usr
COPY package.json ./
COPY --from=builder /usr .

RUN yarn install --only-production
CMD yarn start