module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        shell: {
          test: {
            command: 'vagrant ssh -c "cd /opt/software/app/runner && ./node_modules/karma/bin/karma start"'
          }
        }
    });

    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('test', ['shell:test']);
};
