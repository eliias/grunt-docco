/*
 * docco
 * https://github.com/eliias/grunt-docco
 *
 * Copyright (c) 2013 Hannes Moser
 * Licensed under the MIT license.
 */

'use strict';
var docco = require('docco');

module.exports = function (grunt) {

    var process = function(list, options) {
        var f = list.shift();
        docco.document(options({ args: [f], output: "docs/annotated-source" }), function() {
            if(l.length > 0) {
                process(n);
            } else {
                console.log("processing finished");
            }
        });
    };

    grunt.registerMultiTask('docco', 'Generate docco', function () {
        // Props
        var task = this;
        var processed = 0;
        var length = this.files.length;
        var done = this.async();

        // Get number of files we need to process
        this.files.forEach(function (file) {
            process(file.src, task.options);
        });

    });

};
