FROM node:alpine
WORKDIR '/home'

COPY package.json .

RUN yarn install

COPY . .

CMD ["npm","start"]