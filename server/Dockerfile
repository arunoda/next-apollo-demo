FROM node:16

WORKDIR /usr/src/api

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

EXPOSE 4000

CMD ["yarn", "run", "start"]
