# Desafios de Docker da Full Cycle

## [1. Desafio GO](./go/)

[![Imagem Docker](https://img.shields.io/docker/image-size/lucasdemoraesc/fullcycle?logo=docker&label=Docker%20image%20size)](https://hub.docker.com/r/lucasdemoraesc/fullcycle/tags)
[![Tag Docker](https://img.shields.io/docker/v/lucasdemoraesc/fullcycle?logo=docker&label=Image%20version)](https://hub.docker.com/r/lucasdemoraesc/fullcycle/tags)
[![Docker Pulls](https://img.shields.io/docker/pulls/lucasdemoraesc/fullcycle?logo=docker&label=Docker%20pulls)](https://hub.docker.com/r/lucasdemoraesc/fullcycle/tags)

- [x] Implementar "Hello World" em golang, mas logando "Full Cycle Rocks!"
  - [main.go](main.go)
- [x] Gerar uma imagem Docker fazendo o build do arquivo em go e o executando
  - [Dockerfile](Dockerfile)
- [x] A imagem não pode possuir mais que 2MB
- [x] A imagem deve ser publicada no Docker Hub
  - [x] https://hub.docker.com/r/lucasdemoraesc/fullcycle/tags

### 🚀 Executar
```bash
docker run lucasdemoraesc/fullcycle:latest
```

## [2. Desafio Node + Mysql + Nginx](./nginx-node/)

- [x] Configurar MySql e inicializar o banco de dados criando a tabela `People`
- [x] Desenvolver uma [aplicação em Node](./nginx-node/app/app.js) que quando acessada:
  - [x] Insere um novo registro na tabela `People` do Mysql
  - [x] Retorna o template `<h1>Full Cycle Rocks!</h1>` seguido por uma lista dos registros da tabela `People`
- [x] Configurar Nginx como [proxy reverso](./nginx-node/nginx.conf) para a aplicação Node

### 🚀 Executar
```bash
cd nginx-node
docker compose up -d
```