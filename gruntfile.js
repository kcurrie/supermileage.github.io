module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      dist: ['build/*']
    },
    copy: {
      bootstrap: {
        cwd: 'bower_components/bootstrap/dist/',
        expand: true,
        src: ['fonts/*', 'js/bootstrap.min.js'],
        dest: 'build/'
      },
      fontAwesome: {
        cwd: 'bower_components/components-font-awesome/',
        expand: true,
        src: ['fonts/*'],
        dest: 'build/'
      },
      jquery: {
        cwd: 'bower_components/jquery/dist/',
        expand: true,
        src: ['jquery.min.js'],
        dest: 'build/js/'
      },
    },
    less: {
      dev: {
        files: {
          'build/style.css': 'style.less'
        }
      },
      prod: {
        options: {
          compress: true,
          cleancss: true
        },
        files: {
          'build/style.css': 'style.less'
        }
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8000
        }
      }
    },
    watch: {
      less: {
        files: ['style.less'],
        tasks: ['less:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask(
    'default',
    ['clean:dist', 'copy', 'less:dev', 'connect', 'watch']
  );
  grunt.registerTask(
    'build',
    ['clean:dist', 'copy', 'less:prod']
  );
};
