# Vaga Livre - Backend

Serviço de backend do projeto desenvolvido para Maratona técnologica da Uvv.

---

# Ambiente de Desenvolvimento

O ambiente de desenvolvimento é criado e montado utilizando o [Vagrant](https://vagrantup.com).

Vagrant é uma ferramenta para poder criar maquinas virtuais de forma reproduzivel, assim iremos seguir o padrão de IAC (Infrastructure as Code).

Dessa forma, iremos garantir que a infraestrutura utilizada por todos no ambiente de desenvolvimento, testes e produção será a mesma.

No root deste projeto é encontrado um arquivo `Vagrantfile`. É um arquivo em ruby com instruções de qual imagem deve ser clonada, configurações de rede e memória e quais comandos serão executados no provisionamento dessa maquina.

Mais informações sobre o `Vagrantfile` podem ser encontradas em [https://www.vagrantup.com/docs/vagrantfile/](https://www.vagrantup.com/docs/vagrantfile/)

No ambiente de desenvolvimento estaremos utilizando a distribuição [CentOS](http://www.centos.org/), presente em uma imagem no [Atlas](https://atlas.hashicorp.com/) (hub de imagens do Vagrant, suportado pela Hashicorp): [centos/7](https://atlas.hashicorp.com/centos/boxes/7).

No momento, o ambiente necessita de 128mb de memória disponível.

## Dependências:

 - [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
 - [Vagrant](https://vagrantup.com)

## Iniciando Ambiente

Com o terminal no root do projeto, inicie o ambiente de desenvolvimento.

`vagrant up`

 > Ao executar pela primeira vez, é possível ter problemas para configuração das pastas sincronizadas entre o host e o guest, por conta do Guest Additions do Virtualbox. O motivo disso é a falta da presença do pacote `kernel-devel`.

 ```
 ...

 Installing Virtualbox Guest Additions 5.0.14 - guest version is unknown
Verifying archive integrity... All good.
Uncompressing VirtualBox 5.0.14 Guest Additions for Linux............
VirtualBox Guest Additions installer
Copying additional installer modules ...
Installing additional modules ...
Removing existing VirtualBox non-DKMS kernel modules[  OK  ]
Building the VirtualBox Guest Additions kernel modules
The headers for the current running kernel were not found. If the following
module compilation fails then this could be the reason.
The missing package can be probably installed with
yum install kernel-devel-3.10.0-229.14.1.el7.x86_64

Building the main Guest Additions module[FAILED]
(Look at /var/log/vboxadd-install.log to find out what went wrong)
Doing non-kernel setup of the Guest Additions[  OK  ]
Installing the Window System drivers
Could not find the X.Org or XFree86 Window System, skipping.
An error occurred during installation of VirtualBox Guest Additions 5.0.14. Some functionality may not work as intended.
```

Para resolver esse problema, execute os scripts de provisionamento:

`vagrant provision`

E reinicie a maquina:

`vagrant reload`

Para acessar a maquina virtual:

`vagrant ssh`

## Localização do Código Fonte

O root deste reposítorio é sincronizado com a pasta `/vagrant` no ambiente virtualizado. Todas as alterações feitas são sincronizadas em tempo real para dentro/fora da maquina virtual.

## Iniciando o servidor

Acesse a maquina virtual:
`vagrant ssh`

Acesse o diretório:
`cd /vagrant/server`

Instale as dependências:
`npm install`

Inicie o servidor:
`npm start`
