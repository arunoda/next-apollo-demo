FROM node:12.2.0-alpine

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app

RUN yarn build

ENV PORT 7000

CMD yarn start:prod