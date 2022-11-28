FROM node:18.12.1

LABEL version="1.0"
LABEL description="docker image for client app."

WORKDIR /server

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]