FROM node:12.2.0-alpine

WORKDIR /usr/app

COPY package.json /usr/app
RUN yarn install --production

COPY . .

CMD ["yarn","start:dev"]

