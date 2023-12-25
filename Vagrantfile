ENV['VAGRANT_NO_PARALLEL'] = 'yes'

private_network_ip_range = "10.10.10."

Vagrant.configure(2) do |config|

  NodeCount = 2

  (1..NodeCount).each do |i|
    config.vm.define "node#{i}" do |node|
      node.vm.box = "ubuntu/bionic64"
      node.vm.hostname = "node#{i}.example.com"
      node.vm.network "private_network", ip: "#{private_network_ip_range}#{i}"
      node.vm.provider "virtualbox" do |v|
        v.name = "node#{i}"
        v.memory = 1048
        v.cpus = 1
      end
    end
  end

end