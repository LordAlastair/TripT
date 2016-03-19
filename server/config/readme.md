# Instruções para configurar conexão com PostgreSQL:

## Manual ou Executando o servidor no Host

Caso esteja utilizando um servidor configurado no seu host, ou estiver utilizando Docker só para iniciar o banco de dados e desenvolvendo usando sua runtime de nodejs no seu host, você terá de alterar os dados de `./config/config.json` para uma configuração em que seu host consiga encontrar seu servidor de PostgreSQL.

## Docker

Se estiver utilizando Docker para iniciar o ambiente de desenvolvimento inteiro, não é necessário alterar os dados em `./config/config.json`.

Tenha certeza que seu docker daemon está funcionando.
```bash

# Windows & Mac:
docker-machine start && eval $(docker-machine env)

# Linux (Ubuntu):
sudo service docker start
```  

caso queira iniciar o ambiente de desenvolvimento: `docker-compose up` ou `docker-compose -f docker-compose.yml up`

caso queira iniciar o ambiente de teste: `docker-compose -f docker-compose-test.yml up`

caso queira iniciar só o banco de dados de desenvolvimento: `docker-compose up db`

caso queira iniciar só o banco de dados de teste: `docker-compose -f docker-compose-test.yml up db`
