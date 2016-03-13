# Vaga Livre - Backend

Serviço de backend do projeto desenvolvido para Maratona técnologica da Uvv.

---

# Arquitetura do projeto

> TODO: Escrever

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
