const mix = require('laravel-mix');

// assets

mix
	.setPublicPath('dist')
	.sass('src/scss/main.scss', 'dist/css')
	.js('src/js/main.js', 'dist/js')
	.copyDirectory('src/img/*', 'dist/img')
	.copy('src/*.html', 'dist');

// server

mix
	.webpackConfig({
		devServer: {
			hot: true,
			host: 'localhost',
		},
	})
	.browserSync({
		notify: false,
		proxy: 'localhost:8080',
		files: ['src/css/**/*.css', 'src/js/**/*.js', 'src/**/*.html'],
		open: false,
	});
