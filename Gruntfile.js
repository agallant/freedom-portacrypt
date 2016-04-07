/**
 * Gruntfile for freedom-portacrypt
 **/

module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({
    copy: {
      build: {
        cwd: 'src/',
        src: ['**'],
        dest: 'build/',
        flatten: false,
        filter: 'isFile',
        expand: true
      },
      freedom: {
        src: [require.resolve('freedom')],
        dest: 'build/',
        flatten: true,
        filter: 'isFile',
        expand: true,
        onlyIf: 'modified'
      },
      scrypt: {
        src: [require.resolve('scrypt-async')],
        dest: 'build/',
        flatten: true,
        filter: 'isFile',
        expand: true,
        onlyIf: 'modified'
      },
      tweetnacl: {
        src: [require.resolve('tweetnacl')],
        dest: 'build/',
        flatten: true,
        filter: 'isFile',
        expand: true,
        onlyIf: 'modified'
      },
      tweetnaclUtil: {
        src: [require.resolve('tweetnacl-util')],
        dest: 'build/',
        flatten: true,
        filter: 'isFile',
        expand: true,
        onlyIf: 'modified'
      },
      distManifest: {
        src: 'src/freedom-portacrypt.json',
        dest: 'dist/freedom-portacrypt.json',
        onlyIf: 'modified'
      }
    },

    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: 'build/',
          src: '**/*.js',
          dest: 'dist/'
        }]
      }
    },

    jshint: {
      all: ['src/**/*.js', 'spec/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      browsers: {
        singleRun: true,
        autoWatch: false
      },
      watch: {
        singleRun: false,
        autoWatch: true,
        reporters: ['progress', 'story'],
        preprocessors: {},
        coverageReporter: {}
      },
      phantom: {
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: false
      }
    },

    // TODO make demo work in other freedom flavors (Chrome/FF/Node)
    connect: {
      demo: {
        options: {
          port: 8000,
          keepalive: true,
          base: ['./', 'build/'],
          open: 'http://localhost:8000/build/'
        }
      }
    },

    clean: ['build/', 'dist/']
  });

  grunt.registerTask('build', [
    'jshint',
    'copy:build',
    'copy:freedom',
    'copy:scrypt',
    'copy:tweetnacl',
    'copy:tweetnaclUtil',
  ]);
  grunt.registerTask('test', [
    'build',
    'karma:browsers',
    'karma:phantom'
  ]);
  grunt.registerTask('dist', [
    'test',
    'copy:distManifest',
    'uglify'
  ])
  grunt.registerTask('demo', [
    'build',
    'connect'
  ]);
  grunt.registerTask('default', [
    'build',
    'karma:phantom'
  ]);

}
