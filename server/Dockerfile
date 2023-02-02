FROM node:16

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 4000

CMD [ "node", "server.js" ]