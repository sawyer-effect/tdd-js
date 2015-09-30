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

* Run `vagrant ssh`
* Go to `cd /opt/software/tdd-js`
* Execute test with `grunt test`

## Task to run in Jenkins

* Goto http://192.168.33.10:8080/jenkins/
* Add a new freestyle job that runs shell script:

```
cd /opt/software/tdd-js
./node_modules/.bin/karma start --single-run --browsers PhantomJS
```
