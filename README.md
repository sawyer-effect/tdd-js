# Environment for TDD with JS


## Installation

* Install VirtualBox
* Install vagrant
* Install Ansible
* Clone repository: `git clone git@github.com:sawyer-effect/tdd-js.git`

## To run VM

* Go to project dir: `cd tdd-js`
* Execute command `vagrant up`

## To run tests

* To run tests you can run the following commad : `vagrant ssh -c "grunt --gruntfile /opt/software/tdd-js/Gruntfile.js test"`

## Tasks to run in Jenkins

* Goto http://192.168.33.10:8080/jenkins/
* Add a new freestyle job that runs this shell scripts:

### Karma


```
cd /opt/software/tdd-js
./node_modules/.bin/karma start --single-run --browsers PhantomJS
```

### tdd_framework

```
curl http://[HOST]/on/demandware.store/Sites-[SITE_NAME]-Site/default/Tester-Run\?suite\=[SUITE_NAME]\&cartridge\=[CARTRIDGE_NAME]\&testid\=-1 | if [ `jq '.passed'` != "false"  ] ; then exit 1 ; else exit 0 ; fi
```
