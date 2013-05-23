/*
 * docco
 * https://github.com/eliias/grunt-docco
 *
 * Copyright (c) 2013 Hannes Moser
 * Licensed under the MIT license.
 */

'use strict';
var docco = require('docco');

module.exports = function(grunt) {
  grunt.registerMultiTask('docco', 'Uses docco to generate nice HTML docs out of your annotated source.', function() {	
	var task = this;
	var processed = 0;
	var length = this.files.length;
	var done = this.async();

    // Iterate over all specified file groups.
    this.files.forEach(function(file) {
		docco.document(task.options({ args: file.src, output: file.dest }), function() {
			if(++processed === length) done();
		});
    });
  });

};
