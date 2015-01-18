/*jslint browser: true */
/*global require */

/*
 * docco
 * https://github.com/eliias/grunt-docco
 *
 * Copyright (c) 2013 Hannes Moser
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
    'use strict';

    var docco       = require('docco'),
      path        = require('path'),
      _           = grunt.util._;

    /**
     * Process a single file with the docco generator
     *
     * @param {Array} list of files
     * @param {Async} done
     * @param {Object} options object passed in via task configuration
     */
    function process( list, done, options) {
        var dir     = list.shift(),
          opts    = { args: dir.src };

        // Set docco output
        opts.output = dir.dst;

        //add other options
        _.extend(opts,options);

        // Generate docs
        docco.document(opts, function () {
            if (list.length > 0) {
                process( list, done, options );
            } else {
                done();
            }
        });
    }

    /**
     * Parse filetree and return all directories found
     *
     * @param {Object} dirs The directory hash
     * @param {Array} list A list of files
     * @param {Function} options Task options
     * @return {Object} Returns the modified directory hash
     */
    function parse( dirs, list, options ) {
        var f    = list.src.shift(),
          opts = options(),
          dir = path.join( opts.dst, path.dirname( list.dest ) );

        // Check if a destination is set
        if (!opts.dst) {
            grunt.fail.fatal( 'You must set the "dst" option.');
        }

        if (!dirs[dir] || !_.isArray( dirs[dir] )) {
            dirs[dir] = [ f ];
        } else {
            dirs[dir].push( f );
        }

        if (list.src.length > 0) {
            parse( dirs, list, options );
        }

        return dirs;
    }

    /**
     * Register docco task
     */
    grunt.registerMultiTask('docco', 'Generate docco', function () {
        // Props
        var task = this,
          done = this.async();

        // Get directories
        var dirs = {};
        this.files.forEach( function( file ) {
            parse( dirs, file, task.options );
        } );

        // Map hash into list
        var list = [];
        _.forEach( dirs, function( src, dst ) {
            list.push( {
                src: src,
                dst: dst
            });
        } );

        // Generate docs
        process( list, done, task.options());

    });

};
