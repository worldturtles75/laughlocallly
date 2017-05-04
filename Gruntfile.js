module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: './server/index.js'
      }
    },

    shell: {
        multiple: {
          command: [
            'npm run build:watch',
            'grunt nodemon'
          ].join('&')
        }
      }


  });
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('start', [
    'shell'
    ]
  );
};