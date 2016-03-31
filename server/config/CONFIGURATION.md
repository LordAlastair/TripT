# Configurações

Neste diretório se encontram as configurações vitais do webservice.

## Explicação dos arquivos

- Arquivos `.js`
  - `app.js`
    - Responsável pela configuração da instância do módulo Express.js, e por expor essa instância para ser executada em `./server/index.js`.

  - `passport.js`
    - Responsável por definir um middleware utilizando o módulo Passport.js e a estratégia JWT. É carregado e instanciado em `app.js` na configuração da instância do Express.js

- Arquivos `.json`
  - `security.json`
    - Contém a chave de segurança utilizada para encodificar e decodificar as senhas do usuário.

  - `config.json`
    - Contém a configuração de conexão de banco de dados para cada ambiente específico.

  - `config.docker.json`
    - Contém a configuração de conexão de banco de dados para cada ambiente específico. Este só é utilizado pela aplicação quando a variável de ambiente `DOCKER_ENV` está setada como `true`.

# Instruções para configurar conexão com PostgreSQL:

Altere os dados de `./config/config.json` para uma configuração em que seu host consiga encontrar seu servidor de PostgreSQL.

```javascript
{
  "development": {
    "username": "admin",
    "password": "passw0rd",
    "database": "vagalivre",
    "host": "192.168.99.100",
    "port": "32776",
    "dialect": "postgres"
  },
  "test": {
    ...
  },
  "production": {
    ...
  }
}
```

Lembre de **nunca** commitar o arquivo config.json alterado.

# Como funciona

Quando instanciado o webservice ou qualquer script de migração, ele usa o arquivo `./server/models/index.js` para carregar uma instancia do sequelize e os models definidos na pasta ` ./server/models` dentro dessa instancia e exporta-la. Esse arquivo `index.js` usa o valor da variável de ambiente `NODE_ENV` para saber se está sendo executado no ambiente de desenvolvimento, teste, ou produção.

Se nenhum valor existir, por padrão ele se encontra no ambiente de desenvolvimento.

- `./server/models/index.js`

```javascript
  // .... code

  // procura pela variavel de ambiente NODE_ENV, se nao setada, usa 'development'
  var env       = process.env.NODE_ENV || 'development';

  // procura pela variavel de ambiente DOCKER_ENV para decidir qual arquivo usar
  var configFile = process.env.DOCKER_ENV ? '/../config/config.docker.json' : '/../config/config.json';

  // carrega o arquivo config.*.json e a configuração pelo ambiente
  var config    = require(__dirname + configFile)[env];

  // .... code
```
