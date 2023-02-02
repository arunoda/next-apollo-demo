#basic image
FROM node:latest



WORKDIR /Users/adeolaadekoyejo/Desktop/next-apollo-demo/client

COPY package*.json yarn.lock ./

RUN yarn install
COPY . .
# RUN yarn build

EXPOSE 3000
CMD ["yarn","dev"]