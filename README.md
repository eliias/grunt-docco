# grunt-docco2

This is a [grunt plugin](http://gruntjs.com/plugins) which uses [docco](http://jashkenas.github.io/docco/) to create
HTML documents that displays your comments intermingled with your code.

I got the idea for this plugin from [David Souther](https://github.com/DavidSouther/grunt-docco) but his version did
not work for me and `grunt 0.4`.

## Info

Some people experienced issues with an unmet docco dependency. I tried to fix this by pointing to a specific commit
of docco but I am not sure if this is working with all NPM versions supporting github URL's.

I have test it on following setup:
- Mac OS X 10.9.1
- Macports 2.2.1
- Node v0.10.22
- npm 1.3.15

## Getting Started

This plugin requires Grunt `~0.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started)
guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt
plugins.
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-docco2
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-docco2');
```

## The "docco" task

### Overview
In your project's Gruntfile, add a section named `docco` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  docco: {
    options: {
        dst: 'docs',
        layout: 'parallel'
    }
    docs: {
        files: [
            {
                expand: true,
                cwd: 'public/js'
            }
        ]
    }
  }
})
```

### Usage Examples

This example uses this pattern `public/js/**/*.js` to get your code files.
In this case `public/js/libs` should be excluded from docco.

If you are not sure about the pattern and how you should define the `src` array, read more about the
[Files Array Format](http://gruntjs.com/configuring-tasks#files-array-format).

```js
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig( {

        docco: {
            options: {
                dst: './docs/annotated-source',
                layout: 'parallel'
            },
            docs: {
                files: [
                    {
                        expand: true,
                        cwd: './public/js',
                        src: [
                            '**/*.js',
                            '!libs/**/*'
                        ]
                    }
                ]
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-docco2');

    // Default task(s)
    grunt.registerTask('default', ['docco']);

};
```

## Release History
* 24-02-2013        0.2.0   Major refactoring of the core functions, be aware that the options are not 100% compatible with 0.1.x
* 26-09-2013        0.1.5   Allow output option as addition to dest (TODO Examples in README are outdated)
* 26-09-2013        0.1.4   Fixed docco dependency
* 26-09-2013        0.1.3   Fixed docco dependency (broken release)
* 17-09-2013        0.1.2   Supports nested directories
* 25-05-2013        0.1.1   Fixes README and docs
* 25-05-2013        0.1.0   Initial release
