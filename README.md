# Vaga Livre - Backend

Serviço de backend do projeto desenvolvido para Maratona técnologica da Uvv.

---

# Ambiente de Desenvolvimento

O ambiente de desenvolvimento é criado e montado utilizando o [Vagrant](https://vagrantup.com).

Vagrant é uma ferramenta para poder criar maquinas virtuais de forma reproduzivel, assim iremos seguir o padrão de IAC (Infrastructure as Code).

Dessa forma, iremos garantir que a infraestrutura utilizada por todos no ambiente de desenvolvimento, testes e produção será a mesma.

No root deste projeto é encontrado um arquivo `Vagrantfile`. É um arquivo em ruby com instruções de qual imagem deve ser clonada, configurações de rede e memória e quais comandos serão executados no provisionamento dessa maquina.

Mais informações sobre o `Vagrantfile` podem ser encontradas em [https://www.vagrantup.com/docs/vagrantfile/](https://www.vagrantup.com/docs/vagrantfile/)

No ambiente de desenvolvimento estaremos utilizando a distribuição [Ubuntu](http://www.ubuntu.com/), presente em uma imagem mínima no [Atlas](https://atlas.hashicorp.com/) (hub de imagens do Vagrant, suportado pela Hashicorp): [hashicorp/precise64](https://atlas.hashicorp.com/hashicorp/boxes/precise64).

No momento, o ambiente necessita de 128mb de memória disponível.

## Dependências:

 - [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
 - [Vagrant](https://vagrantup.com)

## Iniciando Ambiente

Com o terminal no root do projeto, inicie o ambiente de desenvolvimento.

`vagrant up`

Para acessar a maquina virtual:

`vagrant ssh`

## Localização do Código Fonte

O diretório `./server` deste reposítorio é sincronizado com a pasta `/server` no ambiente virtualizado. Todas as alterações feitas são sincronizadas em tempo real para dentro/fora da maquina virtual.

## Iniciando o servidor

Acesse a maquina virtual:
`vagrant ssh`

Acesse o diretório:
`cd /server`

Instale as dependências:
`npm install`

Inicie o servidor:
`npm start`
