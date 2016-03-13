# Controllers

Nesse diretório se encontram os controllers do projeto.

### Antes de qualquer coisa

É importante que os controllers sejam definidos dentro de uma função em `module.exports`, pois essa função vai receber um parametro `app`, que referencia a nossa instância do Express, e é nessa variavel onde encontramos nossos models carregados pelo módulo `consign`, quando o servidor é iniciado.

Certo:
```javascript
module.exports = function(app) { // parametro app
  var model = app.models.van; // buscando model

  var controller = {}; // declaração do objeto

  // declaração dos metodos usando o model;

  return controller;
};
```

Errado:
```javascript
var controller = {}; // declaração do objeto

// declaração dos metodos, mas não tem como acessar o model

module.exports = controller; // retorno
```

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
