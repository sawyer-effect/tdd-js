# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty32"

  config.vm.box_check_update = false

  config.vm.synced_folder "./runner", "/opt/software/app/runner"
  config.vm.synced_folder "./source", "/opt/software/app/source"

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible/playbook.yml"
  end

end
