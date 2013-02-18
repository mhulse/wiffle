/*global module:false */

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		/*----------------------------------( META )----------------------------------*/
		
		meta: {
			
			banner_long: '/*!\n' +
			             ' * <%= pkg.title || pkg.name %>\n' +
			             '<%= pkg.description ? " * " + pkg.description + "\\n" : "" %>' +
			             ' *\n' +
			             '<%= pkg.author.name ? " * @author " + pkg.author.name + "\\n" : "" %>' +
			             '<%= pkg.author.url ? " * @link " + pkg.author.url + "\\n" : "" %>' +
			             '<%= pkg.homepage ? " * @docs " + pkg.homepage + "\\n" : "" %>' +
			             ' * @copyright Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>.\n' +
			             '<%= pkg.licenses ? " * @license Released under the " + _.pluck(pkg.licenses, "type").join(", ") + ".\\n" : "" %>' +
			             '<%= pkg.version ? " * @version " + pkg.version + "\\n" : "" %>' +
			             ' * @date <%= grunt.template.today("yyyy/mm/dd") %>\n' +
			             ' */\n\n',
			
			banner_short: '/*! ' +
			              '<%= pkg.title || pkg.name %>' +
			              '<%= pkg.version ? " v" + pkg.version : "" %>' +
			              '<%= pkg.licenses ? " | " + _.pluck(pkg.licenses, "type").join(", ") : "" %>' +
			              '<%= pkg.homepage ? " | " + pkg.homepage : "" %>' +
			              ' */'
			
		},
		
		/*----------------------------------( 01 )----------------------------------*/
		
		clean: {
			
			options: {
				
				force: true // Sketchy!
				
			},
			
			build: {
				
				src: [
					
					'./tmp/*',
					'../<%= pkg.name %>/*'
					
				]
				
			}
			
		},
		
		/*----------------------------------( 02 )----------------------------------*/
		
		/**
		 * @see http://www.jshint.com/docs/
		 * @see http://www.jshint.com/docs/
		 * @see https://github.com/jshint/jshint/blob/r12/jshint.js#L256
		 */
		
		jshint: {
			
			options: {
				
				jshintrc: '.jshintrc'
				
			},
			
			init: [
				
				'./Gruntfile.js'
				
			]
			
		},
		
		/*----------------------------------( 03 )----------------------------------*/
		
		cssmin: {
			
			/* Need banner option! */
			
			compress: {
				
				files: {
					
					'./tmp/<%= pkg.name %>.min.css': [
						'./src/_<%= pkg.name %>-core.css',
						'./src/_<%= pkg.name %>-h2o.css',
						'./src/_<%= pkg.name %>-pct.css',
						'./src/_<%= pkg.name %>-px.css'
					]
					
				}
				
			}
			
		},
		
		/*----------------------------------( 02 )----------------------------------*/
		
		/**
		 * @see https://github.com/gruntjs/grunt-contrib-concat
		 */
		
		concat: {
			
			uncompressed: {
				
				options: {
					
					banner: '<%= meta.banner_long %>'
					
				},
				
				src: [
					'./src/_<%= pkg.name %>-core.css',
					'./src/_<%= pkg.name %>-px.css',
					'./src/_<%= pkg.name %>-pct.css',
					'./src/_<%= pkg.name %>-h2o.css'
				],
				dest: '../<%= pkg.name %>/<%= pkg.name %>.css'
				
			},
			
			compressed: {
				
				options: {
					
					banner: '<%= meta.banner_short %>'
					
				},
				
				src: ['./tmp/<%= pkg.name %>.min.css'],
				dest: '../<%= pkg.name %>/<%= pkg.name %>.min.css'
				
			}
			
		}
		
	});
	
	//--------------------------------------------------------------------
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	//----------------------------------
	
	grunt.registerTask('default', ['clean', 'jshint', 'cssmin', 'concat']);
	
};
