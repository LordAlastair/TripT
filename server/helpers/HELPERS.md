# Helpers

Essa pasta é destinada a modulos que possam ser reaproveitados pelo seu comportamento com a aplicação.

Qualquer modulo que defina alguma função, objeto ou classe e o exporte serve para ser reutilizado.

## Template

- Classe **(Recomendado)**

```js
/**
 * classes da ES6 te obrigam a usar o script em modo estríto.
 */
'use strict'

class MeuHelper {
  metodo() {
    // faz alguma coisa
  }

  static metodoEstatico() {
    // faz alguma coisa que nao precisa de dados da instancia do helper.
  }
}

// Exporta o helper
module.exports = MeuHelper;
```
- Objeto

```js
// Define uma variável com o objeto, com propriedades e métodos
var MeuHelper = {
  string: "valor",
  inteiro: 10,
  objetoInterno: {

  },
  metodo() {
    // faz coisas
  },
  metodoDois: function() {
    // faz coisas
  }
};

// Exporta o helper
module.exports = MeuHelper;
```
