# Vaga Livre - Backend

Serviço de backend do projeto desenvolvido para Maratona técnologica da Uvv.

---

# Arquitetura do projeto

A runtime do backend será construída utilizando [Node.js](https://nodejs.org).

A API será construída utilizando [Express](https://expressjs.com).

A API será responsável por manipular dados de usuários por HTTP seguindo o padrão RESTFUL (Representional State Transfer), respeitando os padrões do protocolo HTTP.

O formato padrão para negociação de dados será o tipo MIME `application/json`. A API pode ser flexível em relação ao tipo de dados aceitos e retornados, podendo dar a opção ao desenvolvedor do cliente poder utilizar outro tipo MIME (e.g. `application/xml`) para negociação de dados.

## Estrutura de Pastas

```
|-- server
    |-- index.js // arquivo principal para a API
    |-- package.json // definição de dependencias e comandos
    |-- config // configurações do projeto
    |-- controllers // controllers do projeto
    |-- migrations // arquivos de migração
    |-- models // modelos das entidades do banco de dados
    |-- routes // definição de rotas da aplicação
    |-- seeders // seed de dados limpos para aplicação
    |-- tests // testes automatizados

```
---

# Ambiente de Desenvolvimento

O ambiente de desenvolvimento é criado e montado utilizando o [Vagrant](https://vagrantup.com).

Vagrant é uma ferramenta para construir e configurar maquinas virtuais de forma reproduzível.

Seguindo o padrão de [IAC (Infrastructure as Code)](https://www.thoughtworks.com/insights/blog/infrastructure-code-reason-smile), iremos garantir que a infraestrutura utilizada por todos no ambiente de desenvolvimento, testes e produção será a mesma, evitando os desenvolvedores de terem que lembrar daquela configuração manual que eles passaram horas pesquisando no Google passando dores de cabeça.

No root deste projeto é encontrado um arquivo `Vagrantfile`. É um arquivo em ruby com instruções de qual imagem deve ser clonada, configurações de rede e memória e quais comandos serão executados no provisionamento dessa maquina.

Mais informações sobre o `Vagrantfile` podem ser encontradas em [https://www.vagrantup.com/docs/vagrantfile/](https://www.vagrantup.com/docs/vagrantfile/)

No ambiente de desenvolvimento estaremos utilizando a distribuição [Ubuntu](http://www.ubuntu.com/), presente em uma imagem mínima no [Atlas](https://atlas.hashicorp.com/) (hub de imagens do Vagrant, suportado pela Hashicorp): [hashicorp/precise64](https://atlas.hashicorp.com/hashicorp/boxes/precise64).

No momento, o ambiente necessita de 128mb de memória disponível.

## Dependências:

 - [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
 - [Vagrant](https://vagrantup.com)

## Iniciando Ambiente

Com o terminal na pasta `./infrastructure` do projeto, inicie o ambiente de desenvolvimento.

`$ vagrant up`

## Localização do Código Fonte

O diretório `./server` deste reposítorio é sincronizado com a pasta `/server` no ambiente virtualizado. Todas as alterações feitas são sincronizadas em tempo real para dentro/fora da maquina virtual.

## Iniciando o servidor

- Acesse a maquina virtual:
`/ $ vagrant ssh`

- Acesse o diretório:
`/ $ cd /server`

- Instale as dependências:
`/server $ npm install`

- Inicie o servidor:
`/server $ npm run start-dev`
