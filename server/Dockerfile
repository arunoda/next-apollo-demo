FROM node:18.10 as Production

ENV PORT 8000
ENV CORS_ORIGIN http://localhost:3000

WORKDIR /app/src/server
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["sh","-c", "yarn dev"]