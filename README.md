# docco

This is a [grunt plugin](http://gruntjs.com/plugins) which uses [docco](http://jashkenas.github.io/docco/) to create
HTML documents that displays your comments intermingled with your code.

I got the idea for this plugin from [David Souther](https://github.com/DavidSouther/grunt-docco) but his version did
not work for me and `grunt 0.4`.

## Getting Started

This plugin requires Grunt `~0.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started)
guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt
plugins.
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install docco --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('docco');
```

## The "docco" task

### Overview
In your project's Gruntfile, add a section named `docco` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  docco: {
    src: [],
    options: {
        output: 'docs'
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
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		docco: {
			docs: {
				src: ['public/js/**/*.js', '!public/js/libs/*.js', '!public/js/libs/**/*.js'],
				options: {
					output: 'docs/annotated-source'
				}
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-docco');

	// Default task(s)
	grunt.registerTask('default', ['docco']);

};

```

## Release History
0.1.1 Fixes README and docs
0.1 Initial release
