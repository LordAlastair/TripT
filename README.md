# Vaga Livre - Backend

Master:

[ ![Codeship Status for vagalivre/vagalivre-backend](https://codeship.com/projects/5d7f0420-acf9-0133-9a6a-0a06bc138256/status?branch=master)](https://codeship.com/projects/131866)

Development:

[ ![Codeship Status for vagalivre/vagalivre-backend](https://codeship.com/projects/5d7f0420-acf9-0133-9a6a-0a06bc138256/status?branch=dev)](https://codeship.com/projects/131866)

Serviço de backend do projeto desenvolvido para Maratona técnologica da Uvv.

---

# Arquitetura do projeto

A runtime do backend sendo utilizada será o [Node.js](https://nodejs.org).

A API será construída utilizando o módulo [Express](https://expressjs.com).

A API será responsável por manipular requisições HTTP seguindo o estilo REST (Representional State Transfer). A lógica responsável pela interpretação e respostas dessas requisições segue o padrão MVC.

O formato padrão para negociação de dados será o tipo MIME `application/json`.

As requisições devem ser **semânticas**:

  - Cabeçalhos das requisições devem conter as seguintes chaves:
    - `Content-Type: application/json`
    - `Accepts: application/json`


  - Cabeçalhos das respostas devem conter as seguinte chaves:
    - `Content-Type: application/json`


  - Cabeçalhos das respostas devem conter status de acordo com o que realmente aconteceu:
    - Ao acessar um recurso: `HTTP/1.1 200 OK`
    - Ao criar um recurso: `HTTP/1.1 201 Created`
    - Ao destruir um recurso: `HTTP/1.1 204 No Content`
    - Ao atualizar um recurso: `HTTP/1.1 201 Created`
    - Ao acessar um recurso sem permissão: `HTTP/1.1 403 Forbidden`
    - Ao acessar recursos que não existam: `HTTP/1.1 404 Not Found`
    - Ao receber requisição sem `Content-Type: application/json`: `HTTP/1.1 406 Not Acceptable`

## Estrutura de Pastas

```
|-- docs              // Documentos sobre o projeto
|-- infrastructure    // Arquivos sobre a infraestrutura de desenvolvimento
|-- server            // Codigo fonte do webservice
  |-- index.js        // Arquivo principal do serviço
  |-- package.json    // Definição de dependencias e comandos pre-definidos
  |-- config          // Configurações do projeto
  |-- controllers     // Controllers do projeto
  |-- models          // Modelos das entidades do banco de dados
  |-- routes          // Definição de rotas da aplicação
  |-- seeders         // Seed de dados limpos para aplicação
  |-- tests           // Testes automatizados
```

## Persistencia de Dados

A arquitetura de persistencia de dados será criada utilizando o RDBMS [PostgreSQL 9.4](http://www.postgresql.org/). Por ser rápido, simples, opensource e de facil configuração, foi a opção mais aceita pelo grupo.

---
## Dependências:

 - [Nodejs](http://nodejs.org)
 - [PostgreSQL 9.4](http://postgresql.org)

---

# Como configurar um ambiente de desenvolvimento

## Manual

 Tenha instalado:
 - [Git](http://git-scm.com)
 - [Node.js](http://nodejs.org)
 - [PostgreSQL 9.4](http://www.postgresql.org/)
 - [Babun](http://babun.github.io)

Tenha seu servidor PostgreSQL rodando e algum gerenciador de RDBMS visual para facilitar seu trabalho, pode começar a iniciar a aplicação.

Configure o arquivo `config/config.json` para apontar para seu banco local.

Com o servidor de PostgreSQL rodando, execute:

```bash
# clone o projeto
git clone https://seu_username@bitbucket.org/vagalivre/vagalivre-backend.git

# acesse o diretório do servidor
cd vagalivre-backend/server/

# instale as dependencias
npm install

# cria a estrutura das tabelas, execute na primeira vez, e caso altere propriedades de models que já foram criados
# caso voce crie novos models, ao reiniciar o servidor ele irá sincronizar eles e suas devidas estruturas
npm run migration

# insere dados iniciais no banco de dados, execute só na primeira vez
npm run seed

# inicie a aplicação
npm run start-dev
```

## Automatizado

Atualmente estou trabalhando na virtualização com [Docker](http://docker.com), já que tenho usado pra manter os bancos de desenvolvimento e teste funcionando juntos de forma padronizada e reproduzivel.

### UPDATE: 16/03/2016

Atualmente temos a criação da infraestrutura necessaria já automatizada para a aplicação funcionar em ambientes de teste e produção em qualquer sistema operacional.

Porém para ambiente de desenvolvimento, somente se o sistema operacional for uma distribuição Linux, pois o Docker roda em cima da kernel do linux para virtualizar seus containeres e criar os volumes para sincronizar pastas do Container com o Host.

O Windows e o Mac criam uma maquina virtual mínima para rodar o Docker e as dependencias, o que não nos permite sincronizar de forma nativa as pastas utilizando somente volumes do docker.

### UPDATE: 19/03/2016

Consegui fazer uma configuração com os volumes do `docker` e do `docker-compose` que permite o sincronismo das pastas durante o desenvolvimento.

Além disso, o `docker-compose` consegue criar networks para seus containeres, o que significa que você, ao usar a propriedade `links` no seu `docker-compose.yml`, voce dá a habilidade de um container encontrar o outro pelo seu nome. Ele basicamente configura um hostname no arquivo `/etc/hosts` com o ip do container e o nome dele como host, o que é ótimo para configuração do banco de dados para a aplicação.
