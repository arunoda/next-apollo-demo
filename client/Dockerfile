FROM node:20.11 as prod

ENV API_URI http://127.0.0.1:5000/graphql

WORKDIR /app/src/client
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["sh","-c", "yarn start"]