# Tript - Backend

Serviço de backend do projeto desenvolvido para Maratona técnologica da Uvv.

# Arquitetura do projeto

A runtime utilizada foi [Node.js](https://nodejs.org).

A API foi construida utilizando o framework [Express](https://expressjs.com).

A API é responsável por manipular requisições HTTP seguindo o estilo REST (Representional State Transfer). A lógica responsável pela interpretação e respostas dessas requisições segue o padrão MVC.

O formato padrão para negociação de dados será o tipo MIME `application/json`.

As requisições acontecem de forma **semântica**:

  - Cabeçalhos das requisições devem conter as seguintes chaves:
    - `Content-Type: application/json`
    - `Accepts: application/json`


  - Cabeçalhos das respostas devem conter as seguinte chaves:
    - `Content-Type: application/json`


  - Cabeçalhos das respostas do servidor devem conter status de acordo com o que realmente aconteceu:
    - Ao acessar um recurso: `HTTP/1.1 200 OK`
    - Ao criar um recurso: `HTTP/1.1 201 Created`
    - Ao destruir um recurso: `HTTP/1.1 204 No Content`
    - Ao atualizar um recurso: `HTTP/1.1 201 Created`
    - Ao enviar dados insuficientes: `HTTP/1.1 412 Precondition Failed`
    - Ao acessar um recurso sem permissão: `HTTP/1.1 401 Unauthorized`
    - Ao acessar recursos que não existam: `HTTP/1.1 404 Not Found`
    - Ao receber requisição sem `Content-Type: application/json`: `HTTP/1.1 406 Not Acceptable`

## Estrutura de Pastas

```
|-- docs              // Documentos sobre o projeto
|-- server            // Codigo fonte do webservice
  |-- index.js        // Arquivo principal do serviço
  |-- package.json    // Definição de dependências e comandos pre-definidos
  |-- config          // Configurações do projeto
  |-- controllers     // Controllers do projeto
  |-- models          // Modelos das entidades do banco de dados
  |-- routes          // Definição de rotas da aplicação
  |-- seeders         // Seed de dados limpos para aplicação
  |-- tests           // Testes automatizados
```

## Persistência de Dados

A arquitetura de persistencia de dados será criada utilizando o RDBMS [PostgreSQL 9.4](http://www.postgresql.org/). Por ser rápido, simples, opensource e de facil configuração, foi a opção mais aceita pelo grupo.

## Dependências:

 - [Nodejs](http://nodejs.org)
 - [PostgreSQL 9.4](http://postgresql.org)

# Como configurar o ambiente de desenvolvimento

Conta para Desenvolvimento (Bitbucket):

**Email:** vali.develop@gmail.com

**Senha:** vali2016

## Manual

 Tenha instalado:
 - [Git](http://git-scm.com)
 - [Node.js](http://nodejs.org)
 - [PostgreSQL 9.4](http://www.postgresql.org/)

Tenha seu servidor PostgreSQL rodando e algum gerenciador de RDBMS visual para facilitar seu trabalho.

Configure o arquivo `config/config.json` para apontar para seu banco local.

Com o servidor de PostgreSQL funcionando, execute:

```bash
# clone o projeto
git clone https://github.com/LordAlastair/TripT.git

# acesse o diretório do servidor
cd TripT/server/

# instale as dependencias
npm install

# cria a estrutura das tabelas, execute na primeira vez, e caso altere propriedades de models que já foram criados
# caso voce crie novos models, ao reiniciar o servidor ele irá sincronizar eles e suas devidas estruturas
npm run migration

# insere dados iniciais no banco de dados, execute só na primeira vez
npm run seed

# inicie a aplicação com um watcher
npm run start-dev
```

## Automatizado

Tenha instalado:
- [Docker](http://docker.com)

```bash
# clone o projeto
git clone https://github.com/LordAlastair/TripT.git

# acesse o diretório
cd TripT

# Windows / Mac OS
docker-machine start && eval $(docker-machine env)

docker-compose up
```
