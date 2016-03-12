# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "hashicorp/precise64"

  config.vm.network "forwarded_port", guest: 3000, host: 8080

  config.vm.synced_folder "./server", "/server"

  config.vm.provision :shell, path: "infrastructure/bootstrap.sh"
	config.vm.provision :shell, inline: "nodemon /server", run: "always"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "128"
  end
end
