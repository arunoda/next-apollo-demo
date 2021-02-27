FROM node:12.2.0-alpine
WORKDIR /usr/app
COPY package.json /usr/app
RUN yarn install --production
COPY . .

RUN yarn global add nodemon


CMD ["yarn","start:dev"]

