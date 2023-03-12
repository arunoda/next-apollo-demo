FROM node:18.10 as Production

ENV APOLLO_URI http://172.18.0.2:8000/graphql

WORKDIR /app/src/client
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["sh","-c", "yarn start"]