# Seeders

## O que é um Seeder

É um script responsável por alimentar uma determinada tabela com dados.

No arquivo `package.json` tem uma função pré-configurada que pode ser chamada executando `npm run seed`.

Ao executar essa função, é executado o seeder do Sequelize.js, que lê todos os arquivos desta pasta e executa os seeds pendentes.

## Como funciona um Seeder do Sequelize.js

Seeders são modulos em Node.js que exportam um objeto literal com 2 propriedades, que são `up` e `down`.

`up` é responsável por alimentar a tabela com dados.

`down` é responsável destruir dados de uma determinada tabela.

Essas propriedades recebem um objeto do tipo `function` que precisa esperar por dois argumentos, nessa função parametrizados por `queryInterface`, e `Sequelize`.

`queryInterface` é uma interface com algumas funções para auxiliar na criação e destruição de dados no banco.

`Sequelize` é a instância do ORM.

Sem nenhuma lógica definida, você deve ter um boilerplate semelhante a este:

```javascript
module.exports = {
  up: function (queryInterface, Sequelize) {
    // alimentação de dados
  },

  down: function (queryInterface, Sequelize) {
    // destruição de dados
  }
};
```
