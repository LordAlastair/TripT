# Vaga Livre

Projeto desenvolvido para Maratona técnologica da Uvv.

# Ambiente de Desenvolvimento

O ambiente de desenvolvimento é criado e montado utilizando o [Vagrant](https://vagrantup.com). Vagrant é uma ferramenta para poder criar maquinas virtuais de forma reproduzivel seguindo o padrão de IAC (Infrastructure as Code).

No root deste projeto é encontrado um arquivo `Vagrantfile`. É um arquivo em ruby com instruções de qual imagem deve ser clonada, configurações de rede e memória e quais comandos serão executados no provisionamento dessa maquina.

Mais informações sobre o `Vagrantfile` podem ser encontradas em [https://www.vagrantup.com/docs/vagrantfile/](https://www.vagrantup.com/docs/vagrantfile/)

No ambiente de desenvolvimento estaremos utilizando a distribuição [Alpine](http://www.alpinelinux.org/).

## Dependências:

 - [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
 - [Vagrant](https://vagrantup.com)

## Iniciando Ambiente

Instale o plugin [`vagrant-alpine`](https://github.com/maier/vagrant-alpine), necessário para compartilhamento de pastas entre o guest e host.

`vagrant plugin install vagrant-alpine`

Com o terminal no root do projeto, inicie o ambiente de desenvolvimento.

`vagrant up`

Quando quiser acessar a maquina virtual:

`vagrant ssh`
