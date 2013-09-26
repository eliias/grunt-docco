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

    var process = function self(list, dest, options, async) {
        var f = list.shift();
        var opts = options({ args: [f] });
        var parts = f.split("/");
        parts = parts.length > 1 ? parts.slice(0, -1) : parts.join('/');
        var path = parts.join('/');
        dest = dest || opts.output;
        opts.output = dest + '/' + path.replace(opts.basepath, "");

        docco.document(opts, function() {
            if(list.length > 0) {
                self(list, dest, options, async);
            } else {
                async();
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
            process(file.src, file.dest, task.options, done);
        });

    });

};
