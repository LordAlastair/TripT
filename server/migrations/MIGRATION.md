# Instruções para executar arquivos de migração.

No arquivo `package.json` existe um script de npm chamado `migrate`.

Executar `npm run migrate` é a mesma coisa que executar `node sync.js`.

O arquivo `sync.js` sincroniza a definição dos models encontrados na pasta `./server/models` com a conexão definida no arquivo `./server/config/config.json`.
