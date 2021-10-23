# Apifood

A aplicação nesse repositório é uma Scraping RESTApi para Open Food Facts

---

### Tecnologias Usadas

 - [Axios](https://axios-http.com/)
 - [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
 - [Express](http://expressjs.com/pt-br/)
 - [Jest](https://jestjs.io/)
 - [MongoDB](https://www.mongodb.com/)
 - [Nodemon](https://nodemon.io/)
 - [Puppeteer](https://github.com/puppeteer/puppeteer/)
 - [Docker](https://www.docker.com/)

### Instalação
Configure as várias de ambiente

```
[...]

ENV USER=YOUR_USER
ENV PASS=YOUR_PASSWORD
ENV HOST=YOUR_HOST
ENV DB=YOUR_DATABASE

[...]
```
Execute o comando para gerar a imagem

> Execute dentro da raiz do projeto

```sh
docker build -t <imageName> .
```

```sh
docker run -p 8000:3000 <imageName>:latest
```

#### Após isto será possível requisitar a API em http://localhost:8000

## Eu aprendi:
- Scrapping em Puppeteer
- Framework Express
- Conceitos de Docker
- Conceitos em Testes Unitários
- & e muito mais

