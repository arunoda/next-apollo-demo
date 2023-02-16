FROM node:19.6-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY . .
RUN ls -a
RUN yarn install
RUN yarn run build

## this is stage two , where the app actually runs
FROM node:19.6-alpine
WORKDIR /usr
COPY package.json ./
RUN yarn install --only=production
COPY --from=0 /usr/dist .
RUN yarn global add pm2
EXPOSE 5001
CMD ["pm2-runtime", "app.js"]