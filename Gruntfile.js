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
          'npm run build',
          'npm run server-dev'
        ].join('&')
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'public/*.js',
        dest: 'public/built.js'
      }
    }


  });
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['shell']);

  grunt.registerTask('start', ['shell']);
};
