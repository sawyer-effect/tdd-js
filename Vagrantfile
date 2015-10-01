# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty32"

  config.vm.box_check_update = false

  config.vm.synced_folder "./app", "/opt/software/tdd-js"

  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.network "forwarded_port", guest: 8080, host: 8080

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/playbook.yml"
  end

end
