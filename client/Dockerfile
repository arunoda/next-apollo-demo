FROM node:20.11 as prod

WORKDIR /app/src/client
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

ENV NEXT_PUBLIC_API_URI http://localhost:5000/graphql

# needed only for heroku
ENV PORT 80

EXPOSE 80 3000

CMD ["sh","-c", "yarn start"]