FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

ENV limit=4 \
    user_url=http://localhost:5000/graphql?

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "dev" ]