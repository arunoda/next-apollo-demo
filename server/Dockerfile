FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

ENV PORT=5000 \
    USER_DETAILS_URL=https://jsonplaceholder.typicode.com/users

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "yarn", "run", "server"]