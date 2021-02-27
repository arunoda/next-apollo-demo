FROM node:12.2.0-alpine

WORKDIR /usr/app

COPY package.json yarn.lock /usr/app/
RUN yarn install --production
COPY . /usr/app

CMD ["yarn","start"]

