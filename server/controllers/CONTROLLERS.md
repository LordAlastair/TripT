# Controllers

Nesse diretório se encontram os controllers do projeto.

Para criar um novo controller, basta incluir o arquivo nessa pasta seguindo a estrutura do template.

## Template

Existem várias formas de escrever um controller, porém por questões de padronização, facilidade de leitura e simplicidade de código, esse estilo será o adotado:

- Exportando objetos no padrão ES5

```javascript
  'use strict';

  module.exports = function(app) {
    var controller = {};

    controller.get = function(req, res) {
      var response = { id: 1, type: "exemplo" };
      res.json(response);
    };

    return controller;
  };
```
