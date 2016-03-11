# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
	config.vm.box = "centos/7"

	config.vm.box_check_update = false

	config.vm.network "forwarded_port", guest: 3000, host: 8080

	config.vm.synced_folder ".", "/vagrant"
	config.vm.synced_folder ".", "/home/sync", disabled: true

	config.vm.provider "virtualbox" do |vb|
		vb.memory = "128"
	end

	config.vm.provision :shell, path: "infrastructure/bootstrap.sh"
end
