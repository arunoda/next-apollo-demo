FROM node:12.2.0-alpine

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app

RUN yarn build

CMD yarn start:prod