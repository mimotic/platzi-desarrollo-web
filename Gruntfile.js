
module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		connect:{
			server:{
				options: {
				 	hostname: 'www',
        			port: 8080,
        			livereload: true,
        			open: true,
        			base: '.'
    			}

			}
		},

		watch: {
			scripts: {
				files: ['*'],
				tasks: ['uglify','cssmin']
			},
			options: {
				livereload: true
			}
		},

		jshint: {
			all: ['js/**/*.js']
		},

		cssmin: {
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


		uglify: {
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

	// la tarea default se ejecuta con el comando 'grunt'
	grunt.registerTask('default', ['cssmin','uglify','connect','watch']);
	// la tarea moo se ejecuta con el comando 'grunt moo'
	grunt.registerTask('moo', ['connect:server']);
	grunt.registerTask('vercambios', ['watch']);
	grunt.registerTask('js', ['jshint']);
	grunt.registerTask('css', ['cssmin']);
	grunt.registerTask('ugly', ['uglify']);
};