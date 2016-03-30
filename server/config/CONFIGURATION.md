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

- `./server/models/index.js:7`

```javascript
// .... code 
var env = process.env.NODE_ENV || 'development';
// .... code
``` 