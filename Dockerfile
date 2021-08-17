FROM node:latest

WORKDIR /app

COPY . .

ENV PORT=3000

RUN yarn install

EXPOSE $PORT

ENTRYPOINT ["node", "server/server.js"]