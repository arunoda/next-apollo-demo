#basic image
FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json yarn.lock ./

RUN yarn install
COPY . .
# RUN yarn build

EXPOSE 4000
CMD ["yarn","run","dev"]