# Controllers

Nesse diretório se encontram os controllers do projeto.

## Formas de escrever um controller
Podemos (e devemos) definir um padrão para escrevermos de forma igual, mas o projeto ainda está no início, então vou listar aqui as formas que temos de escrever controllers.

- Com classes e métodos estáticos (ES6, disponivel a partir da versão 4.0.0)
```javascript
  module.exports = function(app) {
    class Controller {
      static get(req, res) {
        var response = { id: 1, type: "exemplo" };
        res.json(response);
      }
    }

    return Controller;
  };
```

- Objetos usando Enhanced Object Literals (ES6)
```javascript
  module.exports = function(app) {
    var controller = {
      get(req, res) {
        var response = { id: 1, type: "exemplo" };
        res.json(response);
      }
    };

    return controller;
  };
```

- Com objetos no padrão ES5
```javascript
  module.exports = function(app) {
    var controller = {};

    controller.get = function(req, res) {
      var response = { id: 1, type: "exemplo" };
      res.json(response);
    };

    return controller;
  };
```
```javascript
  module.exports = function(app) {
    var controller = {
      get: function(req, res) {
        var response = { id: 1, type: "exemplo" };
        res.json(response);
      }
    };

    return controller;
  };
```
