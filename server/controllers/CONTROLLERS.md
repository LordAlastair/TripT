# Controllers

Nesse diretório se encontram os controllers do projeto.

## Boilerplate

Existem varias formas de escrever um controller, porem por questões de padronização, facilidade de leitura, e simplicidade de código, esse estilo será o adotado:

- Com objetos no padrão ES5

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