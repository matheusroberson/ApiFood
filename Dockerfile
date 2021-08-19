FROM node:latest

WORKDIR /app

COPY . .

ENV USER=
ENV PASS=
ENV HOST=
ENV DB=

RUN yarn install

EXPOSE 3000

ENTRYPOINT ["node", "server/server.js"]