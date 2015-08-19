# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty32"

  config.vm.box_check_update = false

  config.vm.synced_folder ".", "/opt/software/tdd-js"

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/playbook.yml"
  end

end
