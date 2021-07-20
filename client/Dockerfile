FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the base docker image for frontend react app."

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .


RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]