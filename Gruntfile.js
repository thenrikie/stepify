module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			lib: 'lib/'
		},
		preprocess: {
			lib: {
				src: 'src/stepify.js',
				dest: 'lib/stepify.js'
			},
		},
		uglify: {
			lib: {
				src: '<%= preprocess.lib.dest %>',
				dest: 'lib/stepify.min.js'
			}
		}

	});

	grunt.registerTask('build', [
		'clean:lib',
		'preprocess:lib',
		'uglify'
	]);
};