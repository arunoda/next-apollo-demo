FROM node:20.11 as prod

WORKDIR /app/src/client
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["sh","-c", "yarn start"]