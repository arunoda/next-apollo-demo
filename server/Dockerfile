FROM node:20.11 as prod

WORKDIR /app/src/client
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENV PORT 80

EXPOSE 5000

CMD ["sh","-c", "yarn start"]