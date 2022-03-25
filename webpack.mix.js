const mix = require('laravel-mix')
require('mix-html-builder')

mix
	.setPublicPath('dist')
	.postCss('src/css/main.css', '', [
		require('autoprefixer'),
		require('cssnano')
	])
	.js('src/js/main.js', '')
	.html({
		htmlRoot: 'src/index.html',
		output: ''
	})
	.webpackConfig({
		devServer: {
			hot: true,
			host: 'localhost',
		}
	})
	.browserSync({
		notify: false,
		proxy: 'localhost:8080',
		files: [
			'src/css/**/*.css',
			'src/js/**/*.js',
			'src/**/*.html'
		]
	})
