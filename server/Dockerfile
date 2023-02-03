FROM node:16

# RUN mkdir -p /usr/app
WORKDIR /Users/adeolaadekoyejo/Desktop/next-apollo-demo
COPY package.json package.json
RUN yarn install
COPY . .
EXPOSE 4000

CMD [ "node", "index.ts" ]