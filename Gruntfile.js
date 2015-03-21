module.exports = function(grunt){

	// modules calls
	grunt.loadNpmTasks('grunt-contrib-connect'); // levantar servidores
	grunt.loadNpmTasks('grunt-contrib-stylus'); // compilar stylus
	grunt.loadNpmTasks('grunt-contrib-watch'); // observar cambios sobre archivos
	grunt.loadNpmTasks('grunt-contrib-jshint'); // validator js files
	grunt.loadNpmTasks('grunt-contrib-cssmin'); // minificar los css
	grunt.loadNpmTasks('grunt-contrib-uglify'); // minificar js

	// config modules
	grunt.config.init({

		connect: { // lanza servidor

		    serverLocalhost: {

		     	options: {
			        hostname: 'www',
			        port:8080,
	                livereload: true,
	                open: true,
	                base: '.',
		    	}
			}
		},

		watch: { // observa cambios sobre archivos

			scripts: {
			   files: ['*'],
			   tasks: ['cssmin','uglify']
			},
			options:{
				livereload: true
			}
		},


		jshint: { // lint de javascript
		    all: ['Gruntfile.js', 'js/**/*.js']
		},


		cssmin: { // minificado de css
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'css/',
		      src: ['*.css', '!*.min.css'],
		      dest: 'css/',
		      ext: '.min.css'
		    }]
		  }
		},

	    uglify: { // minificador de js
	      options: {
	        mangle: true
	      },
	      my_target: {
	        files: {
	          'js/functions.min.js': ['js/functions.js']
	        }
	      }
	    }

	});

	// tareas
	grunt.registerTask('default',['cssmin','uglify','connect','watch']);
	grunt.task.registerTask('mo', ['connect:serverLocalhost']);
	grunt.task.registerTask('ver', ['watch']);


};