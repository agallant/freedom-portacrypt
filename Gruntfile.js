/**
 * Gruntfile for freedom-portacrypt
 **/

module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);
  require('jit-grunt')(grunt, {
    'npm-publish': 'grunt-npm'
  });

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

    jasmine_chromeapp: {
      src: ['node_modules/freedom-for-chrome/freedom-for-chrome.*',
            'spec/integration.spec.js', 'build/*.js*', 'build/demo/*'],
      options: {
        paths: ['node_modules/freedom-for-chrome/freedom-for-chrome.js',
                'spec/integration.spec.js'],
        keepRunner: false
      }
    },

    jasmine_firefoxaddon: {
      tests: ['spec/integration.spec.js'],
      resources: ['build/*js*', 'build/demo/*'],
      helpers: ['node_modules/freedom-for-firefox/freedom-for-firefox.jsm']
    },

    jasmine_nodejs: {
      integration: { specs: ['spec/integration.spec.js']}
    },

    connect: {
      demo: {
        options: {
          port: 8000,
          keepalive: true,
          base: ['./', 'build/'],
          open: 'http://localhost:8000/build/demo/main.html'
        }
      }
    },

    clean: ['build/', '.build/', 'dist/']
  });

  grunt.registerTask('build', [
    'jshint',
    'copy:build',
    'copy:freedom',
    'copy:scrypt',
    'copy:tweetnacl',
    'copy:tweetnaclUtil'
  ]);
  grunt.registerTask('test', [
    'build',
    'karma:browsers',
    'karma:phantom',
    'jasmine_chromeapp',
    //'jasmine_firefoxaddon',  // re-enable when webworkers support crypto
    //'jasmine_nodejs'  // currently not passing, "self is not defined"
  ]);
  grunt.registerTask('dist', [
    'test',
    'copy:distManifest',
    'uglify'
  ]);
  grunt.registerTask('demo', [
    'build',
    'connect'
  ]);
  grunt.registerTask('default', [
    'build',
    'karma:phantom'
  ]);

};
