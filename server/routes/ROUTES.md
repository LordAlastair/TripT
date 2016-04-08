# Rotas

Nesse diretório se encontram as rotas da aplicação.

Para criar uma nova rota, basta incluir o arquivo nessa pasta seguindo a estrutura do template.

# Template

- Sem autenticação de rotas:

```javascript
'use strict';

// carrega o módulo do express
const express = require('express');

// exporta uma função que recebe como parametro o app, que é a instancia do Express
module.exports = function (app) {

  // todos os controllers sao acessiveis por app.controllers usando o nome do arquivo. Se houver um - no nome do arquivo, acesse utilizando Bracket Notation.
  const controller = app.controllers["file-name"];

  // crie um Router utilizando o express e guarde em uma constante
  const router = express.Router();

  // determina as rotas de acordo com os metodos
  router.get('/', controller.findAll);
  router.post('/', controller.create);

  router.get('/:id', controller.find);
  router.put('/:id', controller.update);

  // atrela o roteador criado com uma determinada rota na aplicação.
  app.use('/veiculoCaracteristica', router);
};

```

- Com autenticação

```javascript
'use strict';

// carrega o módulo do express
const express = require('express');

// carrega o módulo do passport
const passport = require('passport');

// exporta uma função que recebe como parametro o app, que é a instancia do Express
module.exports = function (app) {

  /**
   * Todos os controllers sao acessiveis por app.controllers usando o nome do arquivo.
   *   Se houver um - no nome do arquivo, acesse utilizando Bracket Notation.
   */
  const controller = app.controllers["file-name"];

  // crie um Router utilizando o express e guarde em uma constante
  const router = express.Router();

  /**
   * obriga todas as rotas do roteador a serem autenticadas utilizando JWT.
   * por ser um serviço stateless, não iremos guardar sessão nunca.
   *
   * todas as requisições para rotas com essa linha precisam enviar o JWT retornado pela rota /usuario/authenticate no cabeçalho Authentication da requisição.
   */
  router.use(passport.authenticate('jwt', { session: false }));

  // determina as rotas de acordo com os metodos
  router.get('/', controller.findAll);
  router.post('/', controller.create);
  router.get('/:id', controller.find);
  router.put('/:id', controller.update);

  // atrela o roteador criado com uma determinada rota na aplicação.
  app.use('/veiculoCaracteristica', router);
};

```
